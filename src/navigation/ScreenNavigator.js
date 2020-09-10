import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// import {Basics} from '../Basics';
// import {InputField} from '../InputField';
// import {TabNavigator} from './TabNavigator';
// import {Img} from './../screens/img';

import {SignUp} from '../app/signUp';
import {SignIn} from '../app/signIn';
import {Dashboard} from '../app/dashboard';
import {Settings} from '../app/settings';
import {DrawerNavigator} from './DrawerNavigator';
import {AllUsers, Details} from '../app/allUsers';
import {Splash} from '../app/splash';

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AllUsers"
          component={AllUsers}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        /> */}

        {/* <Stack.Screen
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
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
