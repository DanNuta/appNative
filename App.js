import React from 'react';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { Review } from './screens/Review';


const Stack = createNativeStackNavigator();


export default function(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Reviw' component={Review}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


