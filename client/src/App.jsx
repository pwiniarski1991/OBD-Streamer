import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import StreamCreate from './pages/StreamCreate'
import StreamEdit from './pages/StreamEdit'
import StreamDelete from './pages/StreamDelete'
import StreamShow from './pages/StreamShow'
import Auth from './components/hoc/Auth'
import { connect } from 'react-redux'
import history from './history'


const App = (props) => {
    const { isSignedIn } = props;
    return (
        <main className="ui container">
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/streams/:id(\d+)" component={StreamShow} />
                <Route component={StreamCreate} path="/streams/new" />
                <Route path="/streams/edit/:id" component={StreamEdit} />
                <Route path="/streams/delete/:id" component={StreamDelete} />
            </BrowserRouter>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps)(App)
