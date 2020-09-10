/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  Modal,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import {primaryColor, white, secondaryColor, silver} from '../Dimens';
import {AppInputField, AppBtn, Loading} from '../../components';
import {axiosInstance, baseUrl} from '../Api';

export class Splash extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.retrieveUser();
    }, 2000);
  };

  retrieveUser = () => {
    AsyncStorage.getItem('userData', (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        // We have data!!
        this.props.navigation.replace('DrawerNavigator');
      } else {
        this.props.navigation.replace('SignIn');
      }
    });
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: primaryColor,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: secondaryColor,
            fontSize: h('7%'),
            fontWeight: 'bold',
          }}>
          First App
        </Text>
      </View>
    );
  }
}
