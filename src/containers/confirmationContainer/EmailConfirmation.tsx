import * as yup from 'yup';
import { EmailConfirmationType } from "./types"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { yupResolver } from "@hookform/resolvers/yup"
import { navigate } from '../../services/navigationService';
import NavigationRoutes from '../../navigators/NavigationRoutes';
import { ResetFormType } from '../resetContainer/types';
import Toast from 'react-native-simple-toast';
import { Alert, LogBox } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { EmailConfirmationResponse, LoginResponse } from '../loginContainer/types';
import { emailConfirmation } from '../../APIServices/Auth';
import Snackbar from 'react-native-snackbar';
import { Colors } from '../../themes';



export default function useEmailConfirmationContainer() {
    const { t } = useTranslation(["errors"])

    const { mutate: emailConf } = useMutation(emailConfirmation, {
      onSuccess: (data) => {
        Snackbar.show({
          text: data,
          duration: Snackbar.LENGTH_SHORT,
          textColor: Colors.Colors.WHITE,
          backgroundColor: Colors.APP_PRIMARY_COLOR
        });
      setTimeout(() => {
        navigate(NavigationRoutes.AUTH_STACK.OTP_VERIFICATION);
      }, 2000);
      },
      onError: (data:string) => {
        LogBox.ignoreLogs([
         data as string
        ]);
        Snackbar.show({
          text: data,
          duration: Snackbar.LENGTH_SHORT,
          textColor: Colors.Colors.WHITE,
          backgroundColor: Colors.Colors.TOMATO
        });
      }
    
    });

    const { control, handleSubmit } = useForm<EmailConfirmationType>({
      mode: "all",
      defaultValues: {
        Email: "",
      },
      resolver: yupResolver(
        yup.object({
            Email: yup.string().email().required(t("otp__email_message")),
        })
      ),
    });

    const handleResetForm = (data: EmailConfirmationType) => {
      console.log('data',data)
      // Toast.show('This is a long toast.', Toast.LONG);
      const payload = {
        email :data.Email
      }
      emailConf(payload)
    }

    return {
        control,
        handleSubmit: handleSubmit(handleResetForm)
    }
}