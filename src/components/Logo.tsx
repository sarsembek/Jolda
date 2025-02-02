import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View>
      <Image source={require('../../assets/logo.svg')} />
      <Text style={styles.text}>Jolda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  }
});

export default Logo;
