/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import {Loading, AppInputField, AppBtn, NavHeader} from './../../components';

export class Img extends Component {
  state = {
    imgUrl: '',
  };

  capture = () => {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else {
        // const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imgUrl: response.uri,
        });
      }
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <SafeAreaView />

        <Image
          source={{uri: this.state.imgUrl}}
          style={{
            height: h('30%'),
            width: '95%',
            marginTop: h('5%'),
            marginBottom: h('5%'),
            borderColor: '#0001',
            borderWidth: h('0.5%'),
            borderRadius: h('2%'),
            overflow: 'hidden',
          }}
        />

        <AppBtn txt={'Capture'} onPress={() => this.capture()} />
      </View>
    );
  }
}
