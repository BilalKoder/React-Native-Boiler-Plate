import React, {useEffect, useState, useMemo} from "react";
import {
  Text,
  View,
  Animated,
  StyleSheet,
} from "react-native";

import Input from "../Input";
import { IInputControl } from "./types";
import {Colors, Fonts} from "../../themes";
import Metrics from "../../utility/Metrics";
import ButtonView from "../ButtonView/index";

const MaterialTextInput = ({
  label,
  error,
  value,
  onBlur,
  onFocus,
  onPress,
  LeftIcon,
  RightIcon,
  isPassword,
  labelStyle,
  labelLines,
  wrapperStyle,
  numberOfLines,
  containerStyle,
  as: Component = Input,
  ...rest
}: IInputControl) => {
  const _animationOnFocuse = React.useRef(
    new Animated.Value(value ? 1 : 0)
  ).current;
  //   const springAnimation = new Animated.Value(0);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(setValue, [value]);

  function setValue() {
    Boolean(value) && animate(1);
  }

  function handleFocus() {
    animate(1);
    onFocus && onFocus();
  }

  function handleBlur() {
    animate(value ? 1 : 0);
    onBlur && onBlur();
  }

  function animate(toValue: number) {
    Animated.timing(_animationOnFocuse, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    // Animated.spring(springAnimation, {
    //   toValue: toValue,
    //   friction: 2.5 ,
    //   tension: 5,
    //   useNativeDriver: false,
    // }).start();
  }

  function handleIconPress() {
    isPassword ? setShowPassword(!showPassword) : onPress && onPress();
  }

  const animatedStyles = {
    containerStyle: {
      borderColor: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.Colors.STEEL, Colors.APP_PRIMARY_COLOR],
      }),
    },
    labelStyle: {
      left: Boolean(LeftIcon) ? Metrics.scale(30) : 0,
      top: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [Metrics.verticalScale(16), Metrics.verticalScale(-16)],
      }),
      fontSize: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: !!labelStyle
          ? [Number(labelStyle.fontSize), Number(labelStyle.fontSize) - 2]
          : [16, 14],
      }),
      color: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.Colors.STEEL, Colors.APP_PRIMARY_COLOR],
      }),
    },
    iconStyle: {
      tintColor: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.Colors.STEEL, Colors.APP_PRIMARY_COLOR],
      }),
    },
  };

  const icon = useMemo(
    () => ({
      true: require("../../assets/logo/PasswordShow.png"),
      false: require("../../assets/logo/PasswordHide.png"),
    }),
    []
  );

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          animatedStyles.containerStyle,
        ]}
      >
        {Boolean(LeftIcon) && (
          <View style={styles.iconWrapper}>
            <Animated.Image
              source={LeftIcon}
              style={[styles.iconLeft, animatedStyles.iconStyle]}
            />
          </View>
        )}

        {!!label && (
          <Animated.Text
            style={[styles.labelStyle, labelStyle, animatedStyles.labelStyle]}
            numberOfLines={numberOfLines || 1}
          >
            {label}
          </Animated.Text>
        )}

        <Component
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          {...(isPassword && {secureTextEntry: !showPassword})}
          {...rest}
        />

        {(isPassword || Boolean(RightIcon)) && (
          <ButtonView
            onPress={handleIconPress}
            disabled={!isPassword || Boolean(onPress)}
            style={styles.iconWrapper}
            hitSlop={{top: 10, bottom: 10, left: 5, right: 5}}
          >
            <Animated.Image
              source={isPassword ? icon[String(showPassword) as keyof typeof icon] : RightIcon}
              resizeMode="contain"
              style={[styles.iconRight, animatedStyles.iconStyle]}
            />
          </ButtonView>
        )}
      </Animated.View>
      {!!error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

export default MaterialTextInput;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: Metrics.verticalScale(68),
    marginBottom: Metrics.verticalScale(10),
    marginTop: Metrics.verticalScale(10),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Metrics.verticalScale(5),
  },
  labelStyle: {
    ...StyleSheet.absoluteFillObject,
    ...Fonts.Medium(16, Colors.Colors.STEEL),
  },
  iconWrapper: {
    paddingHorizontal: Metrics.smallMargin,
  },
  // iconLeft: {width: Metrics.scale(25), height: Metrics.scale(20)},
  iconRight: {
    width: Metrics.scale(20),
    height: Metrics.scale(20),
  },
  errorMessage: {
    ...Fonts.Medium(12, Colors.Colors.TOMATO),
    marginTop: Metrics.scale(2),
    paddingVertical:Metrics.verticalScale(5),
  },
});
