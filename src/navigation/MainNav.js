import {
    NavigationContainer,
  } from '@react-navigation/native';
  import {createStackNavigator} from '@react-navigation/stack';
  import React from 'react';
import { screenNames } from '.';
import {Login,Home} from '../screens'
  const Stack = createStackNavigator();
  export const MainNav=()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            options={{gestureEnabled: false}}
            name={screenNames.login.name}
            component={Login}
          />
           <Stack.Screen
            options={{gestureEnabled: false}}
            name={screenNames.home.name}
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }