//import imgBanner from '/bannerImg.jpg';
import './home.scss';
const imgBanner = '/bannerImg.jpg';
const arrowBanner = './Arrow.png';
const faceIcon = './faceIcon.png';
const instaIcon = './instaIcon.png';

export default function HomeJs() {

    return (
        <div id='home' className='homeContainer'>
            <div className='imgHome'>
                <img className='imgHome' alt='' src={imgBanner} />
            </div>

            <div className='arrowHome'>
                <img alt='' src={arrowBanner} />
            </div>

            <div className='textHome'>
                <h1>
                    Texto principal de la página ni bien entras (?
                </h1>
                <div className='networksHome'>
                    <img alt='' src={faceIcon} />
                    <img alt='' src={instaIcon} />
                </div>
            </div>
        </div>
    )
}