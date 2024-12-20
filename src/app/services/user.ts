import jwt from "jsonwebtoken";
import connectMongo from "../lib/db";
import Users from "../lib/usersSchema";

const SECRET_KEY = `${process.env.SECRET_KEY_JSON_WEB_TOKEN}`;

type TypeUserLogin = {
  email: string;
  password: string;
};

type TypeUserJWT = {
  _id: string,
  email: string;
  name: string;
  hierarchy: string;
};

function createToken(user: TypeUserJWT) {
  return jwt.sign(
    { id:user._id, email: user.email, name: user.name, hierarchy: user.hierarchy },
    SECRET_KEY
  );
}

function readToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error("Token inválido!");
  }
}

export async function userLogin(body: TypeUserLogin) {
  await connectMongo()
  const data = await Users.find({})
  const user = data.find(
    ({ email }: { email: string }) => email === body.email
  );

  if (!user) throw new Error("Usuário não encontrado");
  if (user.password !== body.password) throw new Error("Senha incorreta");

  const token = createToken(user);
  const newUser = readToken(token);

  return newUser;
}
