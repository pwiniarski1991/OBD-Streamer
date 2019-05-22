import React from 'react'
import { Redirect } from 'react-router-dom'

const Auth = ( Component, isSignedIn ) => {
    return class extends React.Component {
        render() {
            return !isSignedIn ? <Redirect to="/" /> :
                <Component />
        }
    }
}

export default Auth;