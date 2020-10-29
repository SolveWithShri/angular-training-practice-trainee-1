export interface User {
    id: number;
    name: string;
    age: number;
    phoneNumber?: number;
    emailId?: string
    avatar?: string;
}

export interface UsersResponse {
    type: string;
    data: User[];
    errors: string [];
}

export interface UserResponse {
    type: string;
    data: User;
    errors: string [];
}
