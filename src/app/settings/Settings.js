import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader} from './../../components';
export class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <NavHeader title={'Settings'} />
        <View style={styles.ItemView}>
          <Text style={styles.txt}>Doctors</Text>
        </View>
        <View style={styles.ItemView}>
          <Text style={styles.txt}>Reset Password</Text>
        </View>
        <View style={styles.ItemView}>
          <Text style={styles.txt}>Terms</Text>
        </View>
        <View style={styles.ItemView}>
          <Text style={styles.txt}>Log out</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ItemView: {
    height: h('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: h('0.05%'),
    backgroundColor: '#fff',
  },
  txt: {
    fontSize: h('3%'),
  },
});
