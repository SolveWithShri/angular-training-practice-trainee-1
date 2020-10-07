import { getFullName } from "./full-name-utils";
import { Gender } from "./gender";

export type Title = 'Er.' | 'Dr.';

export interface User {
    title: Title;
    fullName: string;
    age: number;
    isValid: boolean;
    gender: Gender;
}

export interface UserModel {
    title: Title;
    firstName: string;
    lastName: string;
    age: number;
    isValid: boolean;
    gender: Gender;
}

export class UserService {
    loggedInUser: User;
    readonly userId: number;

    constructor(userModel: UserModel) {
        // this.loggedInUser = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     age: age,
        //     isValid:isValid
        // };

        // console.table(this.loggedInUser);

        const fullName = getFullName(userModel.firstName, userModel.lastName);
        // this.loggedInUser = {
        //     fullName: fullName,
        //     age: userModel.age,
        //     isValid: userModel.isValid,
        //     gender: userModel.gender
        // };

        const {age} = userModel;

        this.loggedInUser = {
            title: userModel.title,
            fullName,
            age,
            isValid: userModel.isValid,
            gender: userModel.gender
        };

        this.userId = 123;
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

    getFullName(): string {
        return this.loggedInUser.fullName;
    }

    // private getFullNamePrivate(): string {
    //     return `Hello ${this.loggedInUser.firstName}!`;
    // }

    getLoggedInUser(): User {
        return this.loggedInUser;
    }

    updateUserId() {
        // this.userId = 123;
    }
}

// let userService = new UserService('Richa', 'Sharma', 16, true);

// console.log('Full Name :: ', userService.getFullName());
// console.log('Private name :: ', (userService as any).getFullNamePrivate());

const userService = new UserService({
    title: 'Er.',
    firstName: 'Richa',
    lastName: 'Sharma',
    age: 16,
    isValid: false,
    gender: Gender.Female
});

// console.log('Full Name :: ', userService.getFullName());

console.table(userService.getLoggedInUser());

// const name: string = 'Shrikant';
// name = 'Sumit';