/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

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
      <View
        style={{
          flex: 1,
          backgroundColor: '#faf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          style={{
            height: '10%',
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
            height: '10%',
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

        {/* {this.secondInput()} */}
      </View>
    );
  }
}
