const express = require('express');

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Course 1", "Course 2", "Course 3"]);
})

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Course 6", "Course 2", "Course 3", "Course 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Course 6", "Course 7", "Course 3", "Course 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Course 6", "Course 7"]);
});

//localhost port number
app.listen(3333);