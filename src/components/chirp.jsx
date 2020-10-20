import React, { Component, Fragment } from 'react'
// import App from './App'

class Chirp extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Fragment>
                <div className="card border-info mb-3">
                    <div className="card-header">{this.props.oneChirp.name}</div>
                    <div className="card-body text-info">
                        <h5 className="card-title">{this.props.oneChirp.text}</h5>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Chirp

