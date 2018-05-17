import { USER_UPDATE } from '../mutation-types'

export default {
  [USER_UPDATE](state, payload) {
    state.username = payload.username
    state.realname = payload.realname
    state.level = parseInt(payload.level)
  }
}