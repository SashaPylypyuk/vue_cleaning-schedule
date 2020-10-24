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
    <form @submit="clearLocalStorage">
    <button type="submit" class="header__item">
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
    }
  }
}
</script>

<style lang="scss">
  .header {
    padding: 30px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #EFB27B;

    &__item {
    margin-bottom: 10px;
    border: 2px solid #6FA9BB;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fff;
    padding: 10px;
    color: #000;
    font-family: sans-serif;
    font-size: 24px;
    text-decoration: none;
    }
  }
</style>
