// Main.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderWithMenu from './Functions/HeaderWithMenu';
import SongLib from './Functions/songLib';
import MentalAnalysis from './Functions/mentalAnalysis';
import Councelling from './Functions/Councelling';

const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderWithMenu />
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Songs" component={SongLib} />
        <Stack.Screen name="Analysis" component={MentalAnalysis} />
        <Stack.Screen name="Improve" component={Councelling} />
      </Stack.Navigator>
      <Footer />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>You are in Luna</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>@Team Luna</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', 
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
});

export default MainScreen;






