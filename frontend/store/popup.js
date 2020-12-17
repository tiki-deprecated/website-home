export const state = () => ({
  privacy: false,
})

export const mutations = {
  showPrivacy(state, bool) {
    state.privacy = bool
  },
}
