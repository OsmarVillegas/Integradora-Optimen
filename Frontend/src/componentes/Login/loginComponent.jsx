import React, { useState, useEffect } from "react";
import "../../estilos/Login/loginStyle.css";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cookies = new Cookies();

export function Login() {
  const notifyWarning = () =>
    toast.warn("El usuario o la contraseña no son correctos", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const notifyError = () => {
      toast.error('Error al recibir la información de la cuenta desde el backend', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const iniciarSesion = () => {
    fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response[0].token.length > 0) {
          cookies.set("token", response[0].token, { path: "/" });
          cookies.set("rol", response[1].userFound.roles[0].name, {
            path: "/",
          });
          if (cookies.get("rol") == "admin") {
            window.location.href = "/Admin/Vista";
          }
          if (cookies.get("rol") == "creador") {
            window.location.href = "/Creador/Vista";
          } else {
            console.log(`El rol ${cookies.get("rol")} no existe en el backend`);
          }
        } else {
          notifyError();
        }
      })
      .catch((error) => {
        notifyWarning();
      });

  };

  useEffect(() => {
    if (cookies.get("rol") == "admin") {
      window.location.href = "/Admin/Vista";
    }
  }, []);

  return (
    <div className="Login-Contenido text-center">
      <ToastContainer />

      <div className="Login-Formulario text-center">
        <div className="Login-Titulo">
          <h1 className="Login-Titulo">Inicio de sesión</h1>
        </div>

        <form className="Login-Form">
          <div className="Login-Formulariocontenido">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              onChange={(e) => {
                setFormValues((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
              required
            />
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              onChange={(e) => {
                setFormValues((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
              required
            />
          </div>

        </form>

        <button className="Login-buttonLogin" onClick={() => iniciarSesion()}>
          Log in
        </button>

        <div className="Login-footer">
          <p>
            Ingresa con tu correo y contraseña asignada por el administrador
          </p>
        </div>
      </div>
    </div>
  );
}
