import React from 'react';
import d from '../../resume.json';
import '../../grid.css';

const Header = React.createClass ({
	render () {
		return (
			<div className="row">
				<div className="col-3 headerName">
					<h3>{d.basics.name}</h3>
					<p>{d.basics.label}</p>
				</div>
				<div className="col-3 headerAddress">address</div>
				<div className="col-3 headerContact">contact</div>
				<div className="col-3 headerWebsite">website</div>
			</div>
		);
	}
});

export default Header