const express = require("express");
const read = require("./services/read.services");
const app = express();

const PORT = process.env.PORT || 3000;

// para que express pueda leer los datos enviados por el cliente
app.use(express.urlencoded({ extended: true }));

// para que express pueda leer los datos enviados por el cliente en formato json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/workouts", require("./routes/workouts.routes"));

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
