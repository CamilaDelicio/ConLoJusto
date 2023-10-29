import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUser {
  username: string;
  email: string;
  telefono: string;
  ciudad: string;
  estado: string;
}

class CreateUserService {
  async create({ username, email, telefono, ciudad, estado }: IUser) {
    if (!username || !email || !telefono || !ciudad || !estado) {
      throw new Error("Por favor rellene todos los campos");
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const usernameAlreadyExists = await usersRepository.findOne({ username });

    if (usernameAlreadyExists) {
      throw new Error("Username já está cadastrado");
    }

    const emailAlreadyExists = await usersRepository.findOne({ email });

    if (emailAlreadyExists) {
      throw new Error("Email já está cadastrado");
    }

    const user = usersRepository.create({ username, email, telefono, ciudad, estado });

    await usersRepository.save(user);

    return user;

  }
}

export { CreateUserService };