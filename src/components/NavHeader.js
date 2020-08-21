/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class NavHeader extends Component {
  render() {
    return (
      <View
        style={{
          height: h('7%'),
          width: '100%',
          backgroundColor: '#fff',
          flexDirection: 'row',
          borderBottomWidth: h('0.05%'),
          borderBottomColor: '#0006',
        }}>
        {this.props.showLeftIc === true ? (
          <TouchableOpacity
            onPress={this.props.leftPressed}
            style={{
              height: '100%',
              width: '15%',
              //   backgroundColor: '#aa0',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name={this.props.icLeft} color={'#000'} size={h('4%')} />
          </TouchableOpacity>
        ) : (
          <View style={{width: '15%'}} />
        )}

        <View
          style={{
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: h('2.7%'),
              color: '#000',
            }}>
            {this.props.title}
          </Text>
        </View>

        {this.props.showRightIc === true ? (
          <TouchableOpacity
            onPress={this.props.rightPressed}
            style={{
              height: '100%',
              width: '15%',
              //   backgroundColor: '#aa0',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {this.props.txtRight ? (
              <Text
                style={{
                  fontSize: h('2%'),
                }}>
                {this.props.txtRight}
              </Text>
            ) : (
              <Ionicons
                name={this.props.icRight}
                color={'#000'}
                size={h('4%')}
              />
            )}
          </TouchableOpacity>
        ) : (
          <View style={{width: '15%'}} />
        )}
      </View>
    );
  }
}
