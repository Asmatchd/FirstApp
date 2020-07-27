/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';

export class InputField extends Component {
  //   secondInput = () => (
  //     <TextInput
  //       style={{
  //         height: '10%',
  //         width: '70%',
  //         backgroundColor: '#aaf',
  //         borderWidth: 1,
  //         borderColor: 'blue',
  //         borderRadius: 15,
  //         // textAlign: 'center',
  //         // marginLeft: 200,
  //         paddingLeft: 10,
  //         marginTop: 10,
  //       }}
  //       placeholder={'Email'}
  //       //   placeholderTextColor={'white'}
  //     />
  //   );
  state = {
    clr: 'green',
  };

  add = () => {
    const a = 10;
    const b = 5;
    const sum = a + b;
    console.warn('Total value ' + sum);
  };

  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.jpg')}
        style={{
          flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center',
          resizeMode: 'contain',
        }}>
        {/* Top container*/}
        <View
          style={{
            // backgroundColor: 'white',
            width: '100%',
            height: '25%',
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Image
            style={{
              height: '50%',
              width: '50%',
              resizeMode: 'contain',
            }}
            // resizeMode={'contain'}
            source={require('./assets/1.png')}
            // source={{
            //   uri:
            //     'https://images.unsplash.com/photo-1594011212737-e31ad780b52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1546&q=80',
            // }}
          />
        </View>

        {/* Middle container */}
        <View
          style={{
            alignItems: 'center',
            // backgroundColor: '#faf',
            height: '60%',
          }}>
          <TextInput
            style={{
              height: '13%',
              width: '70%',
              backgroundColor: 'silver',
              borderWidth: 1,
              borderColor: 'red',
              // textAlign: 'center',
              // marginLeft: 200,
              paddingLeft: 10,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            placeholder={'Name'}
            //   placeholderTextColor={'white'}
          />

          <TextInput
            style={{
              height: '13%',
              width: '70%',
              backgroundColor: 'silver',
              borderWidth: 1,
              borderColor: 'red',
              // borderRadius: 15,
              // textAlign: 'center',
              // marginLeft: 200,
              paddingLeft: 10,
              marginTop: 10,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            placeholder={'Email'}
            //   placeholderTextColor={'white'}
          />

          {/* this is button */}

          <TouchableOpacity
            onPress={() => console.warn('Study')}
            style={{
              backgroundColor: 'blue',
              width: '70%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                // fontStyle: 'italic',
                color: '#fff',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>

          {/* change color onPress from state */}
          <TouchableOpacity
            // onPress={() => console.warn('Study')}
            onPress={() => this.setState({clr: 'silver'})}
            style={{
              // backgroundColor: 'blue',
              backgroundColor: this.state.clr,
              width: '70%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                // fontStyle: 'italic',
                color: '#fff',
              }}>
              Change Color
            </Text>
          </TouchableOpacity>

          {/* onPress hit add function */}
          <TouchableOpacity
            onPress={() => this.add()}
            style={{
              backgroundColor: 'orange',
              width: '70%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                // fontStyle: 'italic',
                color: '#fff',
              }}>
              Hit Function
            </Text>
          </TouchableOpacity>

          {/* Btn with Img */}
          <View
            style={{
              width: '70%',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={() => console.warn('BG btn ')}
              style={{
                width: '100%',
                height: 40,
              }}>
              <ImageBackground
                source={require('./assets/btn.jpg')}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    // fontStyle: 'italic',
                    color: '#fff',
                  }}>
                  Hit Function
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom container */}
        <View
          style={{
            // backgroundColor: '#fff',
            height: '10%',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 30,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              I'm a new user
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Basics', {
                navParams: 'React native',
              });
            }}
            style={{
              marginLeft: 10,
              height: 30,
              // backgroundColor: '#faf',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
              }}>
              Sign Up!
            </Text>
          </TouchableOpacity>
        </View>
        {/* {this.secondInput()} */}
      </ImageBackground>
    );
  }
}
