import * as React from 'react'
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
                <section id='particle-overlay'>
                    <section id="contact" className="sidebarMoveable content">
                        <h1 className="titles">Contact Me</h1>
                        <div id="contactp" className="content-container">
                            You can connect to me via email, Facebook, WhatsApp Instagram or Discord!
					<div id="Email" className="contact-icons">
                                <div id="Emailsub" className="contact-icons-sub">
                                    <a href="mailto:jackykit19970402@gmail.com">jackykit19970402@gmail.com</a>
                                </div>
                            </div>
                            <div id="Facebook" className="contact-icons">
                                <div id="Facebooksub" className="contact-icons-sub">
                                    <a href="https://www.facebook.com/jackykitkit" target="_blank">Jacky Chan</a>
                                </div>
                            </div>
                            <div id="Whatsapp" className="contact-icons">
                                <div id="Whatsappsub" className="contact-icons-sub">
                                    <a href="tel:+852-9607-3066" target="_blank">+852 9607 3066</a>
                                </div>
                            </div>
                            <div id="Instagram" className="contact-icons">
                                <div id="Instagramsub" className="contact-icons-sub">
                                    <a href="https://www.instagram.com/" target="_blank">jacky_arkit</a>
                                </div>
                            </div>
                            <div id="Discord" className="contact-icons">
                                <div id="Discordsub" className="contact-icons-sub">
                                    <a href="https://discord.me/jackykit" target="_blank">discord.me/jackykit</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <Trail />
            </>
        )
    }
}