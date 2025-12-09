import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 3000;

const app = express();

const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

app.use(cors());
app.use(express.json());
app.use(logging);
app.get("/", (request, response) => {
  response.send("Welcome to the Class SPA REST API");
});

app.get("/status", (request, response) => {
  response.json({ message: "Service healthy" });
});

app.get("/weather/:city", (request, response) => {
  const city = request.params.city;

  4;
  let lowTemp = 32;
  if ("lowtemp" in request.query) {
    lowTemp = Number(request.query.lowtemp);
  }

  const min = 70;
  const max = 90;
  const highTemp = Math.floor(Math.random() * (max - min + 1) + min);

  response.json({
    text: `The weather in ${city} is ${highTemp} degrees today.`,
    temp: {
      current: highTemp,
      low: lowTemp
    },
    city
  });
});

const server = app.listen(PORT, () =>
  console.log(`Listening on port ${server.ad]dress().port}`)
;
