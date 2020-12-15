export const POS_ACCESS = 'access'
export const POS_CONTACT = 'contact'
export const POS_OPT = 'opt'
export const POS_DONE = 'done'

export const state = () => ({
  pos: POS_ACCESS,
  code: '',
  contact: '',
  opt: false,
})

export const mutations = {
  setCode(state, code) {
    state.code = code
  },
  setContact(state, contact) {
    state.contact = contact
  },
  setOpt(state, opt) {
    state.opt = opt
  },
  setPosAccess(state) {
    state.pos = POS_ACCESS
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
}

export const getters = {
  isPosAccess: (state) => {
    return state.pos === POS_ACCESS
  },
  isPosContact: (state) => {
    return state.pos === POS_CONTACT
  },
  isPosOpt: (state) => {
    return state.pos === POS_OPT
  },
  isPosDone: (state) => {
    return state.pos === POS_DONE
  },
}
