<template>
    <header>
		<div class="topbar">
			<div class="container">
				<div class="search">
					<form>
						<input type="text" placeholder="Search" name="search">
					</form>
				</div>
				<div class="buttons">
					<button class="underlined secondary">Learn</button>
					<button class="contained primary">Donate</button>
				</div>
			</div>
		</div>
		
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
		</div>
	</header>
</template>

<script>
export default {
  name: 'Header',
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

.topbar {
    border-bottom: 1px solid #ccc;
    height: 29px;
}

.topbar .search {
    display: inline-block;
}
    .topbar .search input {
        height: 27px;
        border: none;
    }

.topbar .buttons {
    float: right;
}
    .topbar .buttons button{
        float:left;
        padding: 8px 15px;
    }

.navbar .logo {
    background-image: url(../assets/logo.png);
    width: 188px;
    height: 46px;
    display: inline-block;
    margin: 13px 0;
}

.navbar .nav {
    float: right;
    display: flex;
    height: 71px;
    margin: 0;
}
    .navbar .nav li {
        align-self: center;
        display: inline-block;
        margin: 0 8px;
        font-size: 13px;
        font-weight: 600;  
    }
</style>
