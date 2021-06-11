export const POS_CONTACT = 'contact'
export const POS_OPT = 'opt'
export const POS_FAILED = 'failed'
export const POS_DONE = 'done'

export const state = () => ({
  pos: POS_CONTACT,
  contact: '',
  opt: false,
})

export const mutations = {
  setContact(state, contact) {
    state.contact = contact
  },
  setOpt(state, opt) {
    state.opt = opt
  },
  setPosContact(state) {
    state.pos = POS_CONTACT
  },
  setPosOpt(state) {
    state.pos = POS_OPT
  },
  setPosDone(state) {
    state.pos = POS_DONE
  },
  setPosFailed(state) {
    state.pos = POS_FAILED
  },
  setError(state, error) {
    state.error = error
  },
}

export const getters = {
  isPosContact: (state) => {
    return state.pos === POS_CONTACT
  },
  isPosOpt: (state) => {
    return state.pos === POS_OPT
  },
  isPosDone: (state) => {
    return state.pos === POS_DONE
  },
  isPosFailed: (state) => {
    return state.pos === POS_FAILED
  },
}
