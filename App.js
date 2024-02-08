// Root of the application
// App.js

// Import necessary libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screen components
import WelcomeScreen from './assets/components/screens/welcome/Welcome';

import MainScreen from './assets/components/screens/main/Main';

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {

  // Return the app structure
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






