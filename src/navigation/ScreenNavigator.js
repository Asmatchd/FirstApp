import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {Basics} from '../Basics';
import {InputField} from '../InputField';
import {SignUp} from '../screens/signUp';
import {Assignment2} from '../screens/assignments';
import {List} from '../screens/list';

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Assignment2"
          component={Assignment2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
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
