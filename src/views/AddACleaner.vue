<template>
  <div>
    <Header />
    <h1 class="cleaner__text--title">
      Додати прибиральника
    </h1>
    <form @submit.prevent="addACleaner" class="form">
      <div class="form__row">
        <label>
          Введіть ім*я
          <input type="text" v-model.trim="name" class="form__item form__item--text">
        </label>
        <button type="button" @click="addACleaner" class="form__item form__item--button">
          Добавити прибиральника
        </button>
      </div>
      <div>
        <div v-for="hour in avalibleHours" :key="hour.time">
          <input type="checkbox" :name="hour.time" :value="hour.time" v-model="checkedItems" class="form__item form__item--checkbox">
          <span class="form__text">
            {{ hour.time }}
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Header from '@/components/Header'

export default {
  data () {
    return {
      name: '',
      checkedItems: []
    }
  },
  components: {
    Header
  },
  methods: {
    ...mapMutations(['updateCleaners']),
    addACleaner () {
      if (this.name !== '') {
        console.log(this.checkedItems)
        this.updateCleaners({ cleaner: this.name, hours: this.checkedItems })
      }
    }
  },
  computed: mapGetters(['avalibleHours'])
}
</script>

<style lang="scss">
  .cleaner__text--title {
    text-align: center;
    width: 400px;
    margin: 20px auto;
  };

  .form {
    width: 400px;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
    font-size: 20px;

    &__item {
      outline: none;
      font-size: 20px;

      &--text {
        border: 2px solid #6FA9BB;
        border-radius: 10px;
        padding: 10px 10px;
        width: 180px;
        margin: 10px 0 50px;
      }

      &--button {
        cursor: pointer;
        border-radius: 10px;
        border: 2px solid #6FA9BB;
        padding: 5px;
      }

      &--checkbox {
        zoom: 1.5;
      }
    }

    &__row {
      width: 200px;
      padding: 100px 0 0;
      display: flex;
      flex-direction: column;
    }
  }
</style>
