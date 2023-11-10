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
exports.CreateUserService = void 0;
const typeorm_1 = require("typeorm");
const UsersRepository_1 = require("../repositories/UsersRepository");
class CreateUserService {
    create({ username, email, telefono, ciudad, estado }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!username || !email || !telefono || !ciudad || !estado) {
                throw new Error("Por favor rellene todos los campos");
            }
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepository_1.UsersRepository);
            const usernameAlreadyExists = yield usersRepository.findOne({ username });
            if (usernameAlreadyExists) {
                throw new Error("Username já está cadastrado");
            }
            const emailAlreadyExists = yield usersRepository.findOne({ email });
            if (emailAlreadyExists) {
                throw new Error("Email já está cadastrado");
            }
            const user = usersRepository.create({ username, email, telefono, ciudad, estado });
            yield usersRepository.save(user);
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
