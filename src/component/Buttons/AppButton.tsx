import React from "react";
import {Image, ImageSourcePropType, StyleSheet, Text} from "react-native";
import {Colors, APP_PRIMARY_COLOR} from "../../themes/Colors";
import Metrics from "../../utility/Metrics";
import Fonts from "./../../themes/Fonts";
import ButtonView from "../ButtonView";

interface IAppButton {
  title: string;
  onPress?: Function;
  onLongPress?: Function;
  style?: {};
  textStyle?: {};
  imageStyle?: {};
  imageSource?: ImageSourcePropType;
  iconAfterText?: boolean;
}

const AppButton = ({
  title = "Click",
  style = {},
  textStyle = {},
  imageStyle = {},
  imageSource,
  iconAfterText = false,
  ...rest
}: IAppButton) => {
  return (
    <ButtonView style={[styles.button, style]} {...rest}>
      {imageSource && !iconAfterText && (
        <Image
          style={[styles.image, imageStyle]}
          source={imageSource}
          resizeMode="contain"
        />
      )}
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {imageSource && iconAfterText && (
        <Image
          style={[styles.imageRight, imageStyle]}
          source={imageSource}
          resizeMode="contain"
        />
      )}
    </ButtonView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: Metrics.scale(50),
    backgroundColor: APP_PRIMARY_COLOR,
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: Metrics.verticalScale(6),
    marginVertical: Metrics.verticalScale(5),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: Metrics.scale(10),
  },
  title: Fonts.SemiBold(16, Colors.WHITE),
  image: {
    width: Metrics.scale(22),
    height: Metrics.scale(22),
    marginRight: Metrics.scale(5),
    marginBottom: Metrics.verticalScale(3),
  },
  imageRight: {
    width: Metrics.scale(22),
    height: Metrics.scale(22),
    marginLeft: Metrics.scale(5),
    marginBottom: Metrics.verticalScale(3),
  },
});

export default AppButton;
