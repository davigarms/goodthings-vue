<template>
  <div class="navbar">
    <div class="container">
      <div class="logo"></div>
      <ul class="nav">
        <li>Home</li>
        <li>What we do</li>
        <li>The digital divide</li>
        <li>Get involved</li>
        <li>Our network</li>
        <li>Insights</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
    background-image: url(../assets/logo.png);
    width: 188px;
    height: 46px;
    display: inline-block;
    margin: 13px 0;
}

.nav {
    float: right;
    display: flex;
    height: 71px;
    margin: 0;
}
    .nav li {
        align-self: center;
        display: inline-block;
        margin: 0 8px;
        font-size: 13px;
        font-weight: 600;  
    }
</style>
