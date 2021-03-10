<template>
   <section class="text-gray-700 body-font">
                <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row">
                    <div
                        class="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:text-left md:mb-0 lg:text-center">
                    
                    <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-gray-700 lg:text-left lg:text-5xl title-font">
                       Entrepreneur & Performance Marketer
                    </h1>
                    <p class="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                        I am a freelance marketing professional with experience in multiple industries. I work with clients to develop actionable marketing campaigns that convert and drive sales.
                    </p>
                     <p class="flex items-center mb-2 text-gray-600"><span
                            class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" /></svg>
                        </span>$1.6 million in revenue generated</p>
                    <p class="flex items-center mb-2 text-gray-600"><span
                            class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg></span>10 million impressions</p>
                    <p class="flex items-center mb-6 text-gray-600"><span
                            class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg></span>Average of 4x ROAS</p>
                    <div class="flex justify-center">
                       <a href="/contact/"> <button
                            class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                            Contact Me
                        </button></a>
                        <p class="mt-2 text-sm text-center text-gray-600 md:ml-6 md:mt-0 sm:text-left">
                            Take A Look At Some Of My Work
                            <br class="hidden lg:block">
                            <a href="/temp/"
                                class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                                My Work
                                <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    width="20" height="20" fill="currentColor">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                </svg>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                    <img class="object-cover object-center rounded-lg " alt="hero"
                        src="https://i.ibb.co/5Kkxjnx/DSC0764-4.jpg">
                </div>
            </div>
        </section>
</template>

<script>
import AppLogo from '@/assets/images/akarui-logo.svg?inline'

export default {
  components: {
    AppLogo,
  },
  props: {
    heading: String,
    subheading: String,
  },
}
</script>

<style lang="css" scoped>
@screen md {
  .aka-banner-wrapper {
    grid-template-columns: 45% 1fr;
  }
}
</style>
