"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../services/CreateUserService");
class CreateUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, telefono, ciudad, estado } = request.body;
            const createUserService = new CreateUserService_1.CreateUserService();
            try {
                yield createUserService.create({
                    username,
                    email,
                    telefono,
                    ciudad,
                    estado
                }).then(() => {
                    response.render("message", {
                        message: "Usuário creado con exito"
                    });
                });
            }
            catch (err) {
                response.render("message", {
                    message: `Error al crear usuário: ${err.message}`
                });
            }
        });
    }
}
exports.CreateUserController = CreateUserController;
