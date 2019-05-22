import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from './../actions'
import Loader from './../components/Loader'
import Error from './../components/Error'


class StreamShow extends React.Component {
    state = { error: '' }
    render() {
        const { stream } = this.props;
        const { error } = this.state;
        if(!stream) return <Loader />
        return (!error.length ?
            <div>
                <h1>{stream.title}</h1>
                <h5>{stream.description}</h5>
                StreamShow
        </div> : <Error text={error} />
        )
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        .catch(error => this.setState({ error }))
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)