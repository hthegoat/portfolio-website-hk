<template>
  <PortableText
    v-if="hasBlocks"
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
  />
</template>

<static-query>
  {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }

    localImages: allSanityImageAsset {
      edges {
        node {
          id
          localFile
          url
        }
      }
    }
  }
</static-query>

<script>
import PortableText from 'sanity-blocks-vue-component'

export default {
  props: {
    blocks: Array,
  },
  components: {
    PortableText,
  },
  computed: {
    hasBlocks() {
      return this.blocks && this.blocks.length
    },
  },
  data() {
    return {
      serializers: {
        types: {
          image: ({ node }) => {
            const localImage = this.$static.localImages.edges.find(
              ({ node: localImage }) => {
                if (localImage.id === node.asset._ref) {
                  return localImage
                }
              }
            )

            if (localImage) {
              const { node } = localImage

              return (
                <figure>
                  <g-image src={node.localFile} />
                </figure>
              )
            }

            return (
              <figure>
                <img
                  src={this.$urlForImage(
                    node,
                    this.$static.metadata.sanityOptions
                  )
                    .auto('format')
                    .quality(80)
                    .url()}
                  alt={node.alt}
                />
              </figure>
            )
          },
        },
      },
    }
  },
}
</script>

<style scoped>
h1 {
  @apply text-base mx-auto p-24 leading-none text-center;
}
h2 {
  @apply text-2xl leading-tight;
}
h3 {
  @apply pb-20 text-xl leading-tight text-center;
}
h4 {
  @apply text-lg leading-snug;
}
h5 {
  @apply text-base leading-normal;
}
h6 {
  @apply text-sm leading-normal;
}

blockquote {
  @apply container text-center font-bold border-primary pl-4 m-24 text-2xl text-black;
}

img {
  @apply justify-center;
}

figure {
  @apply mb-8;
}

ul {
  @apply list-disc ml-4 pb-4;
}

li {
  @apply leading-tight text-base mb-4;
}

p {
  @apply text-center leading-tight text-base m-8;
}

@screen lg {
  h1 {
    @apply text-5xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-3xl;
  }
  h4 {
    @apply text-2xl;
  }
  h5 {
    @apply text-xl;
  }
  h6,
  p {
    @apply text-lg;
  }
}
</style>
