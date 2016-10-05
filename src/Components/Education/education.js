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
								<div className="col-5 EduInstitue">
									<h3>{edu.institution}</h3>
								</div>
								<div className="EduStart">
									<div className="col-7 EduStartDes">
										<p>{edu.area}</p>
										<p>{edu.startDate} - {edu.endDate}</p>
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