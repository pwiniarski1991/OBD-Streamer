import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from './../actions'


class StreamShow extends React.Component {
    render() {
        const { stream } = this.props;
        if(!stream) return <div>Loading...</div>
        return (
            <div>
                <h1>{stream.title}</h1>
                <h5>{stream.description}</h5>
                StreamShow
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)