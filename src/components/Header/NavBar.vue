<template>
  <div class="navbar">
    <div class="container">
      <div class="logo">
        <a href="/"></a>
      </div>
      <ul class="nav">
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          <a href="#">
            What we do
          </a>
        </li>
        <li>
          <a href="#">
            The digital divide
          </a>
        </li>
        <li>
          <a href="#">
            Get involved
          </a>
        </li>
        <li>
          <a href="#">
            Our network
          </a>
        </li>
        <li>
          <a href="#">
            Insights
          </a>
        </li>
      </ul>
    </div>
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
    position: relative;
    background-image: url(../../assets/logo.png);
    width: 188px;
    height: 46px;
    display: inline-block;
    margin: 13px 0;
}

.logo a {
  position: absolute;
  width: 100%;
  height: 100%;
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
