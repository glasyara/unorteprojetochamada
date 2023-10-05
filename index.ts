import express from "express";

const app = express();
const port = 3000;

//post criar - Create
//get ler - Read
//put alterar - Update
//delete apagar - Delete

app.get("/", (req, res) => {
  res.send("<h1>Hello UNORTE! <h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
