<template>
  <section class="banner">
    <div class="img">
      <img :src="require(`@/assets/${banners[0].img}`)" alt="">
    </div>
    <div class="container">
      <h2>{{banners[0].title}}</h2>
      <p>
        {{banners[0].text}}
      </p>
      <button class="contained rounded secondary">
        <router-link :to="banners[0].link">
          Get involved now!
        </router-link>
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Banner',
    props: {
      banners: Array
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img {
    line-height: 0;
  }

  .img img {
    width: 100%;
    display: block;
  }

  .container {
    position: absolute;
    width: initial;
    top: 61px;
    left: 59px;
  }

  h2 {
    color: #fff;
    font-size: 56px;
    padding: 10px 15px 15px;
    background-color: #497c8f;
    margin: 0;
  }

  p {
    margin: 16px 0;
    color: #497c8f;
    background-color: #fff;
    font-weight: 500;
    font-size: 16px;
    padding: 18px 20px;
    width: 420px;
  }
</style>