import express from "express";
import usersRoute from "./routes/users.route.js";
// configuração inicial

//Inicializando o express
const app = express();

// Forma de ler JSON | middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Utilizando uma rota criada separadamente
app.use(usersRoute);

// Rota Inicial / primeiro endpoint
app.get("/status", (req, res) => {
  res.json({
    status: "Funfando",
  });
  // OU..
  // res.status(200).send({ status: "Rodando" })
});
// Entregar uma porta | passando uma porta para ser escutada
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});
