import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import { getItem, setItem } from '../services/storageService'

import en from "./en";

const LANGUAGES = {
  en,
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
  type: "languageDetector",
  detect: () => {
    const language = getItem("user-language");
    if (!Boolean(language)) {
      const getUserDeviceLanguage =
          RNLocalize.findBestAvailableLanguage(LANG_CODES);
        return getUserDeviceLanguage.languageCode || "en";
    }
    return language; 
  },
  init: () => {},
  cacheUserLanguage: (language) => {
    setItem("user-language", language);
  },
};

i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: LANGUAGES,
    compatibilityJSON: 'v3',
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
