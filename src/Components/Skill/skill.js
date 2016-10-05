import React from 'react';
import logo from '../../logo.svg';
import railslogo from '../../../public/assets/rails.png';
import sinatra from '../../../public/assets/sinatra.png';
import javascript from '../../../public/assets/javascript.png';
import octocat from '../../../public/assets/Octocat.png';
import node from '../../../public/assets/node.png';
import '../../App.css';
import './styles.css';

const Skill = React.createClass({
	render() {
		return (
			<div className='col-6'>
				<h3 className="Title">Skills</h3>
				<div className='SkillsContainer'>
					<div className='Skills'>
						<img src={octocat} className="git" alt="git"/>
						<p>Git</p>
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
						<img src={node} className="node" alt="node"/>
						<p>Node</p>
					</div>
				</div>
			</div>
		)
	}
});

export default Skill;