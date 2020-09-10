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

export class AllUsers extends Component {
  state = {
    data: [],
    refreshing: false,
    isLoading: false,
  };

  componentDidMount = () => {
    this.setState({refreshing: false}, () => {
      this.loading(true);
      setTimeout(() => {
        this.getUsers();
      }, 3000);
    });
  };

  getUsers = () => {
    axiosInstance
      .get(baseUrl + 'users/allUsers')
      .then((res) => {
        this.loading(false);
        const userData = res.data;
        if (userData.status === '200') {
          this.setState({data: userData.data});
        } else if (userData.status === '404') {
          alert(userData.msg);
        }
      })
      .catch((error) => {
        this.loading(false);

        console.warn('Network error');
      });
  };

  renderItem = (item) => (
    <TouchableOpacity
      onPress={() =>
        this.props.navigation.navigate('Details', {
          value: item,
        })
      }
      style={styles.itemView}>
      <Text style={styles.name}>user Email {item.email}</Text>
      <Text style={styles.work}>user Email {item.password}</Text>
    </TouchableOpacity>
  );

  loading = (value) => {
    this.setState({isLoading: value});
  };
  handleRefresh = () => {
    this.setState({refreshing: true}, () => {
      this.componentDidMount();
    });
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
          title={'All User'}
        />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <Text style={styles.txt}>Select your doctor from list</Text>
        </View>
        {this.state.data.length > 0 ? (
          <FlatList
            data={this.state.data}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={(item) => item.name}
            refreshing={this.state.refreshing}
            onRefresh={() => this.handleRefresh()}
          />
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: h('4%'),
                color: '#0007',
                fontWeight: 'bold',
              }}>
              Nothing to show
            </Text>
          </View>
        )}
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
  itemView: {
    // backgroundColor: 'tomato',
    marginTop: h('1%'),
    paddingLeft: h('3%'),
    width: w('100%'),
    height: h('12%'),
    borderLeftColor: 'rgba(0,0,0,0.1)',
    borderLeftWidth: h('0.2%'),
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: h('0.2%'),
    borderRightColor: 'rgba(0,0,0,0.1)',
    borderRightWidth: h('0.1%'),
    justifyContent: 'space-around',
  },
  name: {
    color: 'black',
    fontSize: h('2.5%'),
    // fontWeight: 'bold',
    margin: h('0.1%'),
  },
  work: {
    color: 'grey',
    fontSize: h('2%'),
    margin: h('0.1%'),
  },
  address: {
    color: 'grey',
    fontSize: h('2%'),
    margin: h('0.1%'),
  },
  images: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: h('10%'),
  },
});
