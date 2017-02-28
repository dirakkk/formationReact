import React, { Component } from 'react';
import Purecomposant from './purecomposant.jsx'
import Autrecomposant from './autrecomposant.jsx'

export class Hello extends Component {


	constructor (props){
		super(props)
		this.state = {date: new Date()};
		setInterval(
      		() => this.setState({date:new Date()}),
      		1000
    	);
	}

	render() {
		return (<div>Il est {this.state.date.toLocaleTimeString()},Nous avançons vers la lumière avec {this.props.techno}
		<Autrecomposant/>
		</div>
		)
	}
}