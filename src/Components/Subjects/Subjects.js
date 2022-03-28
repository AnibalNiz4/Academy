import './Subjects.scss';

//Subjects
const matematicas = './matematicas.jpg';
const ingles = './ingles.jpg';
const programacion = './programacion.jpeg';
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
                        <a href='#'>Ver plan</a>
                    </div>
                </div>
                
                <div className='subjectCard' >
                    <h3>Inglés</h3>
                    <div className='imgSubject'>
                        <img alt='' src={ingles} />
                    </div>

                    <div className='hoverCard' >
                        
                    </div>
                </div>

                <div className='subjectCard' >
                    <h3>Desarrollo Web</h3>
                    <div className='imgSubject'>
                        <img alt='' src={programacion} />
                    </div>

                    <div className='hoverCard' >
                        <h4>Anibal Niz y Julieta de Salazar</h4>
                        <p>Desarrollador Front-end y Desarrolladora Full-stack</p>
                        <a href='#'>Ver plan</a>
                    </div>
                </div>

                <div className='subjectCard' >
                    <h3>Música</h3>
                    <div className='imgSubject'>
                        <img alt='' src={musica} />
                    </div>

                    <div className='hoverCard' >
                        <h4>Brenda Uriona</h4>
                        <p>Profesora de música <br/> (UNL - Santa Fe)</p>
                        <a href='#'>Ver plan</a>
                    </div>
                </div>
            </div>
        </div>
    )
}