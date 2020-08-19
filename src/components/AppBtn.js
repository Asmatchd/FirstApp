/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TouchableOpacity, Platform, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class AppBtn extends Component {
  render() {
    return (
      <View
        style={{
          // backgroundColor: '#aa4',
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          {...this.props}
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
            {this.props.txt}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
