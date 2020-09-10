/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {primaryColor, white, secondaryColor, silver} from '../Dimens';
import {AppInputField, AppBtn, Loading} from '../../components';
import {axiosInstance, baseUrl} from '../Api';
import {NavHeader} from './../../components';
var validator = require('email-validator');

export class Details extends Component {
  state = {
    user: '',
  };

  componentDidMount = () => {
    const data = this.props.route.params.value;
    this.setState({user: data});
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <Loading visible={this.state.isLoading} txt={'Loading'} />
        <NavHeader
          showLeftIc
          icLeft={'ios-arrow-back'}
          leftPressed={() => this.props.navigation.goBack()}
          title={'Details'}
        />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <Text style={styles.txt}>{this.state.user._id}</Text>
          <Text style={styles.txt}>{this.state.user.email}</Text>
          <Text style={styles.txt}>{this.state.user.password}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  txt: {
    color: primaryColor,
    marginTop: h('1.9%'),
    fontSize: h('2.3%'),
    fontWeight: '900',
  },
});
