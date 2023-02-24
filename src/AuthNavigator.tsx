import * as React from "react";

import AppStack from "./navigators/AppStack";
import AuthStack from "./navigators/AuthStack";
import { navigationRef } from "./services/navigationService";
import { NavigationContainer } from "@react-navigation/native";
import useStartupContainer from "./containers/startupContainer/StartupContainer";

export default function AuthNavigator() {
  const { initialRouteName, isAuth } = useStartupContainer();

  return (
    <NavigationContainer ref={navigationRef}>
      {!isAuth ? (
        <AppStack initialRouteName={initialRouteName} />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
