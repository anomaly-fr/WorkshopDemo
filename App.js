import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactsList from './src/screens/ContactsList';
import Profile from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  const Stack = createStackNavigator();
  return (<NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='ContactsList' component={ContactsList}/>
    <Stack.Screen name='ContactProfile' component={Profile}/>


    </Stack.Navigator>
  </NavigationContainer>
  
  );
}

