import { ReactElement } from 'react'
import { LoginResponse } from '../../containers/loginContainer/types';

export interface LoginContext {
    isAuth: Boolean;
    setUserAuthentication: (a?: LoginResponse) => void;
}

export interface LoginProvider {
    children: ReactElement;
} 