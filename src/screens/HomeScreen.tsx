import * as React from 'react';
import { Text, StyleSheet, SafeAreaView } from "react-native"

export default function HomeScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Add Your home logic</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})