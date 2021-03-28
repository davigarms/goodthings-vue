<template>
    <header>
		<TopBar/>
		<NavBar/>
	</header>
</template>

<script>
import NavBar from './Header/NavBar'
import TopBar from './Header/TopBar'

export default {
  name: 'Header',
  components: {
      NavBar,
      TopBar
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    position: fixed;
    z-index: 2;
    top: 0;
    left: calc((100vw - 1058px)/2);
	height: 107px;
	overflow: auto;
}
</style>
