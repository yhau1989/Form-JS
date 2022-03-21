import logo from './usuario.png';
import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');
  const [enviado, setEnviado] = useState(0);

  let url = 'https://api.mailjet.com/v3.1/send'
  let client = 'ac4b51080e3988f030b00c0da79579e6';
  let password = '08a7006bab6a268350b8c9225d9e7de5';
 
  const handleSendMail = (event) => {  
    event.preventDefault();
    setEnviado(3); 
    emailjs.send("service_gs4lpmp","template_6nzwbcv", {
      from_name: nombre,
      from_email: correo,
      message: comentario
    } , "WwEwK5kvgB-0xoF01")
      .then((result) => {
        console.log("ok", result.text);
        setEnviado(1);
      }, (error) => {
          console.log("error", error.text);
          setEnviado(2);
        });
    console.log("enviado")
  }

  return (
    <>
    <div className="min-h-full flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 px-4 py-4">¡Haz un comentario!</h2>
          </div>
          <form className="mt-8 space-y-4" onSubmit={handleSendMail}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="nombre" className="sr-only">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="nombre"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nombre"
                  onChange={(name) => {
                    setNombre(name.target.value)
                  }}
                  value={nombre} 
                />
              </div>
              <div>
                <label htmlFor="correo" className="sr-only">
                  Correo
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Correo electrónico"
                  onChange={(email) => {
                    setCorreo(email.target.value)
                  }}
                />
              </div>
              <div>
              <label htmlFor="comentario" className="sr-only">
                  Comentario
                </label>
                <textarea
                  id="comentario"
                  name="comentario"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Comentario"
                  onChange={(message) => {
                    setComentario(message.target.value)
                  }}
                />
              </div>
              {
                enviado === 1 && (
                  <div>
                    Mensaje enviado correctamente.
                  </div>
                )
              }
              {
                enviado === 2 && (
                  <div>
                    No se pudo enviar su mensaje.
                  </div>
                )
              }
              {
                enviado === 3 && (
                  <div>
                    Cargando......
                  </div>
                )
              }
            </div>
            {
              enviado !== 3 && (
                <input
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit" value="Enviar" 
                />
              )
            }
          </form>
        </div>
      </div>
      </>
  );
}

export default App;
