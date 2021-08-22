export const state = () => ({
  popup: true,
  banner: false,
})

export const mutations = {
  showPopup(state, bool) {
    state.popup = bool
  },
  showBanner(state, bool) {
    state.banner = bool
  },
}
