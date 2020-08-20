import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {List} from '../screens/list';
import {Assignment2} from '../screens/assignments';
import {SignUp} from '../screens/signUp';

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
          tabBarLabel: 'List',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          tabBarLabel: 'SignUp',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="adduser" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Assignment2"
        component={Assignment2}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
