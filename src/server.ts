import express from "express";
import { defaultRoutes } from "./routes";

const app = express();
const port = 3000;

//Habilita o uso do modelo JSON
app.use(express.json());

//Adiciona as rotas padrões
app.use(defaultRoutes);

//Adiciona as rotas para aluno
// Seu código aqui ...

//Adiciona as rotas para chamadas
// Seu código aqui ...

//Inicializa o serviço
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
