import React from "react";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import {Colors} from "../../themes";
import Metrics from "../../utility/Metrics";


type SmallLoaderPropType = {
  useFullWidth?: boolean;
};

function SmallLoader(props: SmallLoaderPropType) {
  const {useFullWidth = true} = props;
  return (
    <View style={[styles.container, useFullWidth && styles.fullWidthWrapper]}>
      <ActivityIndicator size="large" color={Colors.APP_PRIMARY_COLOR} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: Metrics.doubleBaseMargin,
  },
  fullWidthWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SmallLoader;
