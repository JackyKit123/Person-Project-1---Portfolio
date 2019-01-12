import * as React from 'react'
import Slider from '../Slider'

export default class extends React.Component {
    public render() {
        return (
            <Slider title="US Trip" album={(
                <div className="slider-inner" id="pet-slider">
                    <img className="active-album-img first-album-img" src="/images/albums/PET/1.jpg" />
                    <img src="/images/albums/PET/2.jpg" />
                    <img src="/images/albums/PET/3.jpg" />
                    <img src="/images/albums/PET/4.jpg" />
                    <img src="/images/albums/PET/5.jpg" />
                    <img src="/images/albums/PET/6.jpg" />
                    <img src="/images/albums/PET/7.jpg" />
                    <img src="/images/albums/PET/8.jpg" />
                    <img src="/images/albums/PET/9.jpg" />
                    <img className="last-album-img" src="/images/albums/PET/10.jpg" />
                </div>
            )} />
        )
    }
}