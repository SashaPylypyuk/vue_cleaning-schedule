<template>
  <div id="app">
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/Header'

export default {
  components: {
    Header
  },
  methods: mapActions(['getHours', 'getCleaners']),
  mounted () {
    this.getHours()
    this.getCleaners()
  }
}
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

body {
  margin: 0;
}
html {
  color: #264653;
  font-family: sans-serif;
  box-sizing: border-box;
}
</style>
