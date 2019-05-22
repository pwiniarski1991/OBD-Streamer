import { combineReducers } from 'redux'
import { reducer } from 'redux-form'
import auth from './auth'
import streams from './streams'

export default combineReducers({
    form: reducer,
    auth,
    streams
})