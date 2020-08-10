/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
export class List extends Component {
  state = {
    listData: [
      {
        name: 'Umer',
        fName: 'Irfan',
        dob: '17-08-1999',
        city: 'Sargodha',
        img: require('./../../assets/us.jpg'),
      },
      {
        name: 'Haseeb',
        fName: 'Safdar',
        dob: '18-01-1994',
        city: 'Sargodha',
        img: require('./../../assets/2.jpeg'),
      },
      {
        name: 'Qasim',
        fName: 'Ali',
        dob: '10-07-1995',
        city: 'Sargodha',
        img: require('./../../assets/3.jpeg'),
      },
    ],
  };

  renderItemDesign = (item) => (
    <View
      style={{
        marginBottom: h('2%'),
        flexDirection: 'row',
        // backgroundColor: '#faf',
        width: '100%',
        height: h('13%'),
        borderWidth: h('0.4%'),
        borderColor:'rgba(0,0,0,0.05)'
      }}>
      {/* img */}
      <View
        style={{
          width: '25%',
          height: '100%',
          // backgroundColor: '#aa4',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            resizeMode: 'cover',
            width: '70%',
            height: '70%',
            borderRadius: 200,
          }}
        />
      </View>

      {/* center */}
      <View
        style={{
          width: '75%',
          // backgroundColor: '#afa',
        }}>
        {/* name */}
        <View
          style={{
            width: '100%',
            height: '50%',
            // backgroundColor: '#ff3',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: h('3%'),
            }}>
            {item.name}
          </Text>
        </View>
        {/* dob & city */}
        <View
          style={{
            width: '100%',
            height: '50%',
            // backgroundColor: '#add',
          }}>
          <Text
            style={{
              fontSize: h('2%'),
              color: '#0007',
            }}>
            {item.dob} {'     '} {item.city}
          </Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View
        style={{
          paddingTop: 50,
        }}>
        <FlatList
          data={this.state.listData}
          renderItem={({item}) => this.renderItemDesign(item)}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}
