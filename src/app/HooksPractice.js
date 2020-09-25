/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HooksPractice = ({props}) => {
  const [txt, setTxt] = useState('Initial');
  const [name, setName] = useState('');

  useEffect(() => {
    setTxt('Effect');
  }, []);

  const getData = () => {
    const data = [
      {
        name: 'Test Selected',
        mail: 'Test.com',
      },
      {
        name: 'new',
        mail: 'new.com',
      },
    ];

    setTxt(data[0].name);
    console.warn('Done');
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <Text>{txt}</Text>

      <TouchableOpacity
        onPress={() => getData()}
        delayPressIn={0}
        style={{
          backgroundColor: '#faf',
          height: 50,
          width: 200,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Text>Button</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTxt('Initial')}
        delayPressIn={0}
        style={{
          backgroundColor: '#faf',
          height: 50,
          width: 200,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}>
        <Text>Initial</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HooksPractice;
