import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_sham38b',
      'template_13msckd',
      formData,
      'd52ngsWolUeNWhDC5'
    )
    .then(() => {
      alert("Mensaje enviado con éxito.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error("Error al enviar el mensaje:", error);
      alert("Ocurrió un error al enviar el mensaje.");
    });
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <p>¿Tienes una idea o propuesta? ¡Hablemos!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
