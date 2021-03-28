<template>
    <section class="banner">
		<div class="img">
			<img src="../assets/banner.jpg" alt="">
		</div>
		<div class="container">
			<h2>Get online week 2021</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis elit lectus. Aliquam ac odio sit amet magna imperdiet.
			</p>
			<button class="contained rounded secondary">Get involved now!</button>
		</div>
	</section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    
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
