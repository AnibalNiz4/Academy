import './Footer.scss';
const faceIcon = './faceIcon.png';
const instaIcon = './instaIcon.png';

export default function Footer() {

    return (
        <div className='footerContainer' >
            <img alt='' src={faceIcon} />
            <h3>Academia Santa Fe</h3>
            <img alt='' src={instaIcon} />
        </div>
    )
}