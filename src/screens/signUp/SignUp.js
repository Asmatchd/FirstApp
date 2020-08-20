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
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import {Loading, AppInputField, AppBtn, NavHeader} from './../../components';

export class SignUp extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    modalVisible: false,
    loadingVisible: false,

    inEmail: '',
    inPassword: '',
  };

  // componentDidMount = () => {
  //   this.retrieveData();
  // };

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
            backgroundColor: '#a003',
          }}>
          <SafeAreaView />

          <Loading visible={this.state.loadingVisible} txt={'Loading'} />

          <NavHeader
            showLeftIc={true}
            icLeft={'arrow-back'}
            title={'Sign Up'}
            showRightIc={true}
            txtRight={'logIn'}
          />

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
                height: '80%',
                // backgroundColor: '#a234',
                alignItems: 'center',
                paddingTop: h('1%'),
              }}>
              <AppInputField
                placeholderTextColor={'#fff'}
                placeholder={'Full name'}
                underlineColorAndroid={'#0005'}
                onChangeText={(txt) => this.setState({name: txt})}
                value={this.state.name}
              />

              <AppInputField
                placeholderTextColor={'#fff'}
                placeholder={'Email'}
                underlineColorAndroid={'#0005'}
                onChangeText={(txt) => this.setState({email: txt})}
                keyboardType={'email-address'}
                value={this.state.email}
              />

              <AppInputField
                placeholderTextColor={'#fff'}
                placeholder={'Phone'}
                underlineColorAndroid={'#0005'}
                onChangeText={(txt) => this.setState({phone: txt})}
                keyboardType={'phone-pad'}
                value={this.state.phone}
              />

              <AppInputField
                placeholderTextColor={'#fff'}
                placeholder={'Password'}
                secureTextEntry
                underlineColorAndroid={'#0005'}
                onChangeText={(txt) => this.setState({password: txt})}
                value={this.state.password}
              />

              <AppBtn
                txt={'SignUp'}
                onPress={() => {
                  this.SignUp();
                }}
              />
              <AppBtn
                onPress={() => {
                  // this.show();
                  this.removeData();
                }}
                txt={'Remove data'}
              />

              <AppBtn
                onPress={() => {
                  this.setState({loadingVisible: true});
                }}
                txt={'Show loading'}
              />
            </View>
          </View>

          {/* Bottom View */}
          <TouchableOpacity
            onPress={() => {
              this.setState({modalVisible: true});
            }}
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
          </TouchableOpacity>

          <Modal
            animationType="slide"
            // transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setState({modalVisible: false});
            }}>
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
                      Sing in to your account
                    </Text>
                  </View>

                  {/* Inputs container */}
                  <View
                    style={{
                      height: '60%',
                      // backgroundColor: '#a234',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingTop: h('1%'),
                    }}>
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
                      placeholder={'Enter Email'}
                      underlineColorAndroid={'#0005'}
                      onChangeText={(inEmail) => this.setState({inEmail})}
                      keyboardType={'email-address'}
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
                      placeholder={'Enter Password'}
                      secureTextEntry
                      underlineColorAndroid={'#0005'}
                      onChangeText={(inPassword) => this.setState({inPassword})}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        console.warn(this.state.inEmail);
                        console.warn(this.state.inPassword);
                      }}
                      style={{
                        height: h('6%'),
                        width: '60%',
                        marginTop: h('1%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: h('10%'),
                        backgroundColor:
                          Platform.OS === 'ios' ? '#fff7' : 'white',
                      }}>
                      <Text
                        style={{
                          fontSize: h('2.5%'),
                        }}>
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Bottom View */}
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: false})}
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
                    Don't have an account?
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: h('2.5%'),
                      marginLeft: h('1%'),
                    }}>
                    SignUp
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          </Modal>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
