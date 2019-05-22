import { SIGN_IN, SIGN_OUT } from './../actions/types'

export default (state = { isSignedIn: false, userId: null }, {type, payload}) => {
    switch(type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: payload }
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null }
        default:
            return state
    }
}