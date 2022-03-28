import './Nav.scss';

export default function Nav() {

    return (
        <div className="navContainer">
            <a href='#home'>
                <h2>
                    Academia <br/> Santa Fe
                </h2>
            </a>
            
            <ul>
                <a href='#aboutMe'>
                    <li>
                        Quiénes somos
                    </li>
                </a>
                <a href='#subjects'>
                    <li>
                        Materias
                    </li>
                </a>
                <a href='#contact'>
                    <li>
                        Contacto
                    </li>
                </a>
            </ul>
        </div>
    )
}