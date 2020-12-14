export const state = () => ({
  popup: false,
})

export const mutations = {
  showPopup(state, bool) {
    state.popup = bool
  },
}
