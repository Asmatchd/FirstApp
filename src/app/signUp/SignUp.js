/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {Component, Fragment} from 'react';
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

import {primaryColor, white, secondaryColor, silver} from '../Dimens';
import {AppInputField, AppBtn, Loading} from '../../components';
import {axiosInstance, baseUrl} from '../Api';
var validator = require('email-validator');
import {Formik} from 'formik';
import * as yup from 'yup';

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    isLoading: false,
  };

  validate = () => {
    const {email, password, confirmPassword} = this.state;
    const check = validator.validate(email);

    if (check === true) {
      if (password.length > 7) {
        if (password === confirmPassword) {
          this.loading(true);
          const params = {
            email: email,
            password: password,
          };

          axiosInstance
            .post(baseUrl + 'users/signUp', params)
            .then((res) => {
              this.loading(false);
              const userData = res.data;
              if (userData.status === '200') {
                alert(userData.msg);
              } else if (userData.status === '404') {
                alert(userData.msg);
              }
            })
            .catch((error) => {
              this.loading(false);

              console.warn('Network error');
            });

          // this.props.navigation.replace('Dashboard');
        } else {
          alert('Both passwords must be same ');
        }
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
              <Text style={styles.topTxt}>Sign Up</Text>
              <Text style={styles.topBottomTxt}>Create an account</Text>
            </View>
            <View style={styles.userView}>
              <View style={styles.imgView}>
                <Image
                  source={require('../../assets/ic.png')}
                  style={styles.img}
                />
              </View>

              <Formik
                initialValues={{email: '', password: '', confirmPassword: ''}}
                onSubmit={(values) => console.warn(values)}
                validationSchema={yup.object().shape({
                  email: yup
                    .string()
                    .email('Please enter valid E-mail')
                    .required('Email is a requried  Field'),
                  password: yup
                    .string()
                    .min(8, 'Password must contain 8 characters')
                    .required('Password is a required Field'),
                  confirmPassword: yup
                    .string()
                    .oneOf(
                      [yup.ref('password'), null],
                      "Password doesn't match",
                    )
                    .required('Please enter you confirm password'),

                  // password_With_Regex: yup
                  // .string()
                  // .test(
                  //   'regex',
                  //   'Password must contain 8 Characters,Uppercase & Lowercase, Number & special Character',
                  //   val => {
                  //     let regExp = new RegExp(
                  //       '^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$',
                  //     );
                  //     console.log(regExp.test(val), regExp, val);
                  //     return regExp.test(val);
                  //   },
                  // )
                  // .required('Password is requried field'),
                })}>
                {({
                  values,
                  handleChange,
                  errors,
                  setFieldTouched,
                  touched,
                  isValid,
                  handleSubmit,
                }) => (
                  <Fragment>
                    <AppInputField
                      // value={values.email}
                      icName={'ios-mail'}
                      icType={'ionicon'}
                      placeholder={'Email'}
                      keyboardType={'email-address'}
                      // onChangeText={(email) => this.setState({email})}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                    />
                    <View
                      style={{
                        height: 20,
                      }}>
                      {touched.email && errors.email && (
                        <Text
                          style={{
                            color: 'red',
                            fontSize: 12,
                          }}>
                          {errors.email}
                        </Text>
                      )}
                    </View>

                    <AppInputField
                      icName={'md-key'}
                      icType={'ionicon'}
                      placeholder={'Password'}
                      secureTextEntry
                      // onChangeText={(password) => this.setState({password})}
                      onChangeText={handleChange('password')}
                      onBlur={() => setFieldTouched('password')}
                    />

                    <View
                      style={{
                        height: 20,
                      }}>
                      {touched.password && errors.password && (
                        <Text
                          style={{
                            color: 'red',
                            fontSize: 12,
                          }}>
                          {errors.password}
                        </Text>
                      )}
                    </View>

                    <AppInputField
                      icName={'md-key'}
                      icType={'ionicon'}
                      placeholder={'Confirm Password'}
                      secureTextEntry
                      // onChangeText={(confirmPassword) =>
                      //   this.setState({confirmPassword})
                      // }
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={() => setFieldTouched('confirmPassword')}
                    />

                    <View
                      style={{
                        height: 20,
                      }}>
                      {touched.confirmPassword && errors.confirmPassword && (
                        <Text
                          style={{
                            color: 'red',
                            fontSize: 12,
                          }}>
                          {errors.confirmPassword}
                        </Text>
                      )}
                    </View>

                    <AppBtn
                      // onPress={() => this.validate()}
                      onPress={handleSubmit}
                      txt={'Sign Up'}
                    />
                  </Fragment>
                )}
              </Formik>

              <View style={styles.bottomView}>
                <Text style={styles.alreadyTxt}>Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('SignIn')}
                  style={styles.signView}>
                  <Text style={styles.signTxt}>Sign In!</Text>
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
