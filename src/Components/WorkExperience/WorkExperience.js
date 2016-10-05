import React from 'react';
import d from '../../resume.json';
import './styles.css'

var WorkExperience = React.createClass({
	getInitialState: function() {
		return ({
			work: [],
			highlight: []
		})
	},

	componentWillMount: function() {
		
		var works = [];
		d.work.forEach(function(w) {
			var theWork = (
				<div>
					<div className="WorkHeader">
						<div className="col-5 WorkCompany">
							<h3>{w.company}</h3>
						</div>
						<div className="WorkPosition">
							<p>{w.position}</p>
							<p>{w.startDate} - {w.endDate}</p>
						</div>
					</div>
					<div>
						<ul>
							{w.highlights.map(function(high) {
								return <li className="green">{high}</li>
							})}
						</ul>
					</div>
				</div>
			)
			works.push(theWork);

		});


		this.setState({
			work: works,
		});
	},

	render () {
		return (
			<div className="col-6">
				<h3 className="Title">Work Experience</h3>
				<div>
					<ul className="experiences">
						{this.state.work}
					</ul>
				</div>
			</div>
		);
	}
});

export default WorkExperience
