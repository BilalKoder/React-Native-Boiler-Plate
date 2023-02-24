import React from "react";
import {ActivityIndicator, View} from "react-native";
import { APP_PRIMARY_COLOR } from "../../themes/Colors";
// import {Colors} from "../../themes";

const Loader = ({style, spinerColor = APP_PRIMARY_COLOR, ...rest}) => (
  <View style={{...styles.container, ...style}}>
    <ActivityIndicator color={spinerColor} size="large" {...rest} />
  </View>
);

const styles = {
  container: {
    flex: 1,
    alignItem: "center",
    justifyContent: "center",
  },
};

export default Loader;
