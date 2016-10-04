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
					<Education />
					<Award />
				</div>
				<div className="row segment4">
					<Volunteer />
					<Hobby />
				</div>
			</div>
		);
	}
});

export default Resume;