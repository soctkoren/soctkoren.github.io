import React from 'react';
import d from '../../resume.json';
import './styles.css';


const Education = React.createClass({
	render() {
		return (
			<div className='col-6'>
				<h3 className='Title'>Education</h3>
				<div>
					{d.education.map(function(edu) {
						return (
							<div>
								<div className="col-12 EduInstitue">
									<h3 className="col-6">{edu.institution}</h3>
									<p className="col-6">{edu.area}</p>
								</div>
								<div className="EduStart">
									<div className="col-12 EduStartDes">
										<p>start: {edu.startDate} - end: {edu.endDate}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
});

export default Education