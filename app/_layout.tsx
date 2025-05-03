import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router';

export default function RootLayout() {
    return (
        <View style={styles.container}>
            <Slot />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });