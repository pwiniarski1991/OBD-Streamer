import React from 'react'
import { connect } from 'react-redux'
import { editStream, fetchStream } from './../actions'
import StreamForm from './../components/StreamForm'


class StreamEdit extends React.Component {
    onSubmit = async values => {
        const response = await this.props.editStream(this.props.match.params.id, values);
        if(response.status === 200) this.props.history.push('/');
    }
    render() {
        const { stream } = this.props;
        
        if(!stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={{ title: stream.title, description: stream.description }} />
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{ editStream, fetchStream })(StreamEdit)