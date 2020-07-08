/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

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
            borderRadius: 15,
            // textAlign: 'center',
            // marginLeft: 200,
            paddingLeft: 10,
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
            borderRadius: 15,
            // textAlign: 'center',
            // marginLeft: 200,
            paddingLeft: 10,
            marginTop: 10,
          }}
          placeholder={'Email'}
          //   placeholderTextColor={'white'}
        />

        {/* {this.secondInput()} */}
      </View>
    );
  }
}
