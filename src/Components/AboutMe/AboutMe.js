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
            Somos un grupo de personas que creemos que la formación del s.XXI requiere de tecnología, creatividad y mejora continua. Es nuestra meta ofrecer una propuesta de educación integral eficiente, para potenciar el perfil profesional de cada estudiante, de manera ágil y práctica.
            </p>
            <div className='cardsAbout'>
                <div className='cardAbout'>
                    <div className='iconAbout'>
                        <img alt='' src={quality} />
                    </div>
                    <h3>Calidad</h3>
                    <p>Recibirás educación con contenidos actualizados, y de manera eficiente.</p>
                </div>
                <div className='cardAbout'>
                    <div className='iconAbout'>
                        <img alt='' src={practice} />
                    </div>
                    <h3>Práctica constante</h3>
                    <p>Pondrás en práctica todo lo aprendido en clase.</p>
                </div>
                <div className='cardAbout'>
                    <div className='iconAbout'>
                        <img alt='' src={help} />
                    </div>
                    <h3>Asistencia</h3>
                    <p>Tendrás un acompañamiento personalizado.</p>
                </div>
            </div>
        </div>
    )
}