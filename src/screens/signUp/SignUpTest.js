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

export class SignUpTest extends Component {
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
      <View
        style={{
          // height: '100%',
          // width: '100%',
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <SafeAreaView />

        <Loading visible={this.state.loadingVisible} txt={'Loading'} />

        <NavHeader
          showLeftIc={true}
          icLeft={'arrow-back'}
          leftPressed={() => {
            console.warn('Left');
          }}
          title={'Sign Up'}
          showRightIc={true}
          txtRight={'logIn'}
          rightPressed={() => {
            this.setState({modalVisible: true});
          }}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 2,
          }}>
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
                placeholderTextColor={'#000'}
                placeholder={'Full name'}
                onChangeText={(txt) => this.setState({name: txt})}
                value={this.state.name}
                icType={'ionicons'}
                icName={'person-outline'}
              />

              <AppInputField
                placeholderTextColor={'#000'}
                placeholder={'Email'}
                onChangeText={(txt) => this.setState({email: txt})}
                keyboardType={'email-address'}
                value={this.state.email}
                icType={'ionicons'}
                icName={'mail-outline'}
              />

              <AppInputField
                placeholderTextColor={'#000'}
                placeholder={'Phone'}
                onChangeText={(txt) => this.setState({phone: txt})}
                keyboardType={'phone-pad'}
                value={this.state.phone}
                icType={'ionicons'}
                icName={'call'}
              />

              <AppInputField
                placeholderTextColor={'#000'}
                placeholder={'Password'}
                secureTextEntry
                // underlineColorAndroid={'#0005'}
                onChangeText={(txt) => this.setState({password: txt})}
                value={this.state.password}
                icType={'foundation'}
                icName={'key'}
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
        </KeyboardAwareScrollView>
        <Modal
          animationType="slide"
          // transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View
            style={{
              // height: '100%',
              // width: '100%',
              flex: 1,
              backgroundColor: '#0005',
            }}>
            <SafeAreaView />
            <KeyboardAwareScrollView
              contentContainerStyle={{
                flexGrow: 2,
              }}>
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
                    placeholderTextColor={'#000'}
                    placeholder={'Enter Email'}
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
                    placeholderTextColor={'#000'}
                    placeholder={'Enter Password'}
                    secureTextEntry
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
            </KeyboardAwareScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}
