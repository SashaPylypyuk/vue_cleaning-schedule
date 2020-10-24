export default {
  state: {
    hours: [],
    cleaners: []
  },
  mutations: {
    updateHours (state, hours) {
      state.hours = hours
    },
    addCleaners (state, cleaners) {
      state.cleaners = cleaners
    },
    updateCleaners (state, { cleaner, hours }) {
      for (const i in state.hours) {
        for (const j in hours) {
          if (state.hours[i].time === hours[j]) {
            state.hours[i].whoClean = cleaner
            state.hours[i].isCleaned = true
          }
        }
      }
      localStorage.hours = JSON.stringify(state.hours)
      const cleanersId = state.cleaners.length === 0 ? 1 : state.cleaners.length
      state.cleaners.push({ id: cleanersId, name: cleaner, clean: hours })
      localStorage.cleaners = JSON.stringify(state.cleaners)
    }
  },
  actions: {
    getHours (ctx) {
      let hours
      if (localStorage.hours) {
        hours = JSON.parse(localStorage.hours)
      }
      if (hours < 1 || hours === undefined) {
        const startAt = 8
        const endAt = 17

        hours = []

        for (let i = startAt; i < endAt; i++) {
          const obj = [{
            whoClean: '',
            time: `${i}.00`,
            isCleaned: false
          }, {
            whoClean: '',
            time: `${i}.15`,
            isCleaned: false
          }, {
            whoClean: '',
            time: `${i}.30`,
            isCleaned: false
          }, {
            whoClean: '',
            time: `${i}.45`,
            isCleaned: false
          }]
          hours.push(...obj)
        }
        hours.push({ whoClean: '', time: `${endAt}.00`, isCleaned: false })
      }
      ctx.commit('updateHours', hours)
    },
    getCleaners (ctx) {
      let cleaners
      console.log(localStorage.cleaners)
      if (localStorage.cleaners) {
        cleaners = JSON.parse(localStorage.cleaners)
        ctx.commit('addCleaners', cleaners)
      }
    }
  },
  getters: {
    allHours (state) {
      return state.hours
    },
    avalibleHours (state) {
      // eslint-disable-next-line spaced-comment
      //const date = new Date()
      // eslint-disable-next-line spaced-comment
      //const now = `${date.getHours()}.${date.getMinutes()}`
      return state.hours.filter(hour => hour.whoClean === '')
        .filter(hour => Number.parseFloat(hour.time) < 24)
    },
    allCleaners (state) {
      return state.cleaners
    }
  }
}
