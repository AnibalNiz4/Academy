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
                    Academia TEC: formación tecnológica y creativa.
                </h1>
                <div className='networksHome'>
                    <a href='https://www.instagram.com/academiatec.stafe/' target='_blank' ><img alt='' src={instaIcon} /></a>
                    <a href='https://www.facebook.com/AcademiaTEC.SantaFe' target='_blank' ><img alt='' src={faceIcon} /></a>
                </div>
            </div>
        </div>
    )
}