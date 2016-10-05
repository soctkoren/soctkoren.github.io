import React from 'react';
import logo from '../../logo.svg';
import railslogo from '../../../public/rails.png';
import sinatra from '../../../public/sinatra.png';
import ruby from '../../../public/ruby.png';
import javascript from '../../../public/javascript.png';
import '../../App.css';
import './styles.css';

const Skill = React.createClass({
	render() {
		return (
			<div className='col-6'>
				<h3 className="Title">Skills</h3>
				<div className='SkillsContainer'>
					<div className='Skills'>
						<img src={ruby} className="ruby" alt="ruby"/>
						<p>ruby</p>
					</div>
					<div className='Skills'>
						<img src={sinatra} className="sinatra" alt="sinatra"/>
						<p>Sinatra</p>
					</div>
					<div className='Skills'>
						<img src={logo} className="App-logo" alt="logo" />
						<p>React</p>
					</div>
					<div className='Skills'>
						<img src={railslogo} className="railsLogo" alt="rails"/>
						<p>Rails</p>
					</div>
					<div className='Skills'>
						<img src={javascript} className="javascript" alt="javascript"/>
						<p>JS</p>
					</div>
				</div>
			</div>
		)
	}
});

export default Skill;