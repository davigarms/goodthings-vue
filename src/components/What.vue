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
        <div v-for="what in getWhats" :key="what.id">
          <Box :what="what" />
        </div>
      </div>

      <div class="call">
        <button class="contained rounded secondary">
          <router-link to="/moreabout">
            More about what we do
          </router-link>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import Box from './What/Box'
  import { mapGetters } from 'vuex'

  export default {
    name: 'What',
    components: {
      Box
    },
    computed: mapGetters(['getWhats'])
  }
</script>

<style scoped>
  .what {
    background-color: #487c8f;
    padding: 48px 0;
  }

  h2 {
    margin-top: 0;
    color: #fff;
  }

  p {
    color: #fff;
    font-size: 13px;
    margin-bottom: 30px;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

  }

  .call {
    text-align: center;
  }
</style>