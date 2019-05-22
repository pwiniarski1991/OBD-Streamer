import streams from './../apis/streams'
import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    SIGN_IN,
    SIGN_OUT
} from './types'

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    let response;
    try {
        response = await streams.post('/streams', {...formValues, userId });

        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        })
    } catch(error) {
        console.error('error: ', error);
    } finally {
        return response;
    }
}

export const fetchStreams = () => async dispatch => {
    let response;
    try {
        response = await streams.get('/streams');

        dispatch({
            type: FETCH_STREAMS,
            payload: response.data
        })
    } catch(error) {
        console.error('error: ', error);
    } finally {
        return response;
    }
}

export const fetchStream = id => async dispatch => {
    let response;
    try {
        response = await streams.get(`/streams/${id}`);

        dispatch({
            type: FETCH_STREAM,
            payload: response.data
        })
    } catch(error) {
        console.error('error: ', error);
    } finally {
        return response;
    }

}

export const editStream = (id, stream) => async dispatch => {
    let response;
    try {
        response = await streams.patch(`/streams/${id}`,stream);

        dispatch({
            type: EDIT_STREAM,
            payload: response.data
        })
    } catch(error) {
        console.error('error: ', error);
    } finally {
        return response;
    }
}

export const deleteStream = id => async dispatch => {
    let response;
    try {
        response = await streams.delete(`/streams/${id}`);

        dispatch({
            type: DELETE_STREAM,
            payload: id
        })
    }
    catch(error) {
        console.error('error: ', error);
    } finally {
        return response;
    }
}

