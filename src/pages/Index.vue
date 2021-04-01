<template>
  <Layout>
    <AppBanner class="pb-1" heading="Harrison" subheading="start using:">
      
      
    </AppBanner>
    <ClientList />
    <AppBody1 />
    <Testis />
    <section class="mx-auto pt-10">
    <a href="/project2/">
    <h2 class="font-bold mb-4 text-3xl text-center">Case Study #001</h2>
    <img src="https://i.ibb.co/jr6p0HJ/DSC02089.jpg" class="w-full justify-items-center" /></a>
    </section>
   <!-- <section v-if="$page.posts.edges.length" class="mx-auto pt-10">
      <h2 class="font-bold mb-4 text-3xl text-center">Blog Posts</h2>
      <PostList :posts="$page.posts.edges" />
    </section> -->
    <!-- <section v-if="$page.projects.edges.length" class="mx-auto pt-10">
      <h2 class="font-bold mb-4 text-3xl">Latest Project</h2>
      <ProjectList :projects="$page.projects.edges" />
    </section> -->
  </Layout>
</template>

<page-query>
  query{
    posts: allSanityPost (sortBy: "publishedAt" limit: 3) {
      edges {
        node {
          id
          slug {
            current
          }
          author {
            name
          }
          title
          publishedAt(format: "MMMM D, YYYY")
          mainImage {
            asset {
              id
              localFile(width: 660, quality: 80)
              url
            }
          }
        }
      }
    }
    projects: allSanityProject (sortBy: "completed" limit: 1) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          mainImage {
            asset {
              id
              localFile(width: 1100, quality: 80)
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import AppBanner from '@/components/AppBanner'
import ClientList from '@/components/ClientList'
import PostList from '@/components/Blog/PostList'
import ProjectList from '@/components/Project/ProjectList'
import AppBody1 from '@/components/AppBody1'
import Testis from '@/components/Testis'


export default {
  components: {
    AppBanner,
    PostList,
    ProjectList,
    ClientList,
    AppBody1,
    Testis, 
    
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>
