<template>
  <div>
    <h1 class="cleaner__name">
      {{ this.cleanerById($route.params.id)[0].name }}
    </h1>
    <div class="cleaner__wrapper">
      <p class="cleaner__text">
      Прибрав(ла) в таких годинах:
    </p>
    <p v-for="hours in this.cleanerById($route.params.id)[0].clean" :key="hours" class="cleaner__hour">
      {{ hours }}
    </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['cleanerById'])
}
</script>

<style lang="scss">
.cleaner {
  &__name {
    width: 300px;
    margin: 50px auto;
    text-align: center;
  }

  &__wrapper {
    margin: 0 auto;
    width: 500px;
    text-align: center;
  }
}
</style>
