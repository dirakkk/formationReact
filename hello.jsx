import React, { Component } from 'react';
export class Hello extends Component {


	constructor (props){
		super(props)
		this.state = {date: new Date()};
	}

	render() {
		return (<div>Il est {this.state.date.toLocaleTimeString()},Nous avançons vers la lumière avec {this.props.techno}</div>)
	}
}