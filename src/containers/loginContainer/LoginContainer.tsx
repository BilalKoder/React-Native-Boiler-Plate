import { useCallback, useContext } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { login } from "../../APIServices/Auth";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { user_login_type } from "../../constants/user";
import loginContext from "../../contexts/loginContext";
import versionService from "../../services/versionService";
import { LoginContext } from "../../contexts/loginContext/types";
import { LoginFormType, LoginPayload, LoginResponse } from "./types";
import { navigate } from "../../services/navigationService";
import NavigationRoutes from "../../navigators/NavigationRoutes";

export default function useLoginContainer() {
  const { t } = useTranslation(["errors"]);
  const { setUserAuthentication } = useContext(
    loginContext
  ) as LoginContext;

  const { mutate: loginUser } = useMutation(login, {
    onSuccess: (data: LoginResponse) => {
      setUserAuthentication(data);
    }
  });

  const handleOnSignUp = useCallback(() => {
    navigate(NavigationRoutes.AUTH_STACK.SIGN_UP);
  }, [])

  const { control, handleSubmit } = useForm<LoginFormType>({
    mode: "all",
    defaultValues: {
      Email: "",
      Password: "",
    },
    resolver: yupResolver(
      yup.object({
        Email: yup.string().email().required(t("login__email_message")),
        Password: yup
          .string()
          .required(t("login_password_required"))
          .min(6, t("login_password_min"))
          .max(255, t("login_password_max")),
      })
    ),
  });

  const handleSubmitForm = (data: LoginFormType) => {
    const payload: LoginPayload = {
      username: data.Email,
      password: data.Password,
      type: user_login_type.EMAIL,
      version: versionService.getVersionNumber(),
    };
    loginUser(payload);
  };

  return {
    control,
    handleOnSignUp,
    handleSubmit: handleSubmit(handleSubmitForm),
  };
}
