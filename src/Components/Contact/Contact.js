import './Contact.scss';
import emailjs from 'emailjs-com';

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nmfcbbe', 'template_ftm2xk6', e.target, 'KAQfrhfba0DDWIVTx')
          .then((result) => {
              alert('Mensaje enviado con éxito!!! =)');
          }, (error) => {
              alert(error.message);
          });
          e.target.reset();
    }

    return (
        <div id='contact' className='contactContainer'>
            <form className='contactForm' onSubmit={sendEmail}>
                <h2>Contáctenos</h2>
                <div className='nameContainer'>
                    <label for='name' >Nombre</label>
                    <input type='text' id='name' name='name'></input>
                </div>
                <div className='subjectsContainer'>
                    <label className='subjectsName' for='subjects' >Materia</label>
                    <select className='subjects' name="interest">
                        <option>Matemáticas</option>
                        {/* <option>Desarrollo Web</option> */}
                        <option>Teclado/Piano</option>
                    </select>
                </div>
                <div className='emailContainer'>
                    <label for='email' >Email</label>
                    <input type='email' id='email' name='email'></input>
                </div>
                <div className='messageContainer'>
                    <label for='message' >Mensaje</label>
                    <textarea id='message' name='message'></textarea>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}