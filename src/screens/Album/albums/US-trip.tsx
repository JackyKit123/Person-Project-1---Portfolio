import * as React from 'react'
import Slider from '../Slider';

export default class extends React.Component {
    public render() {
        return (
            <Slider title="US Trip" album={(
                <div className="slider-inner" id="us-slider">
                    <img className="active-album-img first-album-img" src="/images/albums/US/P2065866.png" />
                    <img src="/images/albums/US/P2065877.png" />
                    <img src="/images/albums/US/P2065888.png" />
                    <img src="/images/albums/US/P2075912.png" />
                    <img src="/images/albums/US/P2075959.png" />
                    <img src="/images/albums/US/P2075966.png" />
                    <img src="/images/albums/US/P2075989.png" />
                    <img src="/images/albums/US/P2095995.png" />
                    <img src="/images/albums/US/P2096035.png" />
                    <img src="/images/albums/US/P2106051.png" />
                    <img src="/images/albums/US/P2106055.png" />
                    <img src="/images/albums/US/P2106056.png" />
                    <img src="/images/albums/US/P2106058.png" />
                    <img src="/images/albums/US/P2116087.png" />
                    <img src="/images/albums/US/P2116089.png" />
                    <img src="/images/albums/US/P2116097.png" />
                    <img src="/images/albums/US/P2116124.png" />
                    <img className="last-album-img" src="/images/albums/US/P2116154.png" />
                </div>
            )} />
        )
    }
}