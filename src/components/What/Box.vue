<template>
  <div class="box">
    <h3>
      {{what.title}}
    </h3>
    <p>{{what.text}}</p>
    <button class="outlined rounded primary">Read more</button>
  </div>
</template>

<script>
  export default {
    name: "Box",
    props: ["what"]
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
</style>