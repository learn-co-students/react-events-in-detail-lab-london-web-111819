// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {
    // this.props.onDelayedClick
    // this.props.delay

    onClickEvent = (event) => {
        event.persist()
        setTimeout(()=>{this.props.onDelayedClick(event)},this.props.delay)
    }

    render(){
        return(<button onClick={this.onClickEvent}>DelayedButton</button>)
    }
}
export default DelayedButton;