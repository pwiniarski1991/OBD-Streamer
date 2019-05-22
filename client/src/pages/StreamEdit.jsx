import React from 'react'
import { connect } from 'react-redux'
import { editStream, fetchStream } from './../actions'
import StreamForm from './../components/StreamForm'
import Loader from './../components/Loader'
import Error from './../components/Error'


class StreamEdit extends React.Component {
    state = { error: '' }
    onSubmit = async values => {
        const response = await this.props.editStream(this.props.match.params.id, values);
        if(response.status === 200) this.props.history.push('/');
    }
    render() {
        const { stream } = this.props;
        const { error } = this.state;
        if(!stream) return <Loader />
        return (
            <div>
                <h3>Edit a Stream</h3>
                { !error.length ? 
                <StreamForm onSubmit={this.onSubmit} initialValues={{ title: stream.title, description: stream.description }} /> 
                : <Error text={error} /> }
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        .catch(error => this.setState({ error }))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{ editStream, fetchStream })(StreamEdit)