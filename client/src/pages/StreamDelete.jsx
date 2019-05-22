import React from 'react'
import { connect } from 'react-redux'
import Modal from './../components/Modal'
import { deleteStream, fetchStream } from './../actions'
import { Link } from 'react-router-dom'
import Loader from './../components/Loader'
import Error from './../components/Error'


class StreamDelete extends React.Component {
    state = { error: '' }
    handleClick = async() => {
        await this.props.deleteStream(this.props.match.params.id);
        this.props.history.push('/');
    }
    render() {
        if(!this.props.stream) return <Loader />
        const { error } = this.state;
        return ( !error.length ?
            <Modal>
                <div className="header"> Delete Stream </div>
                <div className="content">
                    Are you sure, you want remove this stream
                </div>
                <div className="actions">
                    <button className="ui button" onClick={this.handleClick}>Delete</button>
                    <Link className="ui button primary" to="/" >Cancel</Link>
                </div>
            </Modal> : <Error text={error} />
        )
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        .catch(error => this.setState({ error }) )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete)