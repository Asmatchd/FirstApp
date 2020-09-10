/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
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
var validator = require('email-validator');

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
  };

  validate = () => {
    const {email, password} = this.state;
    const check = validator.validate(email);

    if (check === true) {
      if (password.length > 7) {
        this.loading(true);
        const params = {
          email: email,
          password: password,
        };
        axiosInstance
          .post(baseUrl + 'users/signIn', params)
          .then((res) => {
            this.loading(false);
            const userData = res.data;
            if (userData.status === '200') {
              AsyncStorage.setItem(
                'userData',
                JSON.stringify(userData.data),
                () => {
                  this.props.navigation.replace('DrawerNavigator');
                },
              );
            } else if (userData.status === '404') {
              alert(userData.msg);
            }
          })
          .catch((error) => {
            this.loading(false);

            console.warn('Network error');
          });
      } else {
        alert('Password must contain 8 characters.');
      }
    } else {
      alert('Please enter a valid email');
    }
  };

  loading = (value) => {
    this.setState({isLoading: value});
  };

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 2}}>
        <Loading visible={this.state.isLoading} txt={'Loading'} />
        <View style={styles.container}>
          <SafeAreaView />

          <View style={styles.topBg} />

          <View style={styles.bottomBg} />

          <View style={styles.contentView}>
            <View style={styles.topView}>
              <Text style={styles.topTxt}>Sign In</Text>
              <Text style={styles.topBottomTxt}>Login to your account</Text>
            </View>
            <View style={styles.userView}>
              <View style={styles.imgView}>
                <Image
                  source={require('../../assets/ic.png')}
                  style={styles.img}
                />
              </View>

              <AppInputField
                icName={'ios-mail'}
                icType={'ionicon'}
                placeholder={'Email'}
                onChangeText={(email) => this.setState({email})}
              />

              <AppInputField
                icName={'md-key'}
                icType={'ionicon'}
                placeholder={'Password'}
                secureTextEntry
                onChangeText={(password) => this.setState({password})}
              />

              <AppBtn onPress={() => this.validate()} txt={'Sign In'} />

              <View style={styles.bottomView}>
                <Text style={styles.alreadyTxt}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('SignUp')}
                  style={styles.signView}>
                  <Text style={styles.signTxt}>Sign Up!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topBg: {
    height: h('35%'),
    width: '100%',
    backgroundColor: primaryColor,
  },
  bottomBg: {
    height: h('61.5%'),
    width: '100%',
    backgroundColor: silver,
  },
  contentView: {
    height: h('75%'),
    width: '80%',
    marginTop: -h('90%'),
  },
  topView: {
    height: h('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTxt: {
    color: white,
    fontSize: h('3%'),
  },
  topBottomTxt: {
    color: white,
    fontSize: h('1.8%'),
    marginTop: h('1%'),
  },
  userView: {
    height: h('60%'),
    width: '100%',
    backgroundColor: white,
    borderWidth: h('0.4%'),
    borderRadius: h('2%'),
    borderColor: 'rgba(0,0,0,0.1)',
  },
  imgView: {
    height: h('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: h('9%'),
    width: h('9%'),
    resizeMode: 'contain',
  },
  bottomView: {
    height: h('4%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('5%'),
  },
  alreadyTxt: {
    fontSize: h('2%'),
    color: '#0008',
  },
  signView: {
    padding: h('1%'),
  },
  signTxt: {
    fontSize: h('2%'),
    color: primaryColor,
    fontWeight: 'bold',
  },
});
