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
import Snackbar from "react-native-snackbar";
import { Colors } from "../../themes";
import { APP_PRIMARY_COLOR } from "../../themes/Colors";
import { Alert, LogBox } from 'react-native';

export default function useLoginContainer() {
  const { t } = useTranslation(["errors"]);
  const { setUserAuthentication } = useContext(
    loginContext
  ) as LoginContext;

  const { mutate: loginUser } = useMutation(login, {
    onSuccess: (data: LoginResponse) => {
      Snackbar.show({
        text: "Login Successfull!",
        duration: Snackbar.LENGTH_SHORT,
        textColor: Colors.Colors.WHITE,
        backgroundColor: APP_PRIMARY_COLOR
      });
      setTimeout(() => {
        setUserAuthentication(data);
      }, 1000);
    },
    onError: (data: LoginResponse) => {
      LogBox.ignoreAllLogs();
      Snackbar.show({
        text: "Please check your login credentials!",
        duration: Snackbar.LENGTH_SHORT,
        textColor: Colors.Colors.WHITE,
        backgroundColor: Colors.Colors.TOMATO
      });
    }
  
  });

  const handleOnSignUp = useCallback(() => {
    navigate(NavigationRoutes.AUTH_STACK.SIGN_UP);
  }, [])

  const { control, handleSubmit } = useForm<LoginFormType>({
    mode: "all",
    defaultValues: {
      Email: "rebecca@yopmail.com",
      Password: "click123",
    },
    resolver: yupResolver(
      yup.object({
        Email: yup.string().required(t("login__email_message")),
        Password: yup
          .string()
          .required(t("login_password_required"))
      })
    ),
  });

  const handleSubmitForm = (data: LoginFormType) => {
    const payload = {
      emailOrUserName: data.Email,
      password: data.Password,
    };
    loginUser(payload);
  };

  return {
    control,
    handleOnSignUp,
    handleSubmit: handleSubmit(handleSubmitForm),
  };
}
