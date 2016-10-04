import React from 'react';
import ProjectDetails from './projectdetails.js';
import d from '../../resume.json';

const Project = React.createClass({
	render () {
		return (
			<div className="col-6">
				<h3 className="Title">Projects</h3>
				<div className="">
					{d.projects.map(function(project) {
						return <ProjectDetails project={project}/>	
					})}
				</div>
			</div>
		);
	}

});

export default Project;