<template>
  <div class="box">
    <h3>
      {{title}}
    </h3>
    <p>{{text}}</p>
    <button class="outlined rounded primary">Read more</button>
  </div>
</template>

<script>
  export default {
    name: "Box",
    props: {
      title: String,
      text: String
    }
  }
</script>

<style scoped>
  .box {
    background-color: #fff;
    flex: 0 1 200px;
    margin-bottom: 45px;
    padding: 20px 0 25px;
    text-align: center;
    width: 200px;
  }

  h3 {
    margin-top: 0;
  }

  p {
    color: #222;
  }

  .call {
    text-align: center;
  }
</style>