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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreInput = exports.BaseGenreInput = void 0;
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
let BaseGenreInput = class BaseGenreInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BaseGenreInput.prototype, "description", void 0);
BaseGenreInput = __decorate([
    (0, type_graphql_1.InputType)()
], BaseGenreInput);
exports.BaseGenreInput = BaseGenreInput;
let GenreInput = class GenreInput extends BaseGenreInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], GenreInput.prototype, "_id", void 0);
GenreInput = __decorate([
    (0, type_graphql_1.InputType)()
], GenreInput);
exports.GenreInput = GenreInput;
