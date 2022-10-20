const express = require("express");
const app = express();

const userRoutes = require("./routes/user");
/**
 *
 * The port in which our API will be running is established.
 *
 */
const port = process.env.PORT || 9000;
/**
 *
 * Returns the data in JSON form.
 *
 * Middleware is used for routing the API and calling each of the specific Routes.
 *
 */
app.use(express.json());
app.use("/users", userRoutes);

app.listen(port, () => console.log("server listening on port", port));
