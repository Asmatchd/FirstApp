/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Loading extends Component {
  render() {
    return (
      <View>
        {this.props.visible ? (
          <View
            style={{
              height: h('100%'),
              width: w('100%'),
              backgroundColor: '#0003',
              zIndex: 1,
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text
              style={{
                fontSize: h('3%'),
              }}>
              {this.props.txt}
            </Text>
          </View>
        ) : null}
      </View>
    );
  }
}
