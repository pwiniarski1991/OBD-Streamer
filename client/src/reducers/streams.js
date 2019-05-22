import { 
    CREATE_STREAM, 
    FETCH_STREAMS, 
    FETCH_STREAM, 
    EDIT_STREAM, 
    DELETE_STREAM 
} from './../actions/types'


export default (state = { }, {type, payload}) => {
    switch(type) {
        case CREATE_STREAM || FETCH_STREAM || EDIT_STREAM:
            return {...state, [payload.id]: payload }
        case FETCH_STREAMS: {
            return {...state, ...payload.reduce((newState, s) => {
                newState[s.id] = s;
                return newState;
              }, {})}
        }
        case DELETE_STREAM: {
            return Object.keys(state).reduce((newState, key) => {
                if (key !== payload) newState[key] = state[key]
                return newState
              }, {})
        }
        default:
            return state
    }
}