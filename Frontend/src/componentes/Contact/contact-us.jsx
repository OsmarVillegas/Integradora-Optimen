import React from "react"; // Importa la librería React
import Button from "react-bootstrap/Button"; // Importa el componente Button de react-bootstrap
import Form from "react-bootstrap/Form"; // Importa el componente Form de react-bootstrap
import "../../estilos/Contact/contact-us.css"; // Importa el archivo de estilos CSS para el componente Contact
import { FormattedMessage, useIntl } from "react-intl"; // Importa la función FormattedMessage y useIntl de react-intl

export function Contact() { // Define la función Contact como un componente de React
  
  const intl = useIntl(); // Obtiene la instancia de la función useIntl

  // Usa la función formatMessage de la instancia intl para obtener un mensaje localizado
  const nameMessage = intl.formatMessage({
    id: 'app.Name',
    defaultMessage: 'Name',
    style: { fontSize: '17px' },
  });

  const intl2 = useIntl(); // Obtiene otra instancia de la función useIntl

  // Usa la función formatMessage de la instancia intl2 para obtener un mensaje localizado
  const emailMessage = intl2.formatMessage({
    id: 'app.Email',
    defaultMessage: 'Email',
    style: { fontSize: '17px' },
  });

  const intl3 = useIntl(); // Obtiene otra instancia de la función useIntl

  // Usa la función formatMessage de la instancia intl3 para obtener un mensaje localizado
  const passMessage = intl3.formatMessage({
    id: 'app.Pass',
    defaultMessage: 'Password',
    style: { fontSize: '17px' },
  });

  const intl4 = useIntl(); // Obtiene otra instancia de la función useIntl

  // Usa la función formatMessage de la instancia intl4 para obtener un mensaje localizado
  const numberMessage = intl4.formatMessage({
    id: 'app.Number',
    defaultMessage: 'Phone Number',
    style: { fontSize: '17px' },
  });

  const intl5 = useIntl(); // Obtiene otra instancia de la función useIntl

  // Usa la función formatMessage de la instancia intl5 para obtener un mensaje localizado
  const mesMessage = intl5.formatMessage({
    id: 'app.Mes',
    defaultMessage: 'Message',
    style: { fontSize: '17px' },
  });


  return (
    <div className="Formulario">
      {/* Aquí se define el título del formulario usando un componente FormattedMessage para permitir internacionalización */}
      <strong>
        {" "}
        <h1 id="titulo"> 
        <FormattedMessage
        id="app.Contact"
        defaultMessage="Contact Us"
        />
        </h1>
      </strong>
      {/* Aquí comienza el formulario usando el componente "Form" de react-bootstrap */}
      <div>
        <Form className="Formulario-form">
          {/* Aquí se define el campo para el nombre */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text"  placeholder={nameMessage} style={{fontSize:"17px"}}   />
          </Form.Group>
          {/* Aquí se define el campo para el correo electrónico */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder={emailMessage} style={{fontSize:"17px"}} />
          </Form.Group>
          {/* Aquí se define el campo para la contraseña */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder={passMessage} style={{fontSize:"17px"}} />
          </Form.Group>
          {/* Aquí se define el campo para el número */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="number" placeholder={numberMessage} style={{fontSize:"17px"}} />
          </Form.Group>
          {/* Aquí se define el campo para el asunto utilizando un menú desplegable */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <select className="form-select" aria-label="Default select example" style={{fontSize:"17px"}}>
              {/* Se definen las opciones del menú desplegable */}
              <option selected>
              <FormattedMessage
              id="app.As"
              defaultMessage="Subject"
              />

              </option>
              <option value="1">
              <FormattedMessage
              id="app.SI"
              defaultMessage="Request information"
              />
                </option>
              <option value="2">
              <FormattedMessage
              id="app.SR"
              defaultMessage="Request meeting"
              />
               </option>
              <option value="3">
              <FormattedMessage
              id="app.R"
              defaultMessage="Other"
              />
                </option>
            </select>
          </Form.Group>
          {/* Aquí se define el campo para el mensaje */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder={mesMessage} style={{fontSize:"17px"}}
            ></textarea>
          </Form.Group>
          {/* Aquí se define el botón de enviar */}
          <Button variant="primary" type="submit">
            <FormattedMessage
            id="app.csend"
            defaultMessage="Send"
            />
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
    // Componente de mapa que devuelve una imagen en un div con clase "map"
    <div className="map">
      <img
        className="imagen-mapa"
        src={require("../../imagenes/Mapa.png")}
        alt="Optmen"
      />
    </div>
  );
}
// Autor: Mario Alberto Rangel Márquez
//GDS0451
