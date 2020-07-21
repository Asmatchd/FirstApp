/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';

export class SignIn extends Component {
  state = {
    name: 'Rn class',
    email: 'Sgd@gmail.com',
    phone: '12345678',
    password: 'kdshfkghsdil',
  };

  show = () => {
    // const values = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   phone: this.state.phone,
    //   password: this.state.password,
    // };

    console.warn(this.state.name);
    console.warn(this.state.email);
    console.warn(this.state.phone);
    console.warn(this.state.password);
  };

  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#0005',
        }}>
        {/* TOp View */}
        <View
          style={{
            height: '10%',
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
                fontSize: 30,
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
                fontSize: 18,
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>

        {/* Center View */}
        <View
          style={{
            height: '75%',
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
                fontSize: 22,
                color: '#fff',
              }}>
              Create an account
            </Text>
          </View>

          {/* Inputs container */}
          <View
            style={{
              height: '60%',
              //   backgroundColor: '#a234',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <TextInput
              style={{
                // backgroundColor: '#aa07',
                height: 50,
                width: '80%',
                color: 'white',
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
                height: 50,
                width: '80%',
                marginTop: 10,
                color: 'white',
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
                height: 50,
                width: '80%',
                marginTop: 10,
                color: 'white',
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
                height: 50,
                width: '80%',
                marginTop: 10,
                color: 'white',
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
                this.show();
              }}
              style={{
                height: 55,
                width: '60%',
                marginTop: 10,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
              }}>
              <Text>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom View */}
        <View
          style={{
            height: '15%',
            width: '100%',
            // backgroundColor: '#aaf',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Already have an account?</Text>
          <Text
            style={{
              color: 'red',
            }}>
            SignIn
          </Text>
        </View>
      </View>
    );
  }
}
