import * as yup from 'yup';
import { SignUpFormType } from "./types"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { yupResolver } from "@hookform/resolvers/yup"


export default function useSignupContainer() {
    const { t } = useTranslation(["errors"])

    const { control, handleSubmit } = useForm<SignUpFormType>({
      mode: "all",
      defaultValues: {
        Email: "",
        Password: "",
        ConfirmPassword: "",
      },
      resolver: yupResolver(
        yup.object({
          Email: yup.string().email().required(t("login__email_message")),
          Passwrod: yup
            .string()
            .required(t("login_password_required"))
            .min(6, t("login_password_min"))
            .max(255, t("login_password_max")),
          ConfirmPassword: yup.string().oneOf([yup.ref("Passwrod"), null], t("signup_confirm_password")),
        })
      ),
    });

    const handleSignUpSubmit = (data: SignUpFormType) => {
        console.log({ data });
    }

    return {
        control,
        handleSubmit: handleSubmit(handleSignUpSubmit)
    }
}