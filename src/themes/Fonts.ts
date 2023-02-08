import {APP_PRIMARY_TEXT} from "./Colors";
import Metrics from "../utility/Metrics";
import { TextStyle } from "react-native";
export default class Fonts {
  static FontFamily = {
    default: "Urbanist",
  };

  static Type = {
    Bold: "Bold",
    ExtraLight: "ExtraLight",
    Light: "Light",
    Medium: "Medium",
    Regular: "Regular",
    SemiBold: "SemiBold",
    Thin: "Thin",
  };

  static Size = {
    xxxSmall: 11,
    xxSmall: 13,
    xSmall: 14,
    small: 15,
    normal: 16,
    medium: 19,
    large: 21,
    xLarge: 23,
    xxLarge: 28,
    xxxLarge: 31,
    huge: 34,
    xhuge: 37,
    xxhuge: 40,
    xxxhuge: 43,
  };

  static font = (
    type: string = Fonts.Type.Regular,
    size: number = Fonts.Size.normal,
    color: string = APP_PRIMARY_TEXT
  ): TextStyle => {
    return {
      fontFamily: Fonts.FontFamily.default + "-" + type,
      fontSize: Metrics.generatedFontSize(size),
      color,
    };
  };

  // Fonts;
  static Regular = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT
  ) => {
    return Fonts.font(Fonts.Type.Regular, size, color);
  };
  static Bold = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT
  ) => {
    return Fonts.font(Fonts.Type.Bold, size, color);
  };
  static SemiBold = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT
  ) => {
    return Fonts.font(Fonts.Type.SemiBold, size, color);
  };
  static Light = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT
  ) => {
    return Fonts.font(Fonts.Type.Light, size, color);
  };
  static ExtraLight = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT
  ) => {
    return Fonts.font(Fonts.Type.ExtraLight, size, color);
  };
  static Medium = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT
  ) => {
    return Fonts.font(Fonts.Type.Medium, size, color);
  };
  static Thin = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT
  ) => {
    return Fonts.font(Fonts.Type.Thin, size, color);
  };
}
