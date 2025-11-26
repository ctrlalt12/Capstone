import express, { response } from "express";

const app = express();

app.get("/");
(request, response) => {
  response.send("welcome to my app");
};

app.get("/status" , (request, response)=>{
  response.json((message:"service healthy"))
}
);

const server = app.listen(3000, () =>
  console.log(`Listening on port ${server.address().port}`)
);
