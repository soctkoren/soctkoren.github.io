import React from 'react';
import FontAwesome from 'react-fontawesome';
import './styles.css';

const Hobby = React.createClass({
	render() {
		return (
			<div className='col-12'>
				<h3 className="Title">Hobbies</h3>
				<div className="Hobbies">
					<p>
			      <FontAwesome
			        className='super-crazy-colors'
			        name='camera-retro'
			        size='1x'
			      />
					</p>
					<p>
			      <FontAwesome
			        className='super-crazy-colors'
			        name='beer'
			        size='1x'
			      />
					</p>
					<p>
			      <FontAwesome
			        className='super-crazy-colors'
			        name='music'
			        size='1x'
			      />
					</p>
					<p>
			      <FontAwesome
			        className='super-crazy-colors'
			        name='gamepad'
			        size='1x'
			      />
					</p>
					<p>
			      <FontAwesome
			        className='super-crazy-colors'
			        name='pencil'
			        size='1x'
			      />
					</p>						
				</div>
			</div>
		);
	}
});

export default Hobby;