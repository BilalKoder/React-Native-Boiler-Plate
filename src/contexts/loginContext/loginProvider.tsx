import { useState } from "react";

import LoginContext from ".";
import storage from "../../constants/storage";
import { setItem } from '../../services/storageService';
import { LoginResponse } from "../../containers/loginContainer/types";
import { LoginContext as LoginContextType, LoginProvider as LoginProviderType } from "./types";

export default function LoginProvider(props: LoginProviderType) {
  const { children } = props;
  const [isAuth, setIsAuth] = useState(false);

  const setUserAuthentication = (data?: LoginResponse) => {
    if (data) {
      setItem(storage.TOKEN, data.token);
      setItem(storage.GET_USER, data.user);
    }
    setIsAuth(true);
  }

  const providerValues: LoginContextType = {
    isAuth,
    setUserAuthentication,
  };

  return (
    <LoginContext.Provider value={providerValues}>
      {children}
    </LoginContext.Provider>
  );
}
