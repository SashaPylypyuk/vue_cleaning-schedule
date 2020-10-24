<template>
  <div>
    <Header />
    <h1>
      All Cleaners
    </h1>
    <div>
      <div v-for="cleaner in allCleaners" :key="cleaner.id">
       <p>
         {{ cleaner.name }}
       </p>
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
