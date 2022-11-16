import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './screens/HomeStack';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LogIn' component={LoginScreen} />
        <Stack.Screen name='HomeStack' component={HomeStack} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
