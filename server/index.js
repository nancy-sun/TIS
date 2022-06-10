const express = require("express");
require('dotenv').config();
const { PORT } = process.env;
const app = express();
const destinations = require("./routes/destinations");
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use("/destinations", destinations);

app.listen(PORT, () => {
    console.log(`i'm listening at ${PORT}`);
})