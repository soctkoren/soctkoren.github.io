import React from 'react';
import '../../grid.css';
import d from '../../resume.json';
import './styles.css';

const Mission = React.createClass ({
	render() {
		return (
			<div className='col-6'>
				<h3 className="Title">Personal Statment</h3>
				<div className="">
					<p>{d.basics.summary}</p>
				</div>
			</div>
		);
	}

});

export default Mission;