import * as React from 'react';

import { useTranslation } from 'react-i18next';
import NavigationRoutes from './NavigationRoutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type AppStackProps = {
  initialRouteName: string
}

export default function AppStack(props: AppStackProps) {
  const { initialRouteName } = props
    const { t } = useTranslation(["pageTitles"])
    return (
      <Stack.Navigator initialRouteName={initialRouteName}>
       
         <Stack.Screen
          options={{ title: t("MESSAGE SCREEN") }}
          name={NavigationRoutes.APP_STACK.MESSAGE_SCREEN}
          getComponent={() => require("../screens/MessageScreen").default}
        />
         <Stack.Screen
          options={{ title: t("HOME") }}
          name={NavigationRoutes.APP_STACK.HOME}
          getComponent={() => require("../screens/HomeScreen").default}
        />
      </Stack.Navigator>
    );
}