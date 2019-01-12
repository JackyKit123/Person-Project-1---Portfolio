import * as React from 'react'
import Slider from '../Slider'

export default class extends React.Component {
    public render() {
        return (
            <Slider title="US Trip" album={(
                <div className="slider-inner" id="star-slider">
                    <img className="active-album-img first-album-img" src="/images/albums/Stars/P7115838.png" />
                    <img src="/images/albums/Stars/P7115839.png" />
                    <img src="/images/albums/Stars/P7115840.png" />
                    <img src="/images/albums/Stars/P7115841.png" />
                    <img src="/images/albums/Stars/P7115842.png" />
                    <img src="/images/albums/Stars/P7115843.png" />
                    <img src="/images/albums/Stars/P7115845.png" />
                    <img src="/images/albums/Stars/P7115847.png" />
                    <img src="/images/albums/Stars/P7115849.png" />
                    <img src="/images/albums/Stars/P7115850.png" />
                    <img src="/images/albums/Stars/P7115852.png" />
                    <img src="/images/albums/Stars/P7115853.png" />
                    <img className="last-album-img" src="/images/albums/Stars/P7115857.png" />
                </div>
            )} />
        )
    }
}