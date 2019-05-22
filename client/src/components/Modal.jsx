import React from 'react'
import ReactDOM from 'react-dom'


class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div className="ui dimmer modals visible active">
                <div className="ui standard modal visivle active">
                    {this.props.children}
                </div>
            </div>,
            document.getElementById('root'))
    }
}

export default Modal;