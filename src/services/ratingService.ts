import Rate, { AndroidMarket, IConfig } from 'react-native-rate';

export default function HandleOpenRate(props: IConfig) {
    const options: IConfig = {
      AppleAppID: "",
      preferInApp: true,
      GooglePackageName: "",
      openAppStoreIfInAppFails: true,
      preferredAndroidMarket: AndroidMarket.Google,
      ...props,
    };
    return new Promise((resolve, reject) => {
        Rate.rate(
            options,
            (success, errorMessage) => {
                if (errorMessage) {
                    reject(errorMessage)
                }
                else {
                    resolve(success);
                }
            }
        )
    })
}