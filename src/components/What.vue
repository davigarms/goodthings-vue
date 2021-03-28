<template>
	<section class="what">
		<div class="container">
			<h2>
				What do we do?
			</h2>
			<p>
				You might not have heard of us, but we're people behind the following impactful programmes.
			</p>
			<div class="content">
				<div class="box">
					<h3>
						Get online week
					</h3>
					<p>Lorem ipsum</p>
					<button class="outlined rounded primary">Read more</button>
				</div>
				<div class="box">
					<h3>
						Learn my way
					</h3>
					<p>Lorem ipsum</p>
					<button class="outlined rounded primary">Read more</button>
				</div>
				<div class="box">
					<h3>
						Make it click
					</h3>
					<p>Lorem ipsum</p>
					<button class="outlined rounded primary">Read more</button>
				</div>
				<div class="box">
					<h3>
						Digital you
					</h3>
					<p>Lorem ipsum</p>
					<button class="outlined rounded primary">Read more</button>
				</div>
			</div>

			<div class="call">
				<button class="contained rounded secondary">
					More about what we do
				</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: 'What',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.what {
    background-color: #487c8f;
    padding: 48px 0;
}
    .what h2 {
        margin-top: 0;
        color: #fff;
    }

    .what p {
        color: #fff;
        font-size: 12px;
        margin-bottom: 30px;
    }
   
    .what .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
    }
        .what .content .box {
            background-color: #fff;
            flex: 0 1 200px;
            margin-bottom: 45px;
            padding: 20px 0 25px;
            text-align: center;
        }
            .what .content .box h3 {
                margin-top: 0;
            }

            .what .content .box p {
                color: #222;
            }

    .what .call {
        text-align: center;
    }
</style>
