<template>
  <div>
    <Header />
    <h1 class="cleaner__name">
      {{ this.cleanerById($route.params.id)[0].name }}
    </h1>
    <div class="cleaner__wrapper">
      <p class="cleaner__text">
      Прибрав в таких годинах:
    </p>
    <p v-for="hours in this.cleanerById($route.params.id)[0].clean" :key="hours" class="cleaner__hour">
      {{ hours }}
    </p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mapGetters } from 'vuex'

export default {
  components: {
    Header
  },
  computed: mapGetters(['cleanerById'])
}
</script>

<style lang="scss">
  .cleaner {
    &__name {
      width: 300px;
      margin: 20px auto 50px;
      text-align: center;
    }
    &__wrapper {
      margin: 0 auto;
      width: 500px;
      text-align: center;
    }
  }
</style>
