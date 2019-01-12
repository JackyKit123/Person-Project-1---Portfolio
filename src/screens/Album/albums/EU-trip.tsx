import * as React from 'react'
import Slider from '../Slider'

export default class extends React.Component {
    public render() {
        return (
            <Slider title="US Trip" album={(
                <div className="slider-inner" id="eu-slider">
                    <img className="active-album-img first-album-img" src="/images/albums/EU/20140205_204026.jpg" />
                    <img src="/images/albums/EU/20140205_205044.jpg" />
                    <img src="/images/albums/EU/20140205_214738.jpg" />
                    <img src="/images/albums/EU/20140205_215600.jpg" />
                    <img src="/images/albums/EU/20140205_222506.jpg" />
                    <img src="/images/albums/EU/20140205_225647.jpg" />
                    <img src="/images/albums/EU/20140206_001058.jpg" />
                    <img src="/images/albums/EU/20140206_235518.jpg" />
                    <img src="/images/albums/EU/20140207_001240.jpg" />
                    <img src="/images/albums/EU/20140207_012749.jpg" />
                    <img src="/images/albums/EU/20140207_171439.jpg" />
                    <img src="/images/albums/EU/20140207_183805.jpg" />
                    <img className="last-album-img" src="/images/albums/EU/20140207_203456.jpg" />
                </div>
            )} />
        )
    }
}