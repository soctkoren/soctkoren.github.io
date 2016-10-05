import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

const Skill = React.createClass({
	render() {
		return (
			<div className='col-6'>
				<h3 className="Title">Skills</h3>
				<div>
					<img src={logo} className="App-logo" alt="logo" />
					<p>React</p>
				</div>
			</div>
		)
	}
});

export default Skill;