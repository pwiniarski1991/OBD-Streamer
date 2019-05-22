import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStreams } from './../actions'


class Home extends React.Component {
    renderList() {
        return this.props.streams.map(s => (
            <div className="item" key={s.id}>
                {s.userId !== this.props.userId ? null : (
                <div className="right floated content">
                    <Link to={`/streams/edit/${s.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${s.id}`} className="ui button primary">Delete</Link>
                </div>)}
                <i className="large middle aligned icon camera" />
                <div className="content">
                    <Link to={`/streams/${s.id}`} className="header">
                        {s.title}
                    </Link>
                    <div className="description">
                        {s.description}
                    </div>
                </div>
            </div>
        ))
    }
    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchStreams();
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        userId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(Home);