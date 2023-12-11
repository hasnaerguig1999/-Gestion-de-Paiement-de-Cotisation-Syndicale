const express = require("express");
const dotenv = require("dotenv");
const { connectToDatabase } = require("./config/mongoose-connection");
const router = require("./router/IndexRoutes");
const cors = require("cors");

dotenv.config();

const app = express();

// Connect to MongoDB
connectToDatabase();

app.use(express.json({ limit: '50mb' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
