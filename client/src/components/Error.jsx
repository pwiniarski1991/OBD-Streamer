import React from 'react'
import PropTypes from 'prop-types'

const Error = props => {
    return (
        <div className="ui error message">
            <div className="header">{props.text}</div>
        </div>
    )
}

Error.defaultProps = {
    text: 'error !'
}

Error.propTypes = {
    text: PropTypes.string
}

export default Error;