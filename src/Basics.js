/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export class Basics extends Component {
  state = {
    txt: '',
  };

  componentDidMount = () => {
    const xyz = this.props.route.params.navParams;
    this.setState({txt: xyz});
  };

  render() {
    return (
      <View
        style={{
          // backgroundColor: '#ffa',
          // flex: 1,
          height: '100%',
          width: '100%',
        }}>
        {/* Top container */}
        <View
          style={{
            // backgroundColor: 'pink',
            height: '33%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80%',
              width: '90%',
              borderColor: 'rgba(0,0,0,0.1)',
              borderWidth: 2,
              borderRadius: 20,
              // borderLeftWidth: 1,
              // borderTopWidth: 1,
              // borderRightWidth: 3,
              // borderBottomWidth: 4,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 40,
              }}>
              {this.state.txt}
            </Text>
          </View>
        </View>

        {/* Center container */}
        <View
          style={{
            height: '33%',
            // backgroundColor: '#ff1',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              height: '80%',
              width: '45%',
              backgroundColor: 'grey',
              borderWidth: 2,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 40,
              }}>
              Colour 2
            </Text>
          </View>

          <View
            style={{
              height: '80%',
              width: '45%',
              backgroundColor: 'pink',
              borderWidth: 2,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 40,
              }}>
              Colour 3
            </Text>
          </View>
        </View>

        {/* Bottom container */}
        <View
          style={{
            // backgroundColor: 'pink',
            height: '33%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80%',
              width: '90%',
              borderColor: 'rgba(0,0,0,0.1)',
              borderWidth: 2,
              borderRadius: 20,
              // borderLeftWidth: 1,
              // borderTopWidth: 1,
              // borderRightWidth: 3,
              // borderBottomWidth: 4,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 40,
              }}>
              Colour 4
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
