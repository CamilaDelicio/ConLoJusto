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
exports.UpdateUserController = void 0;
const UpdateUserService_1 = require("../services/UpdateUserService");
class UpdateUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, username, email, telefono, ciudad, estado } = request.body;
            const updateUserService = new UpdateUserService_1.UpdateUserService();
            try {
                yield updateUserService.update({ id, username, email, telefono, ciudad, estado }).then(() => {
                    response.render("message", {
                        message: "Usuário atualizado com sucesso"
                    });
                });
            }
            catch (err) {
                response.render("message", {
                    message: `Erro ao atualizar usuário: ${err.message}`
                });
            }
        });
    }
}
exports.UpdateUserController = UpdateUserController;
