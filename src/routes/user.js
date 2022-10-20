const express = require("express");
const data = require("../../db.json");
const router = express.Router();

// Recibe un parametro ID el cual lee el data y lo muestra en pantalla
router.get("/:id", (req, res) => {
  // Lectura del parametro con el data 
  const dataRes = data[req.params.id];
  // Si el parametro no existe entonces mandamos el estado 404 y el mensaje de error
  // Si el parametro existe mostramos el dato en pantalla
  if (!dataRes) {
    res.status(404).send("Error 404");
  } else {
    res.send(dataRes);
  }
});

// Recibre un filtrado con los siguientes parametros {?position=la posición entre admin o user}
router.get("/", (req, res) => {
  // Recibe el filtrado ingresado
  const filters = req.query;
  // Se transforma el JSON en un Arreglo de Objetos
  const dataRet = Object.values(data);
  // Se crea la funcion para filtrar los datos con el Arreglo de Objetos
  const filteredUsers = dataRet.filter((user) => {
    let isValid = true;
    // Recorremos el arreglo y buscamos el objeto con el filtrado, si se encuentra el Objeto se marca en verdadero si no en Falso
    for (key in filters) {
      // Buscamos el objeto filtrado con position = valor ingresado
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  // Retorna los objetos que se encontraron con el valor de verdadero, en caso de no encontrar ninguno retorna un arreglo vacio
  res.send(filteredUsers);
});

module.exports = router;
