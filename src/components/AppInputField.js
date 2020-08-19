/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TextInput, Platform} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class AppInputField extends Component {
  render() {
    return (
      <View
        style={{
          // backgroundColor: '#aa4',
          width: '100%',
          alignItems: 'center',
        }}>
        <TextInput
          {...this.props}
          style={{
            // backgroundColor: '#faf',
            height: h('7%'),
            width: '80%',
            color: 'white',
            fontSize: h('2%'),
            borderWidth: Platform.OS === 'ios' ? h('0.05%') : null,
            borderRadius: h('1%'),
            paddingLeft: h('1%'),
            marginBottom: h('1%'),
            borderColor: '#000',
          }}
        />
      </View>
    );
  }
}
