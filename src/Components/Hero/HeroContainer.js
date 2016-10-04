import React from 'react';
import './styles.css';
import ProfileImage from './ProfileImage.js';

var HeroContainer = React.createClass({
	render() {
		return (
			<div className="HeroContainer">
				<div className="profileContainer">
					<ProfileImage />
				</div>
			</div>
		);
	}
});

export default HeroContainer;