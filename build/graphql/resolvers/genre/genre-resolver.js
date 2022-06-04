"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreResolver = void 0;
const type_graphql_1 = require("type-graphql");
const genre_entity_1 = require("../../entities/genre-entity");
const genre_arguments_1 = require("./genre-arguments");
let GenreResolver = class GenreResolver {
    async genres() {
        return await genre_entity_1.GenreModel.find({});
    }
    async genre(_id) {
        return await genre_entity_1.GenreModel.findById(_id);
    }
    async createGenre(data) {
        const newGenre = new genre_entity_1.GenreModel(data);
        await newGenre.save();
        return newGenre;
    }
    async deleteGenre(_id) {
        return await genre_entity_1.GenreModel.findByIdAndRemove(_id);
    }
    async editGenre(_id, data) {
        return await genre_entity_1.GenreModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [genre_entity_1.Genre]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenreResolver.prototype, "genres", null);
__decorate([
    (0, type_graphql_1.Query)(returns => genre_entity_1.Genre),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreResolver.prototype, "genre", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => genre_entity_1.Genre),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [genre_arguments_1.BaseGenreInput]),
    __metadata("design:returntype", Promise)
], GenreResolver.prototype, "createGenre", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => genre_entity_1.Genre),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreResolver.prototype, "deleteGenre", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => genre_entity_1.Genre),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, genre_arguments_1.BaseGenreInput]),
    __metadata("design:returntype", Promise)
], GenreResolver.prototype, "editGenre", null);
GenreResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], GenreResolver);
exports.GenreResolver = GenreResolver;
