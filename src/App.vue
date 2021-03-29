<template>
  <div id="nav">
    <Header />
  </div>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: "App",
  components: {
    Header
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    background-color: #ddd;
    padding-bottom: 107px;
  }

  body {
    margin: 0;
    padding: 0;
  }

  header,
  section {
    width: 100%;
    max-width: 1058px;
    margin: 0 auto;
    overflow: auto;
    background-color: #fff;
    position: relative;
    top: 107px;
  }

  .container {
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
  }

  h2,
  h3 {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .empty {
    background-color: #eee;
    height: calc(100vh - 107px);
    padding: 10px 50px;
  }

  /* buttons */
  button {
    position: relative;
    background: none;
    border: none;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 0;
    padding-right: 0;
    font-weight: 600;
    font-size: 13px;
    line-height: 13px;
  }
    button a {
      padding-top: inherit;
      padding-bottom: inherit;
      padding-left: 15px;
      padding-right: 15px;
    }

  button.rounded {
    border-radius: 20px;
  }

  button.contained {
    background-color: #ccc;
    color: #222222;
  }

  button.contained.primary {
    background-color: #be3249;
    color: #fff;
  }

  button.contained.secondary {
    background-color: #fff;
    color: #be3249;
  }

  button.outlined {
    border: 1px solid #ccc;
  }

  button.outlined.primary {
    border: 1px solid #be3249;
    color: #be3249;
  }

  button.outlined.secondary {
    border: 1px solid #fff;
    color: #fff;
  }

  button.underlined {
    border-left: 1px #ccc solid;
  }

  button.underlined:after {
    content: "";
    background-color: #ccc;
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
  }

  button.underlined.secondary:after {
    background-color: #3b7e71;
    color: #3b7e71;
  }
</style>
