import React from 'react';
import d from '../../resume.json';
import '../../grid.css';
import './styles.css';
import FontAwesome from 'react-fontawesome';

const Header = React.createClass ({
	render () {
		return (
			<div className="row headerContainer">
				<div className="col-3 headerName">
					<h3>{d.basics.name}</h3>
					<p className="offseg">{d.basics.label}</p>
				</div>
				<div className="col-3 headerAddress">
					<div className="col-4">
						<p>Address</p>
					</div>
					<div className="col-7 offseg">
						<p>762 Modern Ice 95112, San Jose CA </p>
					</div>
				</div>
				<div className="col-3 headerContact">
					<div className="col-4">
						<p>Contact</p>
					</div>
					<div className="col-8 offseg">
						<div className="align-right">
							<p>
					      <FontAwesome
					        className='super-crazy-colors'
					        name='github'
					        size='1x'
					      /><a href="https://github.com/soctkoren"><span> : soctkoren</span></a>
							</p>
							<p>
					      <FontAwesome
					        className='super-crazy-colors'
					        name='linkedin-square'
					        size='1x'
					        style={{ color: '#0077b5' }}
					      /><a href="https://www.linkedin.com/in/john-kim-b448a022"><span> : johnimyeobkim</span></a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-3 headerWebsite">
					<p>website</p>
					<a href="http://soctkoren.github.io"><p className="offseg">http://soctkoren.github.io</p></a>
				</div>
			</div>
		);
	}
});

export default Header