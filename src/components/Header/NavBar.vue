<template>
  <div class="navbar">
    <div class="container">
      <div class="logo">
        <router-link to="/"></router-link>
      </div>
      <ul class="nav">
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/what">
            What we do
          </router-link>
        </li>
        <li>
          <router-link to="/digitaldivide">
            The digital divide
          </router-link>
        </li>
        <li>
          <router-link to="/getinvolved">
            Get involved
          </router-link>
        </li>
        <li>
          <router-link to="/ournetwork">
            Our network
          </router-link>
        </li>
        <li>
          <router-link to="/insights">
            Insights
          </router-link>
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
