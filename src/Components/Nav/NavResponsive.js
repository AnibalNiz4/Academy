import { useState } from 'react';
import './NavResponsive.scss';
const faceIcon = './faceIconWhite.png';
const instaIcon = './instaIconWhite.png';

export default function NavRes() {

    const [active, setActive] = useState(true);

    const hamburgerActive = () => setActive(!active);

    return (
        <>
            <div className={active ? 'navResContainer' : 'navResContainer navResBlue'}>
                    <h1> Academia <br/> Santa Fe</h1>
                <div className={active ? 'hamburgerNav' : 'hamburgerNav active'} onClick={hamburgerActive}>
                    <span className='spanNav1' ></span>
                    <span className='spanNav2' ></span>
                    <span className='spanNav3' ></span>
                </div>
            </div>
    
            <div className={active ? 'menuNavRes' : 'menuNavRes menuActive'}>
                <ul className='ulNavRes'>
                    <a href='#aboutMe'>
                        <li onClick={hamburgerActive}>
                            Quiénes somos
                        </li>
                    </a>
                    <a href='#subjects' className='subjectsNavRes'>
                        <li onClick={hamburgerActive}>
                            Materias
                        </li>
                    </a>
                    <a href='#contact'>
                        <li onClick={hamburgerActive}>
                            Contacto
                        </li>
                    </a>
                </ul>

                <div className='networksNavRes'>
                    <img alt='' src={faceIcon} />
                    <img alt='' src={instaIcon} />
                </div>
            </div>
        </>
    )
}