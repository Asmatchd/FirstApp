/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
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
        name: 'Umair',
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
    filteredData: [
      {
        name: 'Umer',
        fName: 'Irfan',
        dob: '17-08-1999',
        city: 'Sargodha',
        img: require('./../../assets/us.jpg'),
      },
      {
        name: 'Umair',
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

    modalVisible: false,
    selectedData: '',
    refreshing: false,
  };

  renderItemDesign = (item, index) => (
    <View
      style={{
        marginBottom: h('2%'),
        flexDirection: 'row',
        // backgroundColor: '#faf',
        width: '100%',
        height: h('13%'),
        borderWidth: h('0.4%'),
        borderColor: 'rgba(0,0,0,0.05)',
      }}>
      {/* img */}
      <TouchableOpacity
        onPress={() => {
          this.setState({selectedData: item}, () => {
            this.setState({modalVisible: true});
          });
        }}
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
            width: h('9%'),
            height: h('9%'),
            borderRadius: 200,
          }}
        />
      </TouchableOpacity>

      {/* center */}
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Alert',
            'Do you want to remove this item',
            [
              {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              // {text: 'Yes', onPress: () => this.removeByItem(item)},
              {text: 'Yes', onPress: () => this.removeByIndex(index)},
            ],
            {cancelable: false},
          );
        }}
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
      </TouchableOpacity>
    </View>
  );

  removeByItem = (item) => {
    const data = this.state.listData;

    const index = data.indexOf(item);

    if (index > -1) {
      data.splice(index, 1);
    }

    this.setState({listData: data});
  };

  removeByIndex = (index) => {
    const data = this.state.listData;

    if (index > -1) {
      data.splice(index, 1);
    }

    this.setState({listData: data});
  };

  handleRefresh = () => {
    this.setState({refreshing: true}, () => {
      setInterval(() => {
        this.setState({refreshing: false});
      }, 3000);
    });
  };

  searching = (text) => {
    const newData = this.state.listData.filter((item) => {
      const itemData = item.name.toUpperCase();

      const searchText = text.toUpperCase();

      return itemData.indexOf(searchText) > -1;
    });
    this.setState({filteredData: newData});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <TextInput
          style={{
            backgroundColor: '#0001',
            borderWidth: h('0.2%'),
            marginTop: h('3%'),
            marginBottom: h('3%'),
            borderColor: 'blue',
            paddingLeft: h('5%'),
            fontSize: h('2.5%'),
          }}
          placeholder={'Search Here'}
          onChangeText={(text) => this.searching(text)}
        />
        <FlatList
          data={this.state.filteredData}
          renderItem={({item, index}) => this.renderItemDesign(item, index)}
          keyExtractor={(item) => item.name}
          refreshing={this.state.refreshing}
          onRefresh={() => this.handleRefresh()}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#0003',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: h('60%'),
                backgroundColor: '#fff',
                width: '100%',
              }}>
              <View
                style={{
                  // backgroundColor: '#aa4',
                  height: h('30%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={this.state.selectedData.img}
                  style={{
                    resizeMode: 'cover',
                    width: h('18%'),
                    height: h('18%'),
                    borderRadius: h('100%'),
                  }}
                />
              </View>
              <View
                style={{
                  // backgroundColor: '#faa',
                  height: h('30%'),
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: h('3%')}}>
                  Name: {this.state.selectedData.name}
                </Text>
                <Text style={{fontSize: h('3%')}}>
                  Father Name: {this.state.selectedData.fName}
                </Text>
                <Text style={{fontSize: h('3%')}}>
                  DOB: {this.state.selectedData.dob}
                </Text>
                <Text style={{fontSize: h('3%')}}>
                  City: {this.state.selectedData.city}
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
