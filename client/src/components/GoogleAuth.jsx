import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from './../actions'
import Error from './Error';


class GoogleAuth extends React.Component {
    state = {
       error: '' 
    }
    handleClick = () => {
        if(this.props.isSignedIn) {
            this.auth.signOut();
        }
        else {
            this.auth.signIn();
        }
    }
    OAuthChange = isSignedIn  => {
        isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId())
        : this.props.signOut()
    }
    render() {
        const label = this.props.isSignedIn ? 'logout' : 'login';
        const { error } = this.state;
        const errorComp = error.length ? <Error text={error} /> : null;
        return (
            <>
                <button className="ui red google button" onClick={this.handleClick}>
                    <i className="google icon"></i>
                    { label }
                </button>
                { errorComp }
            </>
        )
    }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1024054981477-spl9m09o9n93ka2qt22baf524jeosans.apps.googleusercontent.com',
                scope: 'email',
                prompt: 'select_account'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance() || {};
                this.OAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.OAuthChange)
            }).catch(error => {
                this.setState({ error });
            })
        });
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)