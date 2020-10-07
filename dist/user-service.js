"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var full_name_utils_1 = require("./full-name-utils");
var gender_1 = require("./gender");
var UserService = /** @class */ (function () {
    function UserService(userModel) {
        // this.loggedInUser = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     age: age,
        //     isValid:isValid
        // };
        // console.table(this.loggedInUser);
        var fullName = full_name_utils_1.getFullName(userModel.firstName, userModel.lastName);
        // this.loggedInUser = {
        //     fullName: fullName,
        //     age: userModel.age,
        //     isValid: userModel.isValid,
        //     gender: userModel.gender
        // };
        var age = userModel.age;
        this.loggedInUser = {
            fullName: fullName,
            age: age,
            isValid: userModel.isValid,
            gender: userModel.gender
        };
    }
    // 1.
    // getFullName() {
    //     let fullName = this.loggedInUser.firstName + ' ' + this.loggedInUser.lastName;
    //     return fullName;
    // }
    // 2.
    // getFullName(): string {
    //     const fullName: string = this.loggedInUser.firstName + ' ' + this.loggedInUser.lastName;
    //     return fullName;
    // }
    // 3.
    // getFullName(): string {
    //     return this.loggedInUser.firstName + ' ' + this.loggedInUser.lastName;
    // }
    // 4.
    // getFullName(): string {
    //     return `${this.loggedInUser.firstName} ${this.loggedInUser.lastName}`;
    // }
    UserService.prototype.getFullName = function () {
        return this.loggedInUser.fullName;
    };
    // private getFullNamePrivate(): string {
    //     return `Hello ${this.loggedInUser.firstName}!`;
    // }
    UserService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    return UserService;
}());
exports.UserService = UserService;
// let userService = new UserService('Richa', 'Sharma', 16, true);
// console.log('Full Name :: ', userService.getFullName());
// console.log('Private name :: ', (userService as any).getFullNamePrivate());
var userService = new UserService({
    firstName: 'Richa',
    lastName: 'Sharma',
    age: 16,
    isValid: false,
    gender: gender_1.Gender.Female
});
// console.log('Full Name :: ', userService.getFullName());
console.table(userService.getLoggedInUser());
//# sourceMappingURL=user-service.js.map