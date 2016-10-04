import React from 'react';
import ProjectDetails from './projectdetails.js';
import d from '../../resume.json';
import './styles.css'

const Project = React.createClass({
	render () {
		return (
			<div className="col-6">
				<h3 className="Title">Projects</h3>
				<div className="ProjectDetail">
					{d.projects.map(function(project) {
						return (
							<div key={project.id}>
								{console.log(project.img)}
								<div className="ProjectDetailImg" style={{
									width: '100%',
									height: 100,
									backgroundSize: 'cover',
									backgroundImage: 'url(' + project.img + ')',
								}}>
								</div>
								<div>
									{project.name}
								</div>
								<div>
									{project.description}
								</div>
							</div>
						)	
					})}
				</div>
			</div>
		);
	}

});

export default Project;