import './Subjects.scss';

//Subjects
const matematicas = './matematicas.jpg';
const aireAcondicionado = './aireAcondicionado.jpg';
// const programacion = './programacion.jpeg';
const musica = './musica.jpg';

//Photos
// const anibal = './photos/Anibal.jpg';
// const brenda = './photos/Brenda.jpeg';
// const milagros = './photos/Milagros.jpeg';

export default function Subjects() {

    return (
        <div id='subjects' className='subjectsContainer' >
            <h1 className='subjectsTitle'>
                Materias
            </h1>

            <div className='cardsContainer' >
                <div className='subjectCard' >
                    <h3>Matemáticas</h3>
                    <div className='imgSubject'>
                        <img alt='' src={matematicas} />
                    </div>

                    <div className='hoverCard' >
                        <h4>Milagros Rabellino</h4>
                        <p>Estudiante de Profesorado en Matemática</p>
                        <a href='./programaMate.pdf' target='_blank' >Ver plan</a>
                    </div>
                </div>

                <div className='subjectCard' >
                    <h3>Teclado/Piano</h3>
                    <div className='imgSubject'>
                        <img alt='' src={musica} />
                    </div>

                    <div className='hoverCard' >
                        <h4>Brenda Uriona</h4>
                        <p>Profesora de música <br/> (UNL - Santa Fe)</p>
                        <a href='./programaMusica.pdf' target='_blank' >Ver plan</a>
                    </div>
                </div>

                <div className='subjectCard' >
                    <h3>Instalación aire acondicionado</h3>
                    <div className='imgSubject'>
                        <img alt='' src={aireAcondicionado} />
                    </div>

                    <div className='hoverCard' >
                        <h4>Emilio J. de Salazar</h4>
                        <p>Técnico en refrigeración</p>
                        <a href='./programaAireAcondicionado.pdf' target='_blank' >Ver plan</a>
                    </div>
                </div>
            </div>
        </div>
    )
}