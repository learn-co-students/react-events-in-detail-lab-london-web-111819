// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

    handleClickEvent = (event) => {
        const coords = []
        coords.push(event.clientX)
        coords.push(event.clientY)
        return this.props.onReceiveCoordinates(coords)
    }

    render() {
        return(
            <button onClick={this.handleClickEvent}>Coordinates</button>
        )
    }

}