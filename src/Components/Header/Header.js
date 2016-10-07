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
					<span className="splash"><h3>{d.basics.name}</h3></span>
					<p className="offseg">{d.basics.label}</p>
				</div>
				<div className="col-3 headerAddress">
					<div className="col-4">
						<p>Email</p>
						<p>Phone</p>
					</div>
					<div className="col-7 offseg">
						<a href="mailto:joimkim@gmail.com?subject=Hi John!"><p>joimkim@gmail.com</p></a>
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
					<a href="https://drive.google.com/file/d/0B2iS0nBJmK9Rb2d3eFFRNnk3UG8/view?usp=sharing">Download resume</a>
				</div>
			</div>
		);
	}
});

export default Header