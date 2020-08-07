/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  Platform,
  Modal,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class Assignment2 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* Top container */}
        <View
          style={{
            height: h('35%'),
            backgroundColor: '#33CAFF',
            width: '100%',
          }}>
          {/* Header */}
          <View
            style={{
              height: '20%',
              // backgroundColor: '#aa5',
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              View
              style={{
                height: h('8%'),
                // backgroundColor: '#000',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo name="list" size={h('4%')} color="#fff" />
            </View>

            <View
              View
              style={{
                height: h('8%'),
                // backgroundColor: '#000',
                width: '60%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: h('2.5%'),
                }}>
                Projects
              </Text>
            </View>

            <View
              View
              style={{
                height: h('8%'),
                // backgroundColor: '#000',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Entypo name="share" size={h('3.7%')} color="#fff" />
            </View>
          </View>
          {/* Dates */}
          <View
            style={{
              height: '60%',
              // backgroundColor: '#aa5',
              width: '100%',
              justifyContent: 'center',
              paddingLeft: h('3%'),
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: h('3%'),
              }}>
              Planner - ios {'\n'}Nov 20 - Nov 26
            </Text>
          </View>

          {/* Header */}
          <View
            style={{
              height: '20%',
              // backgroundColor: '#aa5',
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              View
              style={{
                height: h('8%'),
                // backgroundColor: '#000',
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: h('2%'),
                }}>
                ToDo
              </Text>
            </View>

            <View
              View
              style={{
                height: h('8%'),
                // backgroundColor: '#000',
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: h('2%'),
                }}>
                In Progress
              </Text>
            </View>

            <View
              View
              style={{
                height: h('8%'),
                // backgroundColor: '#000',
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: h('2%'),
                }}>
                Complete
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Container */}
        <View
          style={{
            height: h('61%'),
            backgroundColor: '#0001',
            width: '100%',
          }}>
          <View
            style={{
              height: h('9%'),
              // backgroundColor: '#aa4',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: '30%',
                flexDirection: 'row',
                height: '80%',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{color: '#0009', fontSize: h('2.3%')}}> Add</Text>
              <Entypo name="plus" size={h('4%')} color={'#0006'} />
            </View>

            <View
              style={{
                backgroundColor: '#fff',
                width: '30%',
                flexDirection: 'row',
                height: '80%',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{color: '#0009', fontSize: h('2.3%')}}> Add</Text>
              <Entypo name="plus" size={h('4%')} color={'#0006'} />
            </View>

            <View
              style={{
                backgroundColor: '#fff',
                width: '30%',
                flexDirection: 'row',
                height: '80%',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{color: '#0009', fontSize: h('2.3%')}}> Add</Text>
              <Entypo name="plus" size={h('4%')} color={'#0006'} />
            </View>
          </View>
          <View
            style={{
              height: h('18%'),
              // backgroundColor: '#aa4',
              width: '100%',
              flexDirection: 'row',
              paddingLeft: h('1%'),
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: '30%',
                height: '80%',
              }}>
              <View
                style={{
                  height: '20%',
                  flexDirection: 'row',
                  padding: h('1%'),
                  justifyContent: 'space-around',
                  // backgroundColor: '#faa',
                }}>
                <View
                  style={{
                    backgroundColor: '#aa3',
                    height: h('1%'),
                    width: '30%',
                    borderRadius: h('1%'),
                  }}
                />
                <View
                  style={{
                    backgroundColor: 'blue',
                    height: h('1%'),
                    width: '30%',
                    borderRadius: h('1%'),
                  }}
                />
                <View
                  style={{
                    width: '30%',
                    borderRadius: h('1%'),
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    height: h('1%'),
                  }}>
                  <SimpleLineIcons name={'options'} size={h('3%')} />
                </View>
              </View>

              <Text
                style={{
                  color: '#0009',
                  fontSize: h('1.7%'),
                  paddingLeft: h('1%'),
                }}>
                08:00AM
              </Text>

              <View
                style={{
                  height: '60%',
                  // backgroundColor: '#faa',
                  paddingLeft: h('1%'),
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: h('1.7%'),
                    fontWeight: 'bold',
                  }}>
                  Sprint {'\n'}Planning
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
