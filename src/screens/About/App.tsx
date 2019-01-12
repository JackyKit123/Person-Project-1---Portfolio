import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import selfie from './selfie.jpeg';
import Particle from '../Particle/App'
import Trail from '../Trail/App'
import Sidebar from '../Sidebar/App'

export default class extends React.Component {
    public render() {
        return (
            <>
                <Particle />
                <Sidebar />
                <section id="about" className="sidebarMoveable  content">
                    <h1 className="titles">About Me</h1>
                    <div id="aboutp" className="content-container">
                        <div><img id="aboutmepic" src={selfie} alt="My Selfie" /></div>
                        <div id="mainpage-flex-container1">I am Jacky, a boy passionated in computer engineering. Welcome to my webpage,
                            in this webpage, you can get to know my hobbies and view some of my photos as well as seeing the projects that I
                            participated in. Click below to visit them.
						<div id="mainpage-flex-container2">
                                <div className="ui-box bottom-stay tohobbies mainpage-buttons">
                                    <Link to='/hobbies' className="ui-border-element pointer">My Hobbies</Link>
                                </div>
                                <div className="ui-box bottom-stay tophotos mainpage-buttons">
                                    <Link to='/album' className="ui-border-element pointer">My Album</Link>
                                </div>
                                <div className="ui-box bottom-stay toprojects mainpage-buttons">
                                    <Link to='/projects' className="ui-border-element pointer">My Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Trail />
            </>
        )
    }
} 