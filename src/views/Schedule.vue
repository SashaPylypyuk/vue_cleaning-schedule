<template>
  <div class="schedule">
    <h2 class="schedule__text--title">
      Графік прибирання
    </h2>
    <table class="table">
      <tr class=" table__row table__row--head">
        <th class="table__cell table__cell--head">
          Хто прибрав
        </th>
        <th class="table__cell table__cell--head">
          Яка година
        </th>
        <th class="table__cell table__cell--head">
          Чи прибранно
        </th>
      </tr>
      <tr v-for="hour in allHours" :key="hour.time" class="table__row" :class="{'table__row--cleaned': hour.isCleaned}">
        <th class="table__cell">
          {{ hour.whoClean }}
        </th>
        <th class="table__cell">
          {{ hour.time }}
        </th>
        <th class="table__cell">
          {{ hour.isCleaned ? "\u2713" : "\u2573" }}
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['allHours'])
}
</script>

<style lang='scss' scoped>

.schedule {
  &__text--title {
    text-align: center;
    width: 400px;
    margin: 50px auto;
    font-size: 30px;
    color: #2c2c2c;
  }
}

.table {
  width: 800px;
  margin: 0 auto;
  font-family: sans-serif;

  &__cell {
    font-size: 20px;
    border: 1px solid #2c2c2c;
    padding: 20px 5px;
  }

  &__row {
    &--head {
    font-size: 25px;
    color: #fff;
    background-color: #2c2c2c;
    }
    &--cleaned {
      background-color: rgba($color: #2060f6, $alpha: .5);
    }
  }
}

</style>
