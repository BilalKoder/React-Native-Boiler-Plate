import * as yup from 'yup';
import { EmailConfirmationType } from "./types"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { yupResolver } from "@hookform/resolvers/yup"
import { navigate } from '../../services/navigationService';
import NavigationRoutes from '../../navigators/NavigationRoutes';
import { ResetFormType } from '../resetContainer/types';


export default function useEmailConfirmationContainer() {
    const { t } = useTranslation(["errors"])

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

    const handleResetForm = (data: ResetFormType) => {
        navigate(NavigationRoutes.AUTH_STACK.OTP_VERIFICATION)
    }

    return {
        control,
        handleSubmit: handleSubmit(handleResetForm)
    }
}