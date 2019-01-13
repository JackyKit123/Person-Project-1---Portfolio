import * as $ from 'jquery';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class extends React.Component {
    private sidebarFromLeft: boolean;
    constructor(props: {}) {
        super(props)
        this.sidebarFromLeft = true;
        this.showSideBar = this.showSideBar.bind(this)
        this.closeSideBar = this.closeSideBar.bind(this)
    }

    public render() {
        return (
            <section id="particle-overlay">
                <section id='sidebar'>
                    <div id='sidebar-pusher' />
                    <header id='sidebartitle' onClick={this.showSideBar} className="sidebarMoveable pointer">&#9776; Jacky's Page</header>
                    <div id='sidenav'>
                        <div className='ui-box slideOpposite pointer' id='closebtn' onClick={this.closeSideBar}><span id='UnicodeCross' className="ui-border-element">&times;</span></div>
                        <Link to='/about'><div className='ui-box bottom-inOutSpread top-inOutSpread toabout pointer'>Who I am?</div></Link>
                        <Link to='/hobbies'><div className='ui-box bottom-inOutSpread top-inOutSpread tohobbies pointer'>My Hobbies</div></Link>
                        <Link to='/album'><div className='ui-box bottom-inOutSpread top-inOutSpread tophotos pointer'>My Photos</div></Link>
                        <Link to='/projects'><div className='ui-box bottom-inOutSpread top-inOutSpread toprojects pointer'>My Projects</div></Link>
                        <Link to='/contact'><div className='ui-box bottom-inOutSpread top-inOutSpread tocontact pointer'>Contact Me</div></Link>
                    </div>
                    <div id="overlay" onClick={this.closeSideBar} className="sidebarMoveable" />
                </section>
            </section>
        )
    }

    private showSideBar() {
        if (window.innerWidth > 700) {
            $('#sidenav').css({
                "height": "100%",
                "padding-top": '50px',
                "text-align": "left"
            })
            $('#overlay').animate({
                marginLeft: "250px"
            }, { duration: 500, queue: false })
            $('#overlay').fadeIn({ duration: 500, queue: false });
            $('.sidebarMoveable').animate({
                marginLeft: "250px"
            }, { duration: 500, queue: false })
            $('#sidenav').animate({
                width: "250px"
            }, { duration: 500, queue: false })
            this.sidebarFromLeft = true;
        } else {
            $('#sidenav').css({
                "padding-top": '0',
                "text-align": "center",
                "width": "100%",
            })
            $('#overlay').animate({
                marginTop: "240px"
            }, { duration: 500, queue: false })
            $('#overlay').fadeIn({ duration: 500, queue: false });
            $('#sidebar-pusher').animate({
                height: "240px"
            }, { duration: 500, queue: false })
            $('#sidenav').animate({
                height: "240px"
            })
            this.sidebarFromLeft = false;
        }
    }

    private closeSideBar() {
        const finish = () => {
            $('#sidenav').css({
                "height": 0,
                "width": 0
            })
        }
        if (this.sidebarFromLeft) {
            $('.sidebarMoveable').animate({
                marginLeft: 0
            }, { duration: 500, queue: false })
            $('#sidenav').animate({
                width: 0
            }, { duration: 500, queue: false })
            $('#overlay').animate({
                marginLeft: "0"
            }, { duration: 500, queue: false })
            $('#overlay').fadeOut({ duration: 500, queue: false });
            setTimeout(finish, 500);
        } else {
            $('#sidebar-pusher').animate({
                height: "0"
            }, { duration: 500, queue: false })
            $('#sidenav').animate({
                height: 0
            }, { duration: 500, queue: false })
            $('#overlay').animate({
                marginTop: "0"
            }, { duration: 500, queue: false })
            $('#overlay').fadeOut({ duration: 500, queue: false });
            setTimeout(finish, 500);
        }
    }
}