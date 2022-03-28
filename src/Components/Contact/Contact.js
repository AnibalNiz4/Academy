import './Contact.scss';

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
    }

    return (
        <div id='contact' className='contactContainer'>
            <form className='contactForm' onSubmit={sendEmail}>
                <h2>Contáctenos</h2>
                <div className='nameContainer'>
                    <label for='name' >Nombre</label>
                    <input type='text' id='name'></input>
                </div>
                <div className='subjectsContainer'>
                    <label className='subjectsName' for='subjects' >Materia</label>
                    <select className='subjects' name="subjects">
                        <option>Matemáticas</option>
                        <option>Inglés</option>
                        <option>Desarrollo Web</option>
                        <option>Música</option>
                    </select>
                </div>
                <div className='emailContainer'>
                    <label for='email' >Email</label>
                    <input type='email' id='email'></input>
                </div>
                <div className='messageContainer'>
                    <label for='message' >Mensaje</label>
                    <textarea id='message' ></textarea>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}