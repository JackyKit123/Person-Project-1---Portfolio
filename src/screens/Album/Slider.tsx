import * as React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Particle from '../Particle/App';
import Sidebar from '../Sidebar/App';
import Trail from '../Trail/App';

interface IAlbumProps {
    album: JSX.Element
    title: string
}

export default class extends React.Component<IAlbumProps> {
    constructor(props: IAlbumProps) {
        super(props)
    }
    public render() {
        return (
            <>
                <Particle />
                <Sidebar />
                <div id='particle-overlay'>
                    <section id="album_container">
                        <div className="slider-title"><span>{this.props.title}</span></div>
                        <div className="slider-outer">
                            <div className="album-prev-next">
                                <img onClick={this.prev} src="/images/albums/arrow-left.png" className="prev pointer" alt="Prev" />
                            </div>
                            {this.props.album}
                            <div className="album-prev-next">
                                <img onClick={this.next} src="/images/albums/arrow-right.png" className="next pointer" alt="Next" />
                            </div>
                        </div>
                        <div>
                            <Link to='/album'><img id="return-to-album" className="pointer" src="/images/albums/arrow-return.png" /></Link>
                        </div>
                    </section>
                </div>
                <Trail />
            </>
        )
    }

    private next() {
        const currentImg = $('.active-album-img');
        let nextImg: JQuery<HTMLElement> = currentImg.next();

        if (!nextImg.length) {
            nextImg = $(".first-album-img")
        }
        nextImg.addClass('active-album-img')
        currentImg.css({
            "zIndex": "2"
        }).fadeOut({
            queue: false, duration: 1000
        }).animate({
            'padding-top': "520px"
        }, 1000, function () {
            currentImg.css({
                "padding-top": "0",
                "zIndex": "0"
            }).removeClass('active-album-img')
        })
    }

    private prev() {
        const currentImg = $('.active-album-img');
        let prevImg: JQuery<HTMLElement> = currentImg.prev();

        if (!prevImg.length) {
            prevImg = $(".last-album-img")
        }
        prevImg.addClass('active-album-img').css({
            "zIndex": "2",
            "padding-top": "520px"
        }).fadeIn({
            queue: false, duration: 1000
        }).animate({
            'padding-top': "0",
            "zIndex": "0"
        }, 1000, function () {
            currentImg.removeClass('active-album-img')
        })
    }
}