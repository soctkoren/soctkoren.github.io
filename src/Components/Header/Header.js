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
						<p>Email</p>
						<p>Phone</p>
					</div>
					<div className="col-7 offseg">
						<p>joimkim@gmail.com </p>
						<span className="phone"><p>925-337-3551 </p></span>
					</div>
				</div>
				<div className="col-3 headerContact">
					<div className="col-4">
						<p>Social</p>
					</div>
					<div className="col-8 offseg">
						<div className="align-right">
							<p>
					      <FontAwesome
					        className='super-crazy-colors'
					        name='github'
					        size='1x'
					      /><a href={d.basics.profiles[1].url}><span> : soctkoren</span></a>
							</p>
							<p>
					      <FontAwesome
					        className='super-crazy-colors'
					        name='linkedin-square'
					        size='1x'
					        style={{ color: '#0077b5' }}
					      /><a href={d.basics.profiles[0].url}><span> : soctkoren</span></a>
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