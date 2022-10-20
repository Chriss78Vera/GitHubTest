import axios from "axios";
import React from "react";
// RECIBRE EL PARAMETRO DEL URL Y RETORNA EL USUARIO
export const GitHubuser = (url) => {
  // INSTANCIAR EL DATA Y UN ESTADO
  const [user, setUser] = React.useState({ state: true, data: null });
  // LLAMAR A LA FUNCION PARA TRAER LOS DATOS
  React.useEffect(() => {
    getDataUser(url);
  }, [url]);
  // FUNCION PARA TRAER LOS DATOS : RECIBRE UN URL Y RETORNA EL USUARIO
  const getDataUser = (url) => {
    setUser({ state: true, data: null });
    const gitHub_api = axios.create({
      baseURL: url,
    });

    gitHub_api
      .get()
      .then((response) => {
        // SETEO DE DATOS EN EL USUARIO - SE CAMBIA EL ESTADO A FALSO UNA VES QUE SE TENGAN LOS DATOS Y SE ALMACENAN LOS DATOS
        setUser({ state: false, data: response.data });
        
      })
      .catch(function (error) {
        if (error.response) {
          console.log(
            "Request was made and server responded with a non 200 status"
          );
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("Request was made, but no response was received");
          console.log(error.request);
        } else {
          console.log("Something happened setting up the request");
          console.log(error.message);
        }
      });
  };
  return user;
};

export const GitHubuserRepos = (url) => {
  const [user, setUser] = React.useState({ state: true, data: null });

  React.useEffect(() => {
    getDataRepos(url);
  }, [url]);

  const getDataRepos = (url) => {
    setUser({ state: true, data: null });

    const gitHub_api = axios.create({
      baseURL: url,
    });

    gitHub_api
      .get()
      .then((response) => {
        setUser({ state: false, data: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(
            "Request was made and server responded with a non 200 status"
          );
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("Request was made, but no response was received");
          console.log(error.request);
        } else {
          console.log("Something happened setting up the request");
          console.log(error.message);
        }
      });
  };
  return user;
};
