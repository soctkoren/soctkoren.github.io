import React from 'react';
import Header from '../Header/Header.js';
import Mission from '../Mission/mission.js';
import Project from '../Project/project.js';
import Skill from '../Skill/skill.js';
import WorkExperience from '../WorkExperience/WorkExperience.js';
import Education from '../Education/education.js';
import Award from '../Award/award.js';
import Hobby from '../Hobby/hobby.js';
import Volunteer from '../Volunteer/volunteer.js';
import './styles.css'
import '../../grid.css';

const Resume = React.createClass ({
	render() {
		return (
			<div className="container resume-container">
				<div className="resume">
						<Header />
					<div className="row segment1">
						<Mission />
						<Skill />
					</div>
					<div className="row segment2">
						<Project />
					</div>
					<div className="row segment3">
						<WorkExperience />
						<Education />
						<Award />
					</div>
					<div className="row segment4">
						<Volunteer />
						<Hobby />
					</div>
				</div>
			</div>
		);
	}
});

export default Resume;