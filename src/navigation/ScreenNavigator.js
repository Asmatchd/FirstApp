import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {Basics} from '../Basics';
import {InputField} from '../InputField';

import {TabNavigator} from './TabNavigator';
import {Img} from './../screens/img';

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Img"
          component={Img}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="InputField"
          component={InputField}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
