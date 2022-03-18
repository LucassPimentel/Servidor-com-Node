import { Router } from "express";

const usersRoute = Router();

//pesquisa geral no servidor
usersRoute.get("/users", (req, res) => {
  const users = [{ username: "Lucas" }];
  res.json({ users });
});

// /:uuid permite uma pesquisa específica por id no servidor
usersRoute.get("/users/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  res.json({ uuid });
});

//Inserir um dado no servidor
usersRoute.post("/users", (req, res) => {
  const newUser = req.body;
  res.status(200).send(newUser);
});

//Alterando um dado no servidor
usersRoute.put("/users/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  const modifiedUser = req.body;

  modifiedUser.uuid = uuid;

  res.status(200).send({ modifiedUser });
});

//Deletando um dado no servidor
usersRoute.delete("/users/:uuid", (req, res) => {
  const uuid = req.params.uuid;
  res.sendStatus(200);
});

export default usersRoute;
