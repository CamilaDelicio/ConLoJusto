import { Request, Response } from "express";
import { GetUserDataService } from "../services/GetUserDataService";

class GetUserDataController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;

    if (id === undefined) {
      // Manejar el caso en que id no está presente en la consulta
      response.status(400).send("ID no proporcionado en la consulta.");
      return;
    }

    const userId = id.toString(); // Ahora estamos seguros de que id no es undefined

    const getUserDataService = new GetUserDataService();

    const user = await getUserDataService.getData(userId);

    if (!user) {
      response.status(404).send("Usuario no encontrado.");
      return;
    }

    return response.render("edit", {
      user: user
    });
  }
}

export { GetUserDataController };
