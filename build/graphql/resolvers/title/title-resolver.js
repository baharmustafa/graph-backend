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
exports.TitleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const title_entity_1 = require("../../entities/title-entity");
const title_arguments_1 = require("./title-arguments");
let TitleResolver = class TitleResolver {
    async titles() {
        return await title_entity_1.TitleModel.find({});
    }
    async title(_id) {
        return await title_entity_1.TitleModel.findById(_id);
    }
    async createTitle(data) {
        const newTitle = new title_entity_1.TitleModel(data);
        await newTitle.save();
        return newTitle;
    }
    async deleteTitle(_id) {
        return await title_entity_1.TitleModel.findByIdAndRemove(_id);
    }
    async editTitle(_id, data) {
        return await title_entity_1.TitleModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [title_entity_1.Title]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TitleResolver.prototype, "titles", null);
__decorate([
    (0, type_graphql_1.Query)(returns => title_entity_1.Title),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TitleResolver.prototype, "title", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => title_entity_1.Title),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [title_arguments_1.BaseTitleInput]),
    __metadata("design:returntype", Promise)
], TitleResolver.prototype, "createTitle", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => title_entity_1.Title),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TitleResolver.prototype, "deleteTitle", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => title_entity_1.Title),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, title_arguments_1.BaseTitleInput]),
    __metadata("design:returntype", Promise)
], TitleResolver.prototype, "editTitle", null);
TitleResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], TitleResolver);
exports.TitleResolver = TitleResolver;
