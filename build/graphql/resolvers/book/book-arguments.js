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
exports.EditBookInput = exports.BookInput = void 0;
const type_graphql_1 = require("type-graphql");
const title_arguments_1 = require("../title/title-arguments");
const author_arguments_1 = require("../author/author-arguments");
const genre_arguments_1 = require("../genre/genre-arguments");
let BookInput = class BookInput {
};
__decorate([
    (0, type_graphql_1.Field)(type => title_arguments_1.TitleInput),
    __metadata("design:type", title_arguments_1.TitleInput)
], BookInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => genre_arguments_1.GenreInput),
    __metadata("design:type", genre_arguments_1.GenreInput)
], BookInput.prototype, "genre", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => author_arguments_1.AuthorInput),
    __metadata("design:type", author_arguments_1.AuthorInput)
], BookInput.prototype, "author", void 0);
BookInput = __decorate([
    (0, type_graphql_1.InputType)()
], BookInput);
exports.BookInput = BookInput;
let EditBookInput = class EditBookInput {
};
__decorate([
    (0, type_graphql_1.Field)(type => title_arguments_1.TitleInput, { nullable: true }),
    __metadata("design:type", title_arguments_1.TitleInput)
], EditBookInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => genre_arguments_1.GenreInput, { nullable: true }),
    __metadata("design:type", genre_arguments_1.GenreInput)
], EditBookInput.prototype, "genre", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => author_arguments_1.AuthorInput, { nullable: true }),
    __metadata("design:type", author_arguments_1.AuthorInput)
], EditBookInput.prototype, "author", void 0);
EditBookInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditBookInput);
exports.EditBookInput = EditBookInput;
