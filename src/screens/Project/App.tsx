import * as React from 'react';
import Background from '../Background/App';
import Particle from '../Particle/App';
import Sidebar from '../Sidebar/App';
import Trail from '../Trail/App';
import './index.css'

export default class extends React.Component {
    public render() {
        return (
            <Background>
                <Particle />
                <Sidebar />
                <section id="project" className="sidebarMoveable content">
                    <h1 className="titles">My Projects</h1>
                    <div id="projectp" className="content-container">
                        <div className="projects" title="No Preview available">
                            <img src="images/project/tic-tac-toe.jpg" />
                            <div className="project-name">A JavaScript Based TicTacToe Game</div>
                        </div>
                        <div className="projects" title="No Preview available">
                            <img src="images/project/only_bootstrap_page.png" />
                            <div className="project-name">Just like every bootstrap site ever</div>
                        </div>
                        <div className="projects">
                            <a href="http://draw-it.surge.sh">
                                <img className="pointer" src="images/project/painting.png" />
                                <div className="project-name pointer">A Painting Web App</div>
                            </a>
                        </div>
                        <div className="projects">
                            <a href="https://trade4goods.xyz">
                                <img className="pointer" src="images/project/trade4goods.png" />
                                <div className="project-name pointer">Trade4Goods - An Online Barter Platform</div>
                            </a>
                        </div>
                    </div>
                </section>
                <Trail />
            </Background>
        )
    }
}