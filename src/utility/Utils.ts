import {Linking, Platform} from "react-native";
import get from "lodash.get";
import debounce from "lodash.debounce";
class utility {
  isPlatformAndroid = () => Platform.OS === "android";
  isPlatformIOS = () => Platform.OS === "ios";

  async openURLCall(url: string) {
    return Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Cant handle url");
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  }

  getValue(...param: any[]) {
   
    
    return get(...param);
  }

  getAnyOne(data: any, param: any[]) {
    let message =  "something went wrong"
    param.map(v => {
      
      if(typeof get(data, v) === "string" ) message = get(data, v);
      
    })

    return message
  }

  debounce(...param: any[]) {
    return debounce(...param);
  }

  isEmpty(value: string | number | boolean | Array<any> | object): boolean {
    return (
      value === undefined ||
      value === null ||
      value === NaN ||
      value === false ||
      value === 0 ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  }

  createDynamicUrl(dynamicUrl: string, object: any) {
    for (const key in object) {
      dynamicUrl = dynamicUrl.replace(`{${key}}`, object[key]);
    }
    return dynamicUrl;
  }
}

export default new utility();
