"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = void 0;
const authChecker = ({ context: { user } }) => {
    if (!user) {
        return false;
    }
    return user.email === "admin@hotmail.com";
};
exports.authChecker = authChecker;
