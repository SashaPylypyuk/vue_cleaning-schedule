<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions(['getHours', 'getCleaners']),
  mounted () {
    this.getHours()
    this.getCleaners()
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  html {
    font-family: sans-serif;
    box-sizing: border-box;
  }
</style>
