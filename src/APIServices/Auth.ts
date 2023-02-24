import apiService from "../services/apiService";
import { SERVICE_CONFIG_URLS } from "../constants/api_urls";
import { EmailResetPayload, LoginPayload, OtpConfirmPayload, ResetPasswordPayload } from "../containers/loginContainer/types";
import { getUserType } from "../containers/startupContainer/types";
import versionService from "../services/versionService";

export const login = async (payload: LoginPayload) => {
  const { ok, response, data } = await apiService.post(
    SERVICE_CONFIG_URLS.AUTH.LOGIN,
    payload
  );
  if (ok) {
    return data;
  }
  throw response.message;
};

export const emailConfirmation = async (payload: EmailResetPayload) => {
  const  responseTemp =  await apiService.post(
    SERVICE_CONFIG_URLS.AUTH.FORGET,
    payload
  );
  const { ok, response, data } = responseTemp;

  if (ok) {
    return response.message;
  }
  throw response?.message;
};

export const otpVerification = async (payload: OtpConfirmPayload) => {
  const  responseTemp =  await apiService.post(
    SERVICE_CONFIG_URLS.AUTH.VERIFY,
    payload
  );
  const { ok, response, data } = responseTemp;
 
  if (ok) {
    return response.message;
  }
  throw response?.message;
};


export const resetPassword = async (payload: ResetPasswordPayload) => {
  console.log(payload)
  const  responseTemp =  await apiService.post(
    SERVICE_CONFIG_URLS.AUTH.RESET,
    payload
  );
  const { ok, response, data } = responseTemp;

  if (ok) {
    return response.message;
  }
  throw response?.message;
};

export const getUser = async () => {
  const payload: getUserType = {
    version: versionService.getVersionNumber(),
  };
  const { ok, response, data } = await apiService.post(
    SERVICE_CONFIG_URLS.AUTH.ME,
    payload
  );
  if (ok) {
    return data;
  }
  throw response.message;
};
