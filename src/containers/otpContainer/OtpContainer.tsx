import { useMutation } from '@tanstack/react-query';
import React from 'react';
import Snackbar from 'react-native-snackbar';
import { emailConfirmation, otpVerification } from '../../APIServices/Auth';
import NavigationRoutes from '../../navigators/NavigationRoutes';
import { navigate } from '../../services/navigationService';
import { Colors } from '../../themes';
import { APP_PRIMARY_COLOR } from '../../themes/Colors';
import { LogBox } from 'react-native';

export default function useOtpContainer() {
    const [value, setValue] = React.useState('');

    const { mutate: resetOtpConfig } = useMutation(otpVerification, {
      onSuccess: (data) => {
        Snackbar.show({
          text: "OTP Verified Successfully!",
          duration: Snackbar.LENGTH_SHORT,
          textColor: Colors.Colors.WHITE,
          backgroundColor: APP_PRIMARY_COLOR
        });
      setTimeout(() => {
        navigate(NavigationRoutes.AUTH_STACK.RESET_PASSWORD);
      }, 2000);
      },
      onError: (data) => {
        LogBox.ignoreLogs([
         data as string
        ]);
        Snackbar.show({
          text: "Wrong OTP please try again!",
          duration: Snackbar.LENGTH_SHORT,
          textColor: Colors.Colors.WHITE,
          backgroundColor: Colors.Colors.TOMATO
        });
      }
    
    });
    const handleSubmit = () => {
      if(value.length < 4){  
        Snackbar.show({
          text: "OTP must contain 4 digits",
          duration: Snackbar.LENGTH_SHORT,
          textColor: Colors.Colors.WHITE,
          backgroundColor: Colors.Colors.TOMATO
        });
        return false;
      }
      const payload = {
        code:value
      }
      resetOtpConfig(payload)
    }

    return {
        value,
        setValue,
        handleSubmit
    }
}