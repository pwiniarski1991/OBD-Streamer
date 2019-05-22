import React from 'react'
import { connect } from 'react-redux'
import Modal from './../components/Modal'
import { deleteStream, fetchStream } from './../actions'
import { Link } from 'react-router-dom'



class StreamDelete extends React.Component {
    handleClick = async() => {
        await this.props.deleteStream(this.props.match.params.id);
        this.props.history.push('/');
    }
    render() {
        if(!this.props.stream) return <div>Loading...</div>
        return (
            <Modal>
                <div className="header"> Delete Stream </div>
                <div className="content">
                    Are you sure, you want remove this stream
                </div>
                <div className="actions">
                    <button className="ui button" onClick={this.handleClick}>Delete</button>
                    <Link className="ui button primary" to="/" >Cancel</Link>
                </div>
            </Modal>
        )
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete)