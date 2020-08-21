/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TextInput, Platform} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
export class AppInputField extends Component {
  render() {
    return (
      <View
        style={{
          // backgroundColor: '#a0a',
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            // backgroundColor: '#af1',
            width: '80%',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: '#000',
            borderWidth: h('0.05%'),
            // borderWidth: Platform.OS === 'ios' ? h('0.05%') : null,
            borderRadius: h('1%'),
            marginBottom: h('1%'),
          }}>
          <View
            style={{
              width: '15%',
              // backgroundColor: 'blue',
              height: h('7%'),
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.05%'),
              borderColor: '#000',
            }}>
            <Icon
              name={this.props.icName}
              type={this.props.icType}
              color="red"
              size={h('4%')}
            />
          </View>
          <View
            style={{
              width: '85%',
              // backgroundColor: '#faf',
            }}>
            <TextInput
              {...this.props}
              style={{
                // backgroundColor: '#faf',
                height: h('7%'),
                width: '100%',
                color: '#000',
                fontSize: h('2%'),
                paddingLeft: h('2%'),
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
