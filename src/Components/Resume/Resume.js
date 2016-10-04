import React from 'react';
import Header from '../Header/Header.js';
import Mission from '../Mission/mission.js';
import Project from '../Project/project.js';
import Skill from '../Skill/skill.js';
import WorkExperience from '../WorkExperience/WorkExperience.js';
import '../../grid.css';

const Resume = React.createClass ({
	render() {
		return (
			<div className='container'>
				<Header />
				<div className="row segment1">
					<Mission />
					<Project />
				</div>
				<div className="row segment2">
					<Skill />
					<WorkExperience />
				</div>
				<div className="row segment3">
					<Skill />
					<WorkExperience />
				</div>
			</div>
		);
	}
});

export default Resume;