import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import Particle from '../Particle/App';
import Sidebar from '../Sidebar/App';
import Trail from '../Trail/App';

export default class extends React.Component {
    public render() {
        return (
            <>
                <Particle />
                <Sidebar />
                <section id="albums" className="sidebarMoveable  content">
                    <h1 className="titles">My Albums</h1>
                    <div id="albumsp" className="content-container">
                        <span>Choose below for the album you wish to take a look that.</span>
                        <div className="hobbies-album-button-container">
                            <div className="hobbies-album-button">
                                <Link to='album/us-trip' className="hobbies-album-button ui-box bottom-inOutSpread to-US-album">American Trip</Link>
                            </div>
                            <div className="hobbies-album-button">
                                <Link to='album/eu-trip' className="hobbies-album-button ui-box bottom-inOutSpread to-EU-album">Europe Trip</Link>
                            </div>
                            <div className="hobbies-album-button">
                                <Link to='album/pet' className="hobbies-album-button ui-box bottom-inOutSpread to-PET-album">My Pet</Link>
                            </div>
                            <div className="hobbies-album-button">
                                <Link to='album/star-gazing' className="hobbies-album-button ui-box bottom-inOutSpread to-STAR-album">Star Gazing</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Trail />
            </>
        )
    }
}