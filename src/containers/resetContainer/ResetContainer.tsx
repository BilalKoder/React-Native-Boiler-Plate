import * as yup from 'yup';
import { ResetFormType } from "./types"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { yupResolver } from "@hookform/resolvers/yup"
import { navigate } from '../../services/navigationService';
import NavigationRoutes from '../../navigators/NavigationRoutes';
import { useMutation } from '@tanstack/react-query';
import Snackbar from 'react-native-snackbar';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Alert, LogBox } from 'react-native';
import { emailConfirmation, resetPassword } from '../../APIServices/Auth';
import { Colors } from '../../themes/Colors';
import { APP_PRIMARY_COLOR } from "../../themes/Colors";

export default function useResetContainer() {
  const { t } = useTranslation(["errors"])

  const { mutate: resetConfig } = useMutation(resetPassword, {
    onSuccess: (data) => {
      Snackbar.show({
        text: data,
        duration: Snackbar.LENGTH_SHORT,
        textColor: Colors.WHITE,
        backgroundColor: APP_PRIMARY_COLOR
      });
    setTimeout(() => {
      navigate(NavigationRoutes.AUTH_STACK.LOGIN);
    }, 2000);
    },
    onError: (data:string) => {
      LogBox.ignoreLogs([
       data as string
      ]);
      Snackbar.show({
        text: data,
        duration: Snackbar.LENGTH_SHORT,
        textColor: Colors.WHITE,
        backgroundColor: Colors.TOMATO
      });
    }
  
  });

    const { control, handleSubmit } = useForm<ResetFormType>({
      mode: "all",
      defaultValues: {
        NewPassword: "",
        ConfirmNewPassword: "",
      },
      resolver: yupResolver(
        yup.object({
            NewPassword: yup
            .string()
            .required(t("reset_password_message"))
            .min(6, t("login_password_min"))
            .max(255, t("login_password_max")),
            ConfirmNewPassword: yup.string()
            .required('Confirm Password is required')
            .oneOf([yup.ref('NewPassword')], 'Passwords does not match'),
        })
      ),
    });

    const handleResetForm = (data: ResetFormType) => {
        const payload = {
          password :data.NewPassword,
          code :749240
        }
        resetConfig(payload)
      }

    return {
        control,
        handleSubmit: handleSubmit(handleResetForm)
    }
}