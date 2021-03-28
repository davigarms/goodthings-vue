<template>
    <section class="how">
		<div class="container">
			<h2>
				How can we help you?
			</h2>
			<p>
				Let us know who you are and what you're looking for, and we'll help get you to the right place.
			</p>
			<form id="howform" class="howform">
				<label for="user">I am</label>
				<select name="user" id="name" form="howform">
					<option value="individual">an Individual</option>
				</select>
				<label for="target">and I want to</label>
				<select name="target" id="target" form="howform">
					<option value="learn">learn</option>
				</select>
				<button class="contained rounded primary">Start now</button>
			</form>
		</div>
	</section>
</template>

<script>
export default {
  name: 'How',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.how {
    padding: 48px 0;
}
    .how h2 {
        margin-top: 0;
        font-size: 26px;
    }
    .how p {
        font-size: 17px;
    }

    .how .howform {
        text-align: center;
        font-size: 23px;
        margin: 40px 0 0;
    }
        .how .howform select {
            border: none;
            border-bottom: 2px solid #497c8f;
            font-size: 23px;
            color: #497c8f;
			margin: 0 10px;
        }

        .how .howform button {
            margin-left: 20px;
        }
</style>
