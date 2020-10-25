<template>
  <div>
    <h1 class="cleaner__text--title">
      Додати прибиральника
    </h1>
    <form @submit.prevent="addACleaner" class="form">
      <div class="form__row">
        <label>
          Введіть ім*я
          <input type="text" v-model.trim="name" class="form__item form__item--text">
        </label>
        <p class="form__text">
          Або можете вибрати вже з доданих прибиральників
        </p>
        <select v-model="selected" class="form__item form__item--select">
          <option selected value="">
            Виберати тут :)
          </option>
          <option v-for="cleaner in allCleaners" :value="cleaner.id" :key="cleaner.id">
            {{ cleaner.name }}
          </option>
        </select>
        <button type="submit" class="form__item form__item--button">
          Прибрати
        </button>
        <p class="form__text form__text--small">
          Щоб добавити нового прибиральника залиште поле списку на першому пункті
        </p>
      </div>
      <div class="form__row--checkboxes">
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

export default {
  data () {
    return {
      selected: '',
      name: '',
      checkedItems: []
    }
  },
  methods: {
    ...mapMutations(['updateCleaners', 'updateCleanersById']),
    addACleaner () {
      if (this.checkedItems.length > 0) {
        if (typeof this.selected === 'number') {
          this.updateCleanersById({ cleanerId: this.selected, hours: this.checkedItems })
        } else {
          if (this.name !== '') {
            this.updateCleaners({ cleaner: this.name, hours: this.checkedItems })
          }
        }
        this.name = ''
        this.checkedItems = []
      }
    }

  },
  computed: mapGetters(['avalibleHours', 'allCleaners'])
}
</script>

<style lang="scss">
.cleaner__text--title {
  text-align: center;
  width: 400px;
  margin: 50px auto;

};

.form {
  width: 600px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  font-size: 20px;

  &__text {
    margin: 0;

    &--small {
      margin-top: 20px;
      font-size: 16px;
    }
  }

  &__item {
    outline: none;
    font-size: 20px;

    &--text {
      border: 2px solid #6FA9BB;
      border-radius: 10px;
      padding: 10px 10px;
      width: 180px;
      margin: 10px 0 30px;
    }

    &--select {
      margin: 5px 0 50px;
    }

    &--button {
      cursor: pointer;
      border-radius: 10px;
      border: 2px solid #6FA9BB;
      padding: 5px;
    }

    &--checkbox {
      margin-left: 20px;
      zoom: 1.5;
    }
  }

  &__row {
    width: 400px;
    padding: 50px 0 0;
    display: flex;
    flex-direction: column;

    &--checkboxes {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 400px;
    }
  }
}
</style>
