import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { SpinnerLoaderProps } from './types';

export default function SpinnerLoader(props: SpinnerLoaderProps) {
    const { containerStyles, size = "small" } = props
    return (
      <View style={[styles.containerStyle, containerStyles]}>
        <ActivityIndicator size={size} />
      </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})