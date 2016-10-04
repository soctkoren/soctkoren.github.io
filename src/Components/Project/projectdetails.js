import React from 'react';

const ProjectDetails = React.createClass({
	render () {
		return (
			<div>
				{console.log(this.props.project)}
				<div>
					{this.props.project.name}
				</div>
				<div>
					{this.props.project.description}
				</div>
			</div>
		)
	}
});

export default ProjectDetails;