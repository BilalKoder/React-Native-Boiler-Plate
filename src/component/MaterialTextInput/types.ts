import {ReactElement, LegacyRef} from "react";
import { StyleProp, ImageProps, TextInput, TextStyle, ImageSourcePropType } from "react-native";
import { InputProps } from "../Input/types";

export interface IInputControl {
  label?: string;
  error?: string;
  value?: string;
  onBlur?: Function;
  onFocus?: Function;
  onPress?: Function;
  labelLines?: number;
  isPassword?: boolean;
  numberOfLines?: number;
  RightIcon?: ImageProps;
  labelStyle?: TextStyle;
  LeftIcon?: ImageSourcePropType;
  inputRef: LegacyRef<TextInput>;
  wrapperStyle?: StyleProp<Object>;
  containerStyle?: StyleProp<Object>;
  as?: (a: InputProps) => ReactElement;
}