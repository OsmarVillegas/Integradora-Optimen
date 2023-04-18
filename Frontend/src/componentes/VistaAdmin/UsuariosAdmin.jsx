import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../../estilos/Back/usuarios.css";
import Modal from "react-bootstrap/Modal";
import { useFetch } from "../Back/useFetch";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function FormularioUsuariosAdmin() {


  // Realiza la petición al servidor con la función importada
  const { data } = useFetch("/api/users");

  // Permite la visualicación de la pantalla modal de registro
  const [modal, setModal] = useState(false);

  // Ayuda a identificar los valores al momento de realizar una modificación
  const [idModificar, setIdModificar] = useState(null);

  // Ayuda a identificar si se esta editando o ingresando un form
  const [edit, setEdit] = useState(false);

  // Formulario que permite registrar la información
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    roles: [],
  });

  // Permite mostrar el modal que contiene el formulario, para ello actualiza el valor enviandose a si mismo el valor contrario en el momento de ejecutarse
  const showModal = () => {
    setModal(!modal);
    console.log(formValues);
  };

  const handleSubmit = () => {
    data.push(formValues);
    fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-access-token": cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const componentDidMount = (id) => {
    fetch("/api/users/" + id, {
      method: "DELETE",
      headers: {
        "x-access-token": cookies.get("token"),
      },
    }).then(() => this.setState({ status: "Delete successful" }));
    window.location.reload();
  };

  const componentDidEdit = () => {
    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": cookies.get("token"),
      },
      body: JSON.stringify(formValues),
    };
    fetch("/api/users/" + formValues._id, requestOptions).then((response) =>
      response.json()
    )
    .then((response) => console.log(response));

    // Reinicia la pantalla para recargar los valores modificados
    window.location.reload();
  };

  const seleccionarUsuario = (user) => {
    setFormValues({
      username: user.username,
      email: user.email,
      password: user.password,
      roles: user.roles,
      _id: user._id,
    });
  };

  return (
    <div class="FormularioUsuarioAdmin contenidoFormUsuarioAdmin">
      <div class="form">
        <h1 class="form-titulo">Integrantes</h1>
        <hr className="Recuadro-hr" />
        <div class="formulario position-relative">
          <Table className="form-table" striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gmail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((users) => {
                return (
                  <tr key={users.id}>
                    <td>{users.username}</td>
                    <td>{users.email}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setEdit(true);
                          seleccionarUsuario(users);
                          showModal();
                        }}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          seleccionarUsuario(users);
                          componentDidMount(users._id);
                        }}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <button
            className="btn btn-success position-absolute end-0"
            onClick={() => {
              showModal();
              setEdit(false);
              setFormValues({
                username: "",
                email: "",
                password: "",
                roles: [],
              });
            }}
          >
            Agregar
          </button>

          {/* Modal que contiene el formulario */}

          <Modal show={modal} centered>
            <Modal.Header className="position-relative">
              <button
                className="btn btn-danger rounded-circle font-weight-bold"
                onClick={() => showModal()}
              >
                X
              </button>
              <h1 className="position-absolute modal-titulo">
                Generar Usuario
              </h1>
            </Modal.Header>
            <Modal.Body>
              {/* Formulario */}

              <label htmlFor="username" className="label">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Nombre"
                value={
                  idModificar !== null
                    ? data.find((row) => row.id === idModificar).username
                    : formValues.username
                }
                onChange={(e) => {
                  setFormValues((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }));
                }}
              />
              <br />
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                value={
                  idModificar !== null
                    ? data.find((row) => row.id === idModificar).email
                    : formValues.email
                }
                onChange={(e) => {
                  setFormValues((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }));
                }}
              />
              <br />
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                className="form-control"
                type="text"
                name="password"
                placeholder="Contraseña"
                value={
                  idModificar !== null
                    ? data.find((row) => row.id === idModificar).password
                    : formValues.password
                }
                onChange={(e) => {
                  setFormValues((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }));
                }}
              />
              {edit ? (
                <div></div>
              ) : (
                <div>
                  <br />
                  <label htmlFor="Rol" className="label">
                    Rol
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    name="roles"
                    onChange={(e) => {
                      setFormValues((prevState) => ({
                        ...prevState,
                        roles: e.target.value,
                      }));
                    }}
                  >
                    <option selected value="creador">
                      Seleccione la visibilidad
                    </option>
                    <option value="admin">Admin</option>
                    <option value="creador">Creador de contenido</option>
                  </Form.Select>
                </div>
              )}
              <br />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => showModal()}>
                Cancelar
              </Button>

              {/* Condición que evalua la variable edit, en el caso de ser verdadero se regresa un botón que permite editar, en el caso de ser falso regresa un botón que permite agregar */}

              {edit ? (
                <Button
                  variant="primary"
                  onClick={() => {

                    componentDidEdit();
                  }}
                >
                  Editar
                </Button>
              ) : (
                <Button
                  variant="success"
                  onClick={() => {
                    handleSubmit();
                    showModal();
                  }}
                >
                  Guardar
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
