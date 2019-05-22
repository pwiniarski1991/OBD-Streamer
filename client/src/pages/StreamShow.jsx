import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from './../actions'
import flv from 'flv.js'


class StreamShow extends React.Component {
    videoRef = React.createRef()
    render() {
        const { stream } = this.props;
        if(!stream) return <div>Loading...</div>
        return (
            <div>
                <video ref={this.videoRef}  style={{width: '100%' }} controls/>
                <h1>{stream.title}</h1>
                <h5>{stream.description}</h5>
                StreamShow
            </div>
        )
    }
    async componentDidMount() {
        try {
            const {status} = await this.props.fetchStream(this.props.match.params.id)
            if(status === 200) this.buildPlayer(this.props.match.params.id)
        } catch(error) {
            console.error('loading video error: ', error);
        }
    }

    componentDidUpdate() {
        this.buildPlayer(this.props.match.params.id);
    }

    buildPlayer() {
        if(!this.player || !this.props.stream) return;
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    componentWillUnmount() {
        if(this.player) this.player.destroy();
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)