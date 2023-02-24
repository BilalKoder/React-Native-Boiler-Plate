import * as React from 'react';

import NavigationRoutes from './NavigationRoutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { navigate } from '../services/navigationService';
import { login } from '../APIServices/Auth';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  const { t } = useTranslation(["pageTitles"])
    useEffect(() => {
      const timer = setTimeout(()=>{
        navigate(NavigationRoutes.AUTH_STACK.LOGIN);
      }, 2000);
    },[]);
    return (
      <Stack.Navigator initialRouteName={NavigationRoutes.AUTH_STACK.SPLASH}>
        <Stack.Screen
          options={{ title: t("SPLASH"), headerShown: false }}
          name={NavigationRoutes.AUTH_STACK.SPLASH}
          getComponent={() => require('../screens/SplashScreen').default}
        />
        <Stack.Screen
          options={{ title: t("LOGIN"), headerShown: false }}
          name={NavigationRoutes.AUTH_STACK.LOGIN}
          getComponent={() => require('../screens/LoginScreen').default}
        />
        <Stack.Screen
          options={{ title: t("SIGNUP") }}
          name={NavigationRoutes.AUTH_STACK.SIGN_UP}
          getComponent={() => require('../screens/SignUpScreen').default}
        />

      <Stack.Screen
          options={{ title: t("EMAIL_CONFIRMATION"),headerShown: false  }}
          name={NavigationRoutes.AUTH_STACK.EMAIL_CONFIRMATION}
          getComponent={() => require('../screens/EmailConfirmation').default}
        />

      <Stack.Screen
          options={{ title: t("EMAIL_CONFIRMATION"),headerShown: false  }}
          name={NavigationRoutes.AUTH_STACK.OTP_VERIFICATION}
          getComponent={() => require('../screens/OtpVerification').default}
        />
    <Stack.Screen
              options={{ title: t("RESET_PASSWORD"),headerShown: false  }}
              name={NavigationRoutes.AUTH_STACK.RESET_PASSWORD}
              getComponent={() => require('../screens/ResetPassword').default}
            />

        {/* <Stack.Screen
              options={{ title: t("NOTIFICATION"),headerShown: false  }}
              name={NavigationRoutes.AUTH_STACK.NOTIFICATION}
              getComponent={() => require('../screens/NotificationSceen').default}
            /> */}

      </Stack.Navigator>
    );
}