<template>
  <div>
    <Header />
    <div class="cleaners">
      <h1 class="cleaners__text">
        Всі прибиральники
      </h1>
      <div class="cleaners__wrapper">
        <div v-for="cleaner in allCleaners" :key="cleaner.id" class="cleaners__item">
          <router-link :to="{name: 'Cleaner', params: {id : cleaner.id}}" class="cleaners__link">
          {{ cleaner.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['allCleaners']),
  components: {
    Header
  }
}
</script>

<style lang="scss">
  .cleaners {
    &__text {
      width: 400px;
      margin: 10px auto 50px;
      text-align: center;
    }
    &__wrapper {
      width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    &__link {
      cursor: pointer;
      padding: 10px;
      text-decoration: none;
      font-size: 24px;
      color: #000;
      border: 2px solid #fff;
      border-radius: 10px;

      &:hover {
        border: 2px solid #96E7FF;
      }
    }

    &__item {
      margin-bottom: 30px;
    }
  }
</style>
