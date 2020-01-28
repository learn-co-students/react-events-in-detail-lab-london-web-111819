// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends Component {

    onClickOfTheButton = (event) => {
        this.props.onReceiveCoordinates([event.clientX,event.clientY]);
    };

    render(){
        return(<button onClick={this.onClickOfTheButton}>Some Button Text</button>)
    }
}

export default CoordinatesButton;