<template>
  <div class="home">
    <Header />
    <Schedule />
  </div>
</template>

<script>
import Schedule from '@/components/Schedule'
import Header from '@/components/Header'

export default {
  name: 'Home',
  components: {
    Schedule, Header
  }
}
</script>
