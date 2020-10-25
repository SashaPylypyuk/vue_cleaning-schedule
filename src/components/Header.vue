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
  background-color: #E9C46A;

  &__item {
    border: 2px solid #E9C46A;
    margin-bottom: 10px;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px;
    color: #264653;
    font-family: sans-serif;
    font-size: 24px;
    text-decoration: none;

    &:hover {
      border: 2px solid #264653;
    }

    &--button {
      background-color: #E9C46A;
    }
  }
}
</style>
