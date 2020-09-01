import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  Modal,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {primaryColor, white, secondaryColor, silver} from '../Dimens';
import {AppInputField, AppBtn} from '../../components';
import {NavHeader} from './../../components';

const firstImg = require('../../assets/getAppointment.png');
const secondImg = require('../../assets/allAppointments.png');
const thirdImg = require('../../assets/waitingRoom.png');
export class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <NavHeader
          showLeftIc={true}
          icLeft={'options'}
          leftPressed={() => this.props.navigation.openDrawer()}
          title={'Dashboard'}
        />

        <View style={styles.contentView}>
          {/* Top */}
          <TouchableOpacity style={[styles.itemView, {marginTop: h('4%')}]}>
            <Image style={styles.img} source={firstImg} />
            <Text style={styles.txt}>Get Doctor Appointment</Text>
          </TouchableOpacity>

          {/* center */}
          <TouchableOpacity style={styles.itemView}>
            <Image style={styles.img} source={secondImg} />
            <Text style={styles.txt}>Get Doctor Appointment</Text>
          </TouchableOpacity>

          {/* bottom */}
          <TouchableOpacity style={styles.itemView}>
            <Image style={styles.img} source={thirdImg} />
            <Text style={styles.txt}>Get Doctor Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
  },
  itemView: {
    height: h('20%'),
    width: '85%',
    backgroundColor: white,
    borderColor: primaryColor,
    borderWidth: h('0.1%'),
    borderRadius: h('1%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: h('2%'),
  },
  img: {
    height: h('7%'),
    width: h('7%'),
    resizeMode: 'contain',
  },
  txt: {
    fontSize: h('2%'),
    color: '#000',
  },
});
