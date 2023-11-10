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
exports.SearchUserService = void 0;
const typeorm_1 = require("typeorm");
const UsersRepository_1 = require("../repositories/UsersRepository");
class SearchUserService {
    search(search) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!search) {
                throw new Error("Por favor preencha o campo de busca");
            }
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepository_1.UsersRepository);
            const user = yield usersRepository
                .createQueryBuilder()
                .where("username like :search", { search: `%${search}%` })
                .orWhere("email like :search", { search: `%${search}%` })
                .orWhere("telefono like :search", { search: `%${search}%` })
                .orWhere("ciudad like :search", { search: `%${search}%` })
                .orWhere("estado like :search", { search: `%${search}%` })
                .getMany();
            return user;
        });
    }
}
exports.SearchUserService = SearchUserService;
