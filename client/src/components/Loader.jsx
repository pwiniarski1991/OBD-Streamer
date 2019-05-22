import React from 'react'

const Loader = props => {
    return (
        <div className="ui active">
            <div className="ui text indeterminate active loader">
                Loading...
            </div>
        </div>
    )
}

export default Loader;