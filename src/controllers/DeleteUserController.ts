import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteUserService = new DeleteUserService();

    try {
      await deleteUserService.delete(id).then(() => {
        response.render("message", {
          message: "Usuário eliminado con exito"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Error al eliminar usuario: ${err.message}`
      });
    }
  }
}

export { DeleteUserController };