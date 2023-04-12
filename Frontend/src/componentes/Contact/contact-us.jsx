import React, { useRef } from "react"; // Importa la librería React
import Button from "react-bootstrap/Button"; // Importa el componente Button de react-bootstrap
import Form from "react-bootstrap/Form"; // Importa el componente Form de react-bootstrap
import "../../estilos/Contact/contact-us.css"; // Importa el archivo de estilos CSS para el componente Contact
import { FormattedMessage, useIntl } from "react-intl"; // Importa la función FormattedMessage y useIntl de react-intl
import emailjs from "@emailjs/browser";

export function Contact() {
  // Define la función Contact como un componente de React

  const intl = useIntl(); // Obtiene la instancia de la función useIntl

  // Usa la función formatMessage de la instancia intl para obtener un mensaje localizado
  const nameMessage = intl.formatMessage({
    id: "app.Name",
    defaultMessage: "Name",
    style: { fontSize: "17px" },
  });

  const intl2 = useIntl(); // Obtiene otra instancia de la función useIntl

  // Usa la función formatMessage de la instancia intl2 para obtener un mensaje localizado
  const emailMessage = intl2.formatMessage({
    id: "app.Email",
    defaultMessage: "Email",
    style: { fontSize: "17px" },
  });

  const intl4 = useIntl(); // Obtiene otra instancia de la función useIntl

  // Usa la función formatMessage de la instancia intl4 para obtener un mensaje localizado
  const numberMessage = intl4.formatMessage({
    id: "app.Number",
    defaultMessage: "Phone Number",
    style: { fontSize: "17px" },
  });

  const intl5 = useIntl(); // Obtiene otra instancia de la función useIntl

  // Usa la función formatMessage de la instancia intl5 para obtener un mensaje localizado
  const mesMessage = intl5.formatMessage({
    id: "app.Mes",
    defaultMessage: "Message",
    style: { fontSize: "17px" },
  });

  const notMessage = intl.formatMessage({
    id: "app.Not",
    defaultMessage: "Message sent!",
    style: { fontSize: "17px" },
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("subjectMessage", e.target.subjectMessage.value);
  

    emailjs
      .sendForm(
        "service_a5qkjcg",
        "template_5m0xc98",
        form.current,
        "-C0-5alYnOMi2q3vA"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Mostrar notificación de envío exitoso
          const notification = document.createElement("div");
          notification.classList.add("notification");
          notification.innerText = notMessage;
          document.body.appendChild(notification);
          setTimeout(() => {
            notification.remove();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          // Mostrar notificación de error de envío
          const notification = document.createElement("div");
          notification.classList.add("notification");
          notification.style.backgroundColor = "#f44336";
          notification.innerText = "Error sending message!";
          document.body.appendChild(notification);
          setTimeout(() => {
            notification.remove();
          }, 3000);
        }
      );
  };
  return (
    <div className="Formulario">
      {/* Aquí se define el título del formulario usando un componente FormattedMessage para permitir internacionalización */}
      <strong>
        {" "}
        <h1 id="titulo">
          <FormattedMessage id="app.Contact" defaultMessage="Contact Us" />
        </h1>
      </strong>
      {/* Aquí comienza el formulario usando el componente "Form" de react-bootstrap */}
      <div>
        <Form className="Formulario-form" onSubmit={sendEmail} ref={form}>
          {/* Aquí se define el campo para el nombre */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="nameMessage"
              type="text"
              placeholder={nameMessage}
              style={{ fontSize: "17px" }}
            />
          </Form.Group>
          {/* Aquí se define el campo para el correo electrónico */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="emailMessage"
              type="email"
              placeholder={emailMessage}
              style={{ fontSize: "17px" }}
            />
          </Form.Group>
          {/* Aquí se define el campo para el número */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="numberMessage"
              type="number"
              placeholder={numberMessage}
              style={{ fontSize: "17px" }}
            />
          </Form.Group>
          {/* Aquí se define el campo para el asunto utilizando un menú desplegable */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Select
              aria-label="Default select example"
              style={{ fontSize: "17px" }}
              name="subjectMessage"
            >
              {/* Se definen las opciones del menú desplegable */}
              <option selected>
                <FormattedMessage id="app.As" defaultMessage="Subject" />
              </option>
              <option value="Request information">
                <FormattedMessage
                  id="app.SI"
                  defaultMessage="Request information"
                />
              </option>
              <option value="Services">
                <FormattedMessage id="app.SR" defaultMessage="Services" />
              </option>
            </Form.Select>
          </Form.Group>
          {/* Aquí se define el campo para el mensaje */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={mesMessage}
              style={{ fontSize: "17px" }}
              name="mesMessage"
            />
          </Form.Group>
          {/* Aquí se define el botón de enviar */}
          <Button variant="primary" type="submit">
            <FormattedMessage id="app.csend" defaultMessage="Send" />
          </Button>
        </Form>
      </div>
    </div>
  );
}

// Autor: Mario Alberto Rangel Márquez
//GDS0451

export function Mapa() {
  return (
    <div style={{ width: '600px', height: '600px', position: 'relative' }}>
      <iframe
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=es&amp;q=Av.%20Le%C3%B3n%20119,%20Jardines%20del%20Moral,%2037160%20Le%C3%B3n,%20Gto.+(Optimen)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/car-satnav-gps/">Car Navigation Systems</a>
      </iframe>
    </div>
  );
}
// Autor: Mario Alberto Rangel Márquez
//GDS0451
