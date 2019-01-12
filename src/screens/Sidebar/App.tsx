import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import $ from 'jquery';

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
                    <div id='sidebar-pusher'></div>
                    <header id='sidebartitle' onClick={this.showSideBar} className="sidebarMoveable pointer">&#9776; Jacky's Page</header>
                    <div id='sidenav'>
                        <div className='ui-box slideOpposite pointer' id='closebtn' onClick={this.closeSideBar}><span id='UnicodeCross' className="ui-border-element">&times;</span></div>
                        <div className='ui-box bottom-inOutSpread top-inOutSpread toabout pointer'><Link to='/about'>Who I am?</Link></div>
                        <div className='ui-box bottom-inOutSpread top-inOutSpread tohobbies pointer'><Link to='/hobbies'>My Hobbies</Link></div>
                        <div className='ui-box bottom-inOutSpread top-inOutSpread tophotos pointer'><Link to='/album'>My Photos</Link></div>
                        <div className='ui-box bottom-inOutSpread top-inOutSpread toprojects pointer'><Link to='/projects'>My Projects</Link></div>
                        <div className='ui-box bottom-inOutSpread top-inOutSpread tocontact pointer'><Link to='/contact'>Contact Me</Link></div>
                    </div>
                    <div id="overlay" onClick={this.closeSideBar} className="sidebarMoveable"></div>
                </section>
            </section>
        )
    }

    private showSideBar() {
        if (window.innerWidth > 700) {
            //extend the sidebar height to 100% since it is going to pop up from the left
            $('#sidenav').css({
                "height": "100%",
                "text-align": "left",
                "padding-top": '50px',
            })

            //create an overlay when the sidebar is opened
            $('#overlay').animate({
                marginLeft: "250px"
            }, { duration: 500, queue: false })
            $('#overlay').fadeIn({ duration: 500, queue: false });
            //push all element to the right
            $('.sidebarMoveable').animate({
                marginLeft: "250px"
            }, { duration: 500, queue: false })
            //sidebar extends from left
            $('#sidenav').animate({
                width: "250px"
            }, { duration: 500, queue: false })
            //recrod that sidebar pop up from the left for closing operation
            this.sidebarFromLeft = true;
        } else {
            //extend the sidebar width to 100% since it is going to pop up from the top
            $('#sidenav').css({
                "width": "100%",
                "padding-top": '0',
                "text-align": "center"
            })
            //create an overlay when the sidebar is opened
            $('#overlay').animate({
                marginTop: "240px"
            }, { duration: 500, queue: false })
            $('#overlay').fadeIn({ duration: 500, queue: false });
            //push all element downward
            $('#sidebar-pusher').animate({
                height: "240px"
            }, { duration: 500, queue: false })
            //sidebar extends from the top
            $('#sidenav').animate({
                height: "240px"
            })
            //recrod that sidebar pop up from the top for closing operation
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
            //content shift back to the left
            $('.sidebarMoveable').animate({
                marginLeft: 0
            }, { duration: 500, queue: false })
            //sidebar collapse
            $('#sidenav').animate({
                width: 0
            }, { duration: 500, queue: false })
            //overlay disappear
            $('#overlay').animate({
                marginLeft: "0"
            }, { duration: 500, queue: false })
            $('#overlay').fadeOut({ duration: 500, queue: false });
            //after all animation of close sidebar is completed, resize the sidebar to 0 0
            setTimeout(finish, 500);
            //move things back to top if sidebar was opened from the top
        } else {
            //content shift back to the top
            $('#sidebar-pusher').animate({
                height: "0"
            }, { duration: 500, queue: false })
            //sidebar collapse
            $('#sidenav').animate({
                height: 0
            }, { duration: 500, queue: false })
            //overlay disappear
            $('#overlay').animate({
                marginTop: "0"
            }, { duration: 500, queue: false })
            $('#overlay').fadeOut({ duration: 500, queue: false });
            //after all animation of close sidebar is completed, resize the sidebar to 0 0
            setTimeout(finish, 500);
        }
    }
}