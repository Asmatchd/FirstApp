/* eslint-disable react/self-closing-comp */
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
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {primaryColor, white, secondaryColor, silver} from '../Dimens';
import {AppInputField, AppBtn} from '../../components';
export class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBg} />

        <View style={styles.bottomBg} />

        <View style={styles.contentView}>
          <View style={styles.topView}>
            <Text style={styles.topTxt}>Sign Up</Text>
            <Text style={styles.topBottomTxt}>Create an account</Text>
          </View>
          <View style={styles.userView}>
            <View style={styles.imgView}>
              <Image
                source={require('../../assets/ic.png')}
                style={styles.img}
              />
            </View>

            <AppInputField
              icName={'ios-mail'}
              icType={'ionicon'}
              placeholder={'Email'}
            />

            <AppInputField
              icName={'md-key'}
              icType={'ionicon'}
              placeholder={'Password'}
              secureTextEntry
            />

            <AppInputField
              icName={'md-key'}
              icType={'ionicon'}
              placeholder={'Confirm Password'}
              secureTextEntry
            />

            <AppBtn txt={'Sign Up'} />

            <View style={styles.bottomView}>
              <Text style={styles.alreadyTxt}>Already have an account?</Text>
              <TouchableOpacity style={styles.signView}>
                <Text style={styles.signTxt}>Sign In!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topBg: {
    height: h('35%'),
    width: '100%',
    backgroundColor: primaryColor,
  },
  bottomBg: {
    height: h('61.5%'),
    width: '100%',
    backgroundColor: silver,
  },
  contentView: {
    height: h('75%'),
    width: '80%',
    marginTop: -h('90%'),
  },
  topView: {
    height: h('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTxt: {
    color: white,
    fontSize: h('3%'),
  },
  topBottomTxt: {
    color: white,
    fontSize: h('1.8%'),
    marginTop: h('1%'),
  },
  userView: {
    height: h('60%'),
    width: '100%',
    backgroundColor: white,
    borderWidth: h('0.4%'),
    borderRadius: h('2%'),
    borderColor: 'rgba(0,0,0,0.1)',
  },
  imgView: {
    height: h('15%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: h('9%'),
    width: h('9%'),
    resizeMode: 'contain',
  },
  bottomView: {
    height: h('4%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('5%'),
  },
  alreadyTxt: {
    fontSize: h('2%'),
    color: '#0008',
  },
  signView: {
    padding: h('1%'),
  },
  signTxt: {
    fontSize: h('2%'),
    color: primaryColor,
    fontWeight: 'bold',
  },
});
