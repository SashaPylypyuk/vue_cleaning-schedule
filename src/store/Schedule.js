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

      const cleanersId = state.cleaners.length
      state.cleaners.push({ id: cleanersId, name: cleaner, clean: hours })
      localStorage.cleaners = JSON.stringify(state.cleaners)
    },
    updateCleanersById (state, { cleanerId, hours }) {
      const cleaner = state.cleaners.filter(cleaner => cleaner.id === cleanerId)[0]

      for (const i in state.hours) {
        for (const j in hours) {
          if (state.hours[i].time === hours[j]) {
            state.hours[i].whoClean = cleaner.name
            state.hours[i].isCleaned = true
          }
        }
      }

      for (const i in state.cleaners) {
        if (state.cleaners[i].id === cleaner.id) {
          state.cleaners[i].clean.push(...hours)
        }
      }

      localStorage.hours = JSON.stringify(state.hours)
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
      const date = new Date()
      const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      const now = `${date.getHours()}.${minutes}`

      return state.hours.filter(hour => hour.whoClean === '')
        .filter(hour => Number.parseFloat(hour.time) < Number.parseFloat(now))
    },
    allCleaners (state) {
      return state.cleaners
    },
    cleanerById: (state) => id => {
      return state.cleaners.filter(cleaner => cleaner.id === id)
    }
  }
}
