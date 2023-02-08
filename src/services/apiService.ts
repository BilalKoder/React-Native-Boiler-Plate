import { create, ApisauceConfig, ApiResponse } from "apisauce";
import Utils from "../utility/Utils";
import STORAGE_KEY from "../constants/storage";
import { getItem } from "./storageService";
// import { toastService } from "./ToastService";
import { API_CONFIG, CONTENT_TYPE, HTTP_STATUS } from "../constants/api";

export const BASE_URL = API_CONFIG.BASE_URL_DEV;

const apiSauceInstance = create({
  baseURL: BASE_URL,
});

async function get(url: string, queryParams?: {}, config?: {}) {
  const response = await apiSauceInstance.get(url, queryParams, config);
  return handleResponse(response);
}

async function post(url: string, data: object, config?: ApisauceConfig) {
  const response = await apiSauceInstance.post(url, data, config);
  return handleResponse(response);
}

async function put(url: string, data: object, config?: ApisauceConfig) {
  const response = await apiSauceInstance.put(url, data, config);
  return handleResponse(response);
}

async function patch(url: string, data: object, config?: ApisauceConfig) {
  const response = await apiSauceInstance.patch(url, data, config);
  return handleResponse(response);
}

async function deleteReq(url: string, queryParams: object, config?: ApisauceConfig) {
  const response = await apiSauceInstance.delete(url, queryParams, config);
  return handleResponse(response);
}

function handleResponse(response: ApiResponse<any>) {
  const mutatedResponse = {
    ok: response.ok,
    status: response.status,
    response: {
      code: Utils.getValue(response.data, 'response.code', HTTP_STATUS.SERVER_ERROR),
      //data: response?.data?.data,
      message: Utils.getValue(
        response.data,
        'response.message',
        'Something went wrong',
      ),
      errorCode: Utils.getValue(response.data, 'response.errorCode', HTTP_STATUS.BAD_REQUEST),
    },
  };
  const data = Utils.getValue(response.data, 'data', response.data);

  if (response.status === HTTP_STATUS.UNAUTHORIZED) {
    // snackbarService.fail('You are not authorized to perform this action');
    return {
      ...mutatedResponse,
      data: !Utils.isEmpty(data) ? data : null,
    };
  }
  if (response.status === HTTP_STATUS.SERVER_ERROR) {
    // snackbarService.fail('Something went wrong');
    return {
      ...mutatedResponse,
      data: !Utils.isEmpty(data) ? data : null,
    };
  }
  if (response.ok) {
    return {...mutatedResponse, data};
  } else {
    return {
      ...mutatedResponse,
      data: !Utils.isEmpty(data) ? data : null,
    };
  }
}

apiSauceInstance.addRequestTransform((request) => {
  const token = getItem(STORAGE_KEY.TOKEN);
  request.headers["AUTHORIZATION"] = `${token}`;
  request.headers["Content-Type"] = CONTENT_TYPE.JSON;
});

export default {
  get,
  post,
  patch,
  put,
  delete: deleteReq,
};
