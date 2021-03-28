<template>
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
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar {
    border-bottom: 1px solid #ccc;
    height: 29px;
}

.search {
    display: inline-block;
}
    .search input {
        height: 27px;
        border: none;
    }

.buttons {
    float: right;
}
    .buttons button{
        float:left;
        padding: 8px 15px;
    }
</style>
