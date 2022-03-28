import './AboutMe.scss';
const quality = './quality.png';
const practice = './practice.png';
const help = './help.png';

export default function AboutMe() {

    return (
        <div id='aboutMe' className="aboutContainer" >
            <h1 className='aboutTitle'>
                Quiénes somos
            </h1>
            <p className='aboutText'>
                Somos un grupo de personas comprometidas con la educación de la más alta calidad. Creemos que la formación del s. XXI  requiere de tecnología, creatividad y comunicación. Es nuestra meta ofrecer una propuesta integral para potenciar el perfil profesional de cada estudiante.
            </p>
            <div className='cardsAbout'>
                <div className='cardAbout'>
                    <div className='iconAbout'>
                        <img alt='' src={quality} />
                    </div>
                    <h3>Texto a poner</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className='cardAbout'>
                    <div className='iconAbout'>
                        <img alt='' src={practice} />
                    </div>
                    <h3>Texto a poner</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className='cardAbout'>
                    <div className='iconAbout'>
                        <img alt='' src={help} />
                    </div>
                    <h3>Texto a poner</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    )
}