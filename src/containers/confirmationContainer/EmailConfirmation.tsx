import * as yup from 'yup';
import { EmailConfirmationType } from "./types"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { yupResolver } from "@hookform/resolvers/yup"
import { navigate } from '../../services/navigationService';
import NavigationRoutes from '../../navigators/NavigationRoutes';
import { ResetFormType } from '../resetContainer/types';
import Toast from 'react-native-simple-toast';
import { Alert } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { EmailConfirmationResponse, LoginResponse } from '../loginContainer/types';
import { emailConfirmation } from '../../APIServices/Auth';



export default function useEmailConfirmationContainer() {
    const { t } = useTranslation(["errors"])

    const { mutate: emailConf } = useMutation(emailConfirmation, {
      onSuccess: (data) => {
        console.log('meesssssssssssssssssss',data)
        // Toast.show(`${data}`, Toast.LONG);
      },
      onError: (data) => {
        console.log('onError',data)
      }
    
    });

    const { control, handleSubmit } = useForm<EmailConfirmationType>({
      mode: "all",
      defaultValues: {
        Email: "",
      },
      resolver: yupResolver(
        yup.object({
            Email: yup.string().email().required(t("login__email_message")),
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