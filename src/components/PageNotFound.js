import React, { Component } from 'react'

class Page404 extends Component {
    render() {
        return (
            <div>
                <h1> 404 Page Not Found </h1>
                <button onClick= {()=> {this.props.history.push("/home")}}> Home </button>
            </div>
        )
    }
}

export default Page404