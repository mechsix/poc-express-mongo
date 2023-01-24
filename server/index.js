const express = require("express");
const recordRoutes = express.Router();

recordRoutes.route("/").get(async (req, res) => {
    res.status(200).json({status: 'ok'});
});

const app = express()

app.use("/t", recordRoutes)

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
