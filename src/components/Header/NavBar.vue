<template>
  <div class="navbar">
    <div class="container">
      <div class="logo">
        <router-link to="/"></router-link>
      </div>
      <ul class="nav">
        <li v-for="menuitem in getMenuItems" :key="menuitem.id">
          <router-link :to="menuitem.link">
            {{menuitem.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  computed: mapGetters(['getMenuItems'])
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
