import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const LoadingScreen = () => {
  return (
    <LinearGradient
      colors={['#0286FF', '#14F077']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
    >
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff"/>
        <Text style={styles.loadingText}>Loading EcoWay...</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingContainer: {
      alignItems: 'center',
    },
    loadingText: {
      color: '#ffffff',
      fontSize: 18,
      marginTop: 10,
      fontFamily: 'Poppins-Regular',
    },
  }
)

export default LoadingScreen;