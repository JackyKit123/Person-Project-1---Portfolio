import * as React from 'react';
import { Link } from 'react-router-dom';
import Particle from '../Particle/App';
import Sidebar from '../Sidebar/App';
import Trail from '../Trail/App';
import './index.css';

export default class extends React.Component {
	public render() {
		return (
			<>
				<Particle />
				<Sidebar />
				<section id="hobbies" className="sidebarMoveable  content">
					<h1 className="titles">My Hobbies</h1>
					<div id="hobbiesp" className="content-container">
						Welcome for visting this page. May I introduce my hobbies to you.
					<br />Here are the hobbies that I like.
					<br />You can click below to view more.
					<div className="hobbies-album-button-container">
							<div className="hobbies-album-button">
								<span className="hobbies-album-button ui-box bottom-inOutSpread" title="Nothing to show here">Playing
								Video Games</span>
							</div>
							<div className="hobbies-album-button">
								<Link to="album/star-gazing" className="hobbies-album-button ui-box bottom-inOutSpread to-STAR-album" title="Click here to see photos of a beautiful night sky">Star Gazing</Link>
							</div>
							<div className="hobbies-album-button">
								<Link to="album/us-trip" className="hobbies-album-button ui-box bottom-inOutSpread to-US-album" title="Click here to see photos of me all over the globe">Traveling</Link>
							</div>
							<div className="hobbies-album-button">
								<Link to="projects" className="hobbies-album-button ui-box bottom-inOutSpread toprojects" title="Click here to visit my projects.">Coding</Link>
							</div>
						</div>
					</div>
				</section>
				<Trail />
			</>
		)
	}
}