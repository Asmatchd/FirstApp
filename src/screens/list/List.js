/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
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
            width: '70%',
            height: '70%',
            borderRadius: 200,
          }}
        />
      </TouchableOpacity>

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
