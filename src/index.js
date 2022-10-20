// Impotaciones de variables
const express = require("express");
const app = express();
// Asignacion del Puerto en el cual vamos a ejecutar la API
const port = process.env.PORT || 9000;
// Se importa los endpoints para el uso de la API
const userRoutes = require("./routes/user");
// middlewares 
// Presenta la informacion en JSON
app.use(express.json());
// Edicion de las rutas para el llamado de la api 
app.use("/users", userRoutes);
// Ejecuta el codigo en el puerto asignado
app.listen(port, () => console.log("server listening on port", port));
