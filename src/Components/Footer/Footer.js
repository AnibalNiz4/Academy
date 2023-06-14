import './Footer.scss';
const faceIcon = './faceIcon.png';
const instaIcon = './instaIcon.png';
const location = './location.png';
const phone = './phone.png';

export default function Footer() {

    return (
        <div className='footerContainer' >
            <div className='footerContact'>
                <div className='cardFooter' >
                    <img alt='' src={location} />
                    <h3>Encontranos</h3>
                    <p>Güemes 4271 - Santa Fe</p>
                </div>
                <div className='cardFooter' >
                    <img alt='' src={phone} />
                    <h3>Comunicate</h3>
                    <p>342 4343768 - Matemáticas</p>
                    {/* <p>342 5541915 - Desarrollo Web</p> */}
                    <p>3455 407797 - Teclado/Piano</p>
                </div>
            </div>
            <div className='footerName'>
                <a href='https://www.instagram.com/cfe.stafe/' target='_blank' ><img alt='' src={instaIcon} /></a>
                <h3>Academia TEC - Santa Fe</h3>
                <a href='https://www.facebook.com/AcademiaTEC.SantaFe' target='_blank' ><img alt='' src={faceIcon} /></a>
            </div>
        </div>
    )
}