import { user_login_type } from "../../constants/user";
export interface LoginFormType {
    Email: string;
    Password: string;
}

export type LoginPayload = {
    emailOrUserName: string,
    password: string,
}

export type EmailResetPayload = {
    email: string,
}

export type LoginResponse = {
    email: string,
    token: string,
}

export type EmailConfirmationResponse = {
    message: string,
}