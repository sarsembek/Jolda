import React from 'react';
import { Image, SafeAreaView, Text } from 'react-native';

const Logo = () => {
  return (
    <SafeAreaView>
      <Image source={require('../../assets/logo.svg')} />
      <Text>Logo</Text>
    </SafeAreaView>
  );
};

export default Logo;
