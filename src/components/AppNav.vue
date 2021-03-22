<template>
   <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
              <a href="/about" label="about" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800 sm:px-2">About Me</a>
              <a href="/temp" label="temp" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800 sm:px-2">Projects</a>
              <!-- <a href="./projects" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800">Projects</a> -->
              <a href="/contact" label="contact" class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800 sm:px-2">Contact Me</a>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          label: 'about',
          to: '/about',
        },
        {
          label: 'temp',
          to: '/temp',
        },
        {
          label: 'contact',
          to: '/contact',
        },
      ],
    }
  },
}
</script>
