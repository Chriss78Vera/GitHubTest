const express = require("express");
const data = require("../../db.json");
const router = express.Router();
/**
 *  
 * The data is read if the parameter exists in the database
 * 
 * If the data exists, it shows the JSON on the screen, if it is not found, a 404 status is sent.
 * 
 * @param id - The URL of the API endpoint you want to call.
 */
router.get("/:id", (req, res) => {
  const dataRes = data[req.params.id];

  if (!dataRes) {
    res.status(404).send("Error 404");
  } else {
    res.send(dataRes);
  }
});

/**
 *  
 * Perform a search within the DB.
 * 
 * Receive the parameter that is needed for reading
 * 
 * @param admin - The URL of the API endpoint you want to call.
 * 
 * @param user - The URL of the API endpoint you want to call.
 * 
 * If it finds the data, it marks true and shows it, otherwise it marks false and does not show it on the screen.
 * 
 * @returns An array with the objects.
 * 
 * If no data is found, it returns an empty array.
 * 
 */
router.get("/", (req, res) => {
  const filters = req.query;

  const dataRet = Object.values(data);

  const filteredUsers = dataRet.filter((user) => {
    let isValid = true;

    for (key in filters) {
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });

  res.send(filteredUsers);
});

module.exports = router;
