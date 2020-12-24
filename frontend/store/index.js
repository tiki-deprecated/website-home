export const TOTAL_SPOTS = 10000
export const SPOTS_LAZY_PLACEHOLDER = 9568

export const state = () => ({
  signupCount: 0,
  code: '',
})

export const mutations = {
  setCode(state, code) {
    state.code = code
  },
  setSignupCount(state, signupCount) {
    state.signupCount = signupCount
  },
}

export const getters = {
  remainingSpots: (state) => {
    if (state.signupCount === 0) return SPOTS_LAZY_PLACEHOLDER
    else return TOTAL_SPOTS - state.signupCount
  },
}
