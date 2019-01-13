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
                        <div className="projects" id="flower-shop">
                            <a href="project/flower-shop" target="_blank">
                                <img src="images/project/flower-shop.png" />
                                <div className="project-name">A flower shop website, what do you expect?</div>
                            </a>
                        </div>
                        <div className="projects" id="bootstrap-site">
                            <a href="project/bootstrap-site" target="_blank">
                                <img src="images/project/only_bootstrap_page.png" />
                                <div className="project-name">Just like every boostrap site ever</div>
                            </a>
                        </div>
                        <div className="projects" id="tic-tac-toe">
                            <a href="project/tic-tac-toe" target="_blank">
                                <img src="images/project/tic-tac-toe.jpg" />
                                <div className="project-name">A javascript based tic tac toe game</div>
                            </a>
                        </div>
                    </div>
                </section>
                <Trail />
            </Background>
        )
    }
}