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


export type OtpConfirmPayload = {
    code: string,
}

export type ResetPasswordPayload = {
    password: string,
    code: number
}

export type LoginResponse = {
    email: string,
    token: string,
    user: any
}

export type EmailConfirmationResponse = {
    message: string,
}