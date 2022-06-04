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
exports.BookModel = exports.Book = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
const title_entity_1 = require("./title-entity");
const genre_entity_1 = require("./genre-entity");
const author_entity_1 = require("./author-entity");
let Book = class Book {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], Book.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => title_entity_1.Title),
    (0, typegoose_1.prop)({ require: true }),
    __metadata("design:type", title_entity_1.Title)
], Book.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => genre_entity_1.Genre),
    (0, typegoose_1.prop)({ require: true }),
    __metadata("design:type", genre_entity_1.Genre)
], Book.prototype, "genre", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => author_entity_1.Author),
    (0, typegoose_1.prop)({ require: true }),
    __metadata("design:type", author_entity_1.Author)
], Book.prototype, "author", void 0);
Book = __decorate([
    (0, type_graphql_1.ObjectType)()
], Book);
exports.Book = Book;
exports.BookModel = (0, typegoose_1.getModelForClass)(Book, { schemaOptions: {} });
