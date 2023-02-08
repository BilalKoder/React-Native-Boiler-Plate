import * as React from "react";

import STORAGE from "../../constants/storage";
import { getUser } from "../../APIServices/Auth";
import { useQuery } from "@tanstack/react-query";
import loginContext from "../../contexts/loginContext";
import NavigationRoutes from "../../navigators/NavigationRoutes";
import { LoginContext } from "../../contexts/loginContext/types";

export default function useStartupContainer() {
  const { isAuth, setUserAuthentication } = React.useContext(
    loginContext
  ) as LoginContext;
  const { data: currentUser, refetch, isSuccess, isLoading } = useQuery([STORAGE.GET_USER], getUser, {
    select: (userData) => ({ status: userData.status }),
    enabled: false,
  });

  React.useEffect(() => {
    if (isSuccess && !isLoading) {
      if (currentUser && !isAuth) {
        refetch();
        setUserAuthentication();
      }
    }
  }, [currentUser]);

  const getLandingPageFormStatus = React.useCallback((status: number) => {
    switch (status) {
      default:
        return NavigationRoutes.APP_STACK.HOME;
    }
  }, []);

  return {
    isAuth,
    initialRouteName: getLandingPageFormStatus(currentUser?.status),
  };
}
