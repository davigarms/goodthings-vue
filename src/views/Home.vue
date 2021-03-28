<template>
  <Banner :banners="banners" />
  <About />
  <How />
  <What :whats="whats" />
</template>

<script>
  import Banner from '@/components/Banner.vue'
  import About from '@/components/About.vue'
  import How from '@/components/How.vue'
  import What from '@/components/What.vue'

  export default {
    name: 'Home',
    components: {
      Banner,
      About,
      How,
      What
    },
    data() {
      return {
        whats: [{
            id: 1,
            title: "Get online week",
            text: "Lorem ipsum",
            link: "/getonline"
          },
          {
            id: 2,
            title: "Learn my way",
            text: "Lorem ipsum",
            link: "/learn"
          },
          {
            id: 3,
            title: "Make it click",
            text: "Lorem ipsum",
            link: "/makeit"
          },
          {
            id: 4,
            title: "Digital you",
            text: "Lorem ipsum",
            link: "/digitalyou"
          }
        ],
        banners: [{
          id: 1,
          title: "Get online week 2021",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis elit lectus. Aliquam ac odio sit amet magna imperdiet.",
          img: "banner.jpg",
          link: "/getinvolved"
        }]
      }
    }
  }
</script>

<style>
  
</style>