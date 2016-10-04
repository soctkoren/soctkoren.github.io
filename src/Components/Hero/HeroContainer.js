import React from 'react';
import './styles.css';
import ProfileImage from './ProfileImage.js';
import data from '../../resume.json';

var HeroContainer = React.createClass({
	render() {
		return (
			<div className="HeroContainer">
				<div className="profileContainer">
					<div className="ProfileSubTitle">
						<ProfileImage />
					</div>
					<div className="ProfileSubTitle">
						<h1>{data.basics.name}</h1>
						<h2>{data.basics.label}</h2>
						<h3>TechCrunch Disrupt Winner</h3>
					</div>
					<div className="DescriptionContainer">
						<div className="icons">{data.basics.email}</div>
						{data.basics.profiles.map(function(network) {
							return <div className="icons"><a href={network.url}>{network.network}</a></div>
						})}
					</div>
				</div>
			</div>
		);
	}
});

export default HeroContainer;