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
				<div className="col-3 headerAddress">
					<p>762 Modern Ice Dr.</p>
					<p>95112, San Jose CA </p>
				</div>
				<div className="col-3 headerContact">
					<p></p>
					<p></p>
				</div>
				<div className="col-3 headerWebsite">website</div>
			</div>
		);
	}
});

export default Header