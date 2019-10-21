import React, {Component} from 'react'

export default class Div extends Component {
    render(){
        return(
            <div className={"App container col-sm-12 alert alert-" + this.props.type}>
                {this.props.children}
            </div>
        )
    }
}