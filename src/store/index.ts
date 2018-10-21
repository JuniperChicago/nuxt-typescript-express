interface AppState {
  count: number
  homeCount: number
}

export const state = (): AppState => ({
  count: 0,
  homeCount: 0
})

export const mutations = {
  increment(state: AppState) {
    state.count++
  },
  decrement(state: AppState) {
    state.count--
  },
  reset(state: AppState) {
    state.count = 0
  },
  incrementHomeCount(state: AppState) {
    state.homeCount++
  }
}

/**
 * Actions
 */

export const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementHomeCount: ({ commit }) => commit('incrementHomeCount'),
  reset: ({ commit }) => commit('reset')
}

export const getters = {
  count: (state: AppState) => state.count,
  homeCount: (state: AppState) => state.homeCount
}
