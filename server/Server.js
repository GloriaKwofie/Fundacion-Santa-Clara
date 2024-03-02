const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

//coneccion a la bd
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: process.env.PGPASSWORD,
  database: "santa_clara",
  max: 10,
  idleTimeoutMillis: 30000,
});

//Obtener datos de las noticias
app.get("/news", (req, res) => {
  pool.query("SELECT * FROM news", (error, result) => {
    if (error) {
      console.error("Error al consultar la base de datos: ", error);
      return res
        .status(500)
        .json({ error: "Error consultando la base de datos" });
    }
    res.json(result.rows);
  });
});

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
