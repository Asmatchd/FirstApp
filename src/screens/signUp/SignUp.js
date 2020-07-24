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
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AsyncStorage from '@react-native-community/async-storage';

export class SignUp extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  componentDidMount = () => {
    this.retrieveData();
  };

  SignUp = () => {
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.phone === '' ||
      this.state.password === ''
    ) {
      Alert.alert('React class', 'All fields are required.', [
        {
          text: 'Cancel',
          onPress: () => console.warn('Cancel Pressed'),
        },

        {
          text: 'OK',
          onPress: () => console.warn('OK Pressed'),
        },
      ]);
    } else {
      const values = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
      };
      AsyncStorage.setItem('userData', JSON.stringify(values), () => {
        console.warn('ok');
      });
    }
  };

  retrieveData = () => {
    AsyncStorage.getItem('userData', (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        // We have data!!
        // console.warn(userData);
        this.setState({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
        });
      } else {
        console.warn('No data found');
      }
    });
  };

  removeData = () => {
    AsyncStorage.removeItem('userData', () => {
      console.warn('Data removed');
    });
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            // height: '100%',
            // width: '100%',
            flex: 1,
            backgroundColor: '#0005',
          }}>
          <SafeAreaView />
          {/* TOp View */}
          <View
            style={{
              height: h('10%'),
              // height: '10%',
              width: '100%',
              // backgroundColor: '#FAF',
              flexDirection: 'row',
              // justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '20%',
                //   backgroundColor: '#aa0',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('4.5%'),
                }}>{`<`}</Text>
            </TouchableOpacity>

            <View
              style={{
                width: '60%',
              }}
            />

            <TouchableOpacity
              style={{
                height: '100%',
                width: '20%',
                //   backgroundColor: '#aa0',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('2.5%'),
                }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>

          {/* Center View */}
          <View
            style={{
              height: h('75%'),
              width: '100%',
              // backgroundColor: '#faa',
            }}>
            {/* Image container */}
            <View
              style={{
                height: '20%',
                width: '100%',
                //   backgroundColor: '#aa0',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: '80%',
                  width: '80%',
                  resizeMode: 'contain',
                }}
                source={require('../../assets/logo.png')}
              />
            </View>

            {/* Text */}
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                  color: '#fff',
                }}>
                Create an account
              </Text>
            </View>

            {/* Inputs container */}
            <View
              style={{
                height: '60%',
                // backgroundColor: '#a234',
                alignItems: 'center',
                paddingTop: h('1%'),
              }}>
              <TextInput
                style={{
                  // backgroundColor: '#aa07',
                  height: h('7%'),
                  width: '80%',
                  color: 'white',
                  fontSize: h('2%'),
                  borderWidth: Platform.OS === 'ios' ? h('0.05%') : null,
                  borderRadius: h('1%'),
                  paddingLeft: h('1%'),
                }}
                placeholderTextColor={'#fff'}
                placeholder={'Full name'}
                underlineColorAndroid={'#0005'}
                onChangeText={(txt) => this.setState({name: txt})}
                value={this.state.name}
              />

              <TextInput
                style={{
                  // backgroundColor: '#aa07',
                  height: h('7%'),
                  width: '80%',
                  marginTop: h('1%'),
                  color: 'white',
                  fontSize: h('2%'),
                  borderWidth: Platform.OS === 'ios' ? h('0.05%') : null,
                  borderRadius: h('1%'),
                  paddingLeft: h('1%'),
                }}
                placeholderTextColor={'#fff'}
                placeholder={'Email'}
                underlineColorAndroid={'#0005'}
                onChangeText={(txt) => this.setState({email: txt})}
                keyboardType={'email-address'}
                value={this.state.email}
              />

              <TextInput
                style={{
                  // backgroundColor: '#aa07',
                  height: h('7%'),
                  width: '80%',
                  marginTop: h('1%'),
                  color: 'white',
                  fontSize: h('2%'),
                  borderWidth: Platform.OS === 'ios' ? h('0.05%') : null,
                  borderRadius: h('1%'),
                  paddingLeft: h('1%'),
                }}
                placeholderTextColor={'#fff'}
                placeholder={'Phone'}
                underlineColorAndroid={'#0005'}
                onChangeText={(txt) => this.setState({phone: txt})}
                keyboardType={'phone-pad'}
                value={this.state.phone}
              />

              <TextInput
                style={{
                  // backgroundColor: '#aa07',
                  height: h('7%'),
                  width: '80%',
                  marginTop: h('1%'),
                  color: 'white',
                  fontSize: h('2%'),
                  borderWidth: Platform.OS === 'ios' ? h('0.05%') : null,
                  borderRadius: h('1%'),
                  paddingLeft: h('1%'),
                }}
                placeholderTextColor={'#fff'}
                placeholder={'Password'}
                secureTextEntry
                underlineColorAndroid={'#0005'}
                onChangeText={(txt) => this.setState({password: txt})}
                value={this.state.password}
              />

              <TouchableOpacity
                onPress={() => {
                  this.SignUp();
                }}
                style={{
                  height: h('6%'),
                  width: '60%',
                  marginTop: h('1%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: h('10%'),
                  backgroundColor: Platform.OS === 'ios' ? '#fff7' : 'white',
                }}>
                <Text
                  style={{
                    fontSize: h('2.5%'),
                  }}>
                  SignUp
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  // this.show();
                  this.removeData();
                }}
                style={{
                  height: h('6%'),
                  width: '60%',
                  marginTop: h('1%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: h('10%'),
                  backgroundColor: Platform.OS === 'ios' ? '#fff7' : 'white',
                }}>
                <Text
                  style={{
                    fontSize: h('2.5%'),
                  }}>
                  Remove data
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom View */}
          <View
            style={{
              height: h('10%'),
              width: '100%',
              // backgroundColor: '#aaf',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: h('2%'),
              }}>
              Already have an account?
            </Text>
            <Text
              style={{
                color: 'red',
                fontSize: h('2.5%'),
                marginLeft: h('1%'),
              }}>
              SignIn
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
