import React, { useState, useEffect } from "react";
import { Image, StyleSheet, ActivityIndicator, View } from "react-native";

import { Colors } from "../../themes/Colors";
import { ImageViewerProps, ImageViewSource } from "./types";

export default function ImageViewer(props: ImageViewerProps) {
  const [source, setSource] = useState<number | ImageViewSource | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  const { isLocal = false, url, resizeMode = "cover", containerStyles = null } = props;

  useEffect(() => {
    if (isLocal) {
      setSource(url as number);
    } else {
      if (url) {
        setSource({ uri: url as string });
      } else if (Boolean(source)) {
        setSource(undefined);
      }
    }
  }, [url]);

  const handleOnImageLoadStart = () => {
    setLoading(true);
  };

  const handleOnImageLoadComplete = () => {
    setLoading(false);
  };

  return (
    <View style={[styles.container, containerStyles]}>
      {loading ? (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size='small' />
        </View>
      ) : (
        <Image
          source={source}
          resizeMode={resizeMode}
          onLoadStart={handleOnImageLoadStart}
          onLoadEnd={handleOnImageLoadComplete}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.CHARCOAL_GREY,
  },
});
