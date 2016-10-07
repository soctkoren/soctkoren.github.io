import React from 'react';
import ProjectDetails from './projectdetails.js';
import d from '../../resume.json';
import './styles.css'
import novelist from '../../../public/assets/novelist.png';
import dear from '../../../public/assets/dearally.png';
import foodie from '../../../public/assets/foodie.png';
import matador from '../../../public/assets/matador.png';
import partner from '../../../public/assets/thepartner.png';
import watch from '../../../public/assets/thewatch.png';
import secret from '../../../public/assets/secret.png';
import award from '../../../public/assets/award.png';

const Project = React.createClass({
	getInitialState() {
		return({cards:[]})
	},

	componentWillMount: function() {
		var cards = [];
		d.projects.forEach(function(card) {
			var img = watch
			var link = card.url;
			if (card.id === 'novelist') {
				img = novelist;
			} else if (card.id === 'dear') {
				img = dear;
			} else if (card.id === 'foodie') {
				img = foodie;
			} else if (card.id === 'matador') {
				img = matador
			} else if (card.id === 'partner') {
				img = partner
			} else if (card.id === 'watch') {
				img = watch
			} else if (card.id === 'secret') {
				img = secret
			}

			var card =  (
				<div key={card.id} className="col-6 CardDetail">
					<div>
						{card.winner === "true" ? <img src={award} className="awardImg"/> : ""}
					</div>
					<div className="CardDetailImg">
						<a href={link}><img src={img}/></a>
					</div>	
					<div className="CardContent">
						<span className="CardName">{card.name} </span>{card.description}
					</div>
				</div>
			)
			cards.push(card)	
		});
		this.setState({cards:cards});
	},

	render () {
		return (
			<div className="col-12">
				<h3 className="Title">Projects</h3>
				<div className="ProjectDetail">
					{console.log(this.state.cards)}
					{this.state.cards.map(function(card) {
						return card;
					})}
				</div>
			</div>
		);
	}

});

export default Project;