
// import {
//   isNetworkReachable,
//   isConnected,
// } from "react-native-reachability-popup";
// import {hideSpinner, showSpinner} from "react-native-globalspinner";
// import { hideSpinner, showSpinner } from "../components/Loader/Spinner";
import { _hideSpinner, _showSpinner } from "../component/Loader/Spinner";
import ApiService from "../services/apiService";
// import { toastService } from "../services/ToastService";

type TRequestProps = {
  url: string; //Service url
  method: string; //Web Service type 'post,get,put,delete....'
  params?: object;
  data?: any;
  config?: object; //Paramter for request
  showLoader?: boolean; //Show spinner
  showToast?: boolean; //Show Toast
};

// TODO: Handle unhandel prmomise rejection on failure
export async function request({
  url, //Service url
  method, //Web Service type 'post,get,put,delete....'
  params, //Paramter for request
  config, //APIrequest Configuration
  showLoader = true, //Show spinner
}: TRequestProps) {
  showLoader && _showSpinner();
  const response = (await ApiService[method]?.(url, params, config)) || {};

  setTimeout(_hideSpinner, 100);

  if (response.ok) {
    console.log(response)

    return response;
  } else {
    // showToast && toastService.fail(response?.data?.error);
    throw new Error(response?.response);
  }
}