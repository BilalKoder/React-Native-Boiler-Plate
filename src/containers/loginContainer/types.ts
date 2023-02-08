import { user_login_type } from "../../constants/user";
export interface LoginFormType {
    Email: string;
    Password: string;
}

export type LoginPayload = {
    version: string,
    username: string,
    password: string,
    type: user_login_type,
}

export type LoginResponse = {
    email: string,
    token: string,
}