import React, { Component } from "react"

class Ciao extends Component {
    render() {
        const { fname, sname, isHi } = this.props
        const word = isHi ? 'Hello' : 'Buy'
        return <h2>{word}, {fname} {sname}!</h2>
        // return React.createElement('h2', null, "Hello", ` ${name}!`)
    }
}

export default Ciao