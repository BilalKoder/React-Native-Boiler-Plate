import * as yup from 'yup';
import { ResetFormType } from "./types"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { yupResolver } from "@hookform/resolvers/yup"
import { navigate } from '../../services/navigationService';
import NavigationRoutes from '../../navigators/NavigationRoutes';


export default function useOtpContainer() {
    const { t } = useTranslation(["errors"])

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
            // ConfirmNewPassword: yup.string().oneOf([yup.ref("NewPassword")], t("reset_confirm_password_message")),
            ConfirmNewPassword: yup.string()
            .required('Password is mendatory')
            .oneOf([yup.ref('NewPassword')], 'Passwords does not match'),
        })
      ),
    });

    const handleResetForm = (data: ResetFormType) => {
        navigate(NavigationRoutes.AUTH_STACK.NOTIFICATION)
    }

    return {
        control,
        handleSubmit: handleSubmit(handleResetForm)
    }
}