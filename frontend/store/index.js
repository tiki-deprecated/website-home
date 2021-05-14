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
