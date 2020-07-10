/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export class InputField extends Component {
  state = {
    firstText: '',
  };

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

        {/* this is button */}

        <TouchableOpacity
          // onPress={() => console.warn('Study')}
          onPress={() => this.setState({firstText: 'Button pressed'})}
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

        {/* First text from state */}
        <Text>{this.state.firstText}</Text>
        {/* {this.secondInput()} */}
      </View>
    );
  }
}
