<template>
  <section class="about">
    <div class="img">
      <img src="@/assets/woman.jpg" alt="">
    </div>
    <div class="content">
      <h2>
        We are a social change charity, helping people to improve their lives through digital.
      </h2>
      <p>
        We tackle the pressing issues of our time, working with partners in thousands of communities across the UK and
        further afield.
      </p>
      <button class="outlined rounded secondary">
        <a href="#">Learn more about us</a>
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'About',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about {
    display: flex;
    flex-wrap: wrap;
  }

  div {
    flex: 1 1 360px;
    height: 265px;
    min-height: 265px;
    overflow: hidden;
  }

  .content {
    color: #fff;
    padding: 0 30px;
    background-color: #478175;
  }

  h2 {
    margin: 15px 0 0;
    font-size: 23px;
    line-height: 1.3;
    font-weight: 600;
    padding: 0 70px 0 0;
  }

  p {
    margin: 10px 0 0;
    font-size: 16px;
    line-height: 1.5;
    padding: 0 80px 0 0;
  }

  button {
    margin-top: 17px;
  }

  @media screen and (max-width: 779px) {
    img {
      width: 100%;
    }
  }
</style>