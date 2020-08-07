/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
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
      },
      {
        name: 'Haseeb',
        fName: 'Safdar',
        dob: '18-01-1994',
        city: 'Sargodha',
      },
      {
        name: 'Qasim',
        fName: 'Ali',
        dob: '10-07-1995',
        city: 'Sargodha',
      },
    ],
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.listData}
          renderItem={({item}) => (
            <View
              style={{
                marginBottom: 20,
              }}>
              <Text>{item.name}</Text>
              <Text>{item.fName}</Text>
              <Text>{item.dob}</Text>
              <Text>{item.city}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
