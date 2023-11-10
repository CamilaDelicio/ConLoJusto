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
exports.SearchUserController = void 0;
const SearchUserService_1 = require("../services/SearchUserService");
class SearchUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let { search } = request.query;
            search = search.toString();
            const searchUserService = new SearchUserService_1.SearchUserService();
            try {
                const users = yield searchUserService.search(search);
                response.render("search", {
                    users: users,
                    search: search
                });
            }
            catch (err) {
                response.render("message", {
                    message: `Error al buscar el usuario: ${err.message}`
                });
            }
        });
    }
}
exports.SearchUserController = SearchUserController;
