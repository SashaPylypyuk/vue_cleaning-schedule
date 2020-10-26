<template>
  <header class="header">
    <router-link to="/" class="header__item">
      На головну
    </router-link>
    <router-link to="/cleaners" class="header__item">
      Список всіх прибиральників
    </router-link>
    <router-link to="/addACleaner" class="header__item">
      Додати прибиральника
    </router-link>
    <form @submit.stop.prevent="clearLocalStorage">
    <button type="submit" class="header__item header__item--button">
      Очистити localStorage
    </button>
    </form>
  </header>
</template>

<script>
export default {
  methods: {
    clearLocalStorage () {
      localStorage.hours = []
      localStorage.cleaners = []
      this.$router.go()
    }
  }
}
</script>

<style lang="scss">
.header {
  padding: 20px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #2c2c2c;

  &__item {
    border: 2px solid #2c2c2c;
    margin-bottom: 10px;
    border-radius: 20px;
    cursor: pointer;
    color: #fff;
    padding: 10px;
    font-size: 24px;
    text-decoration: none;
    transition: color .5s ease;
    transition: border .5s ease;

    &:hover {
      color: #2060f6;
      border: 2px solid #fff;
    }

    &--button {
      background-color: #2c2c2c;
    }
  }
}
</style>
