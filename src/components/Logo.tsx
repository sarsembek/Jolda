import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoIcon from '../icons/Logo.icon';

const Logo = () => {
  return (
    <View style={styles.container}>
      <LogoIcon />
      <Text style={styles.text}>OLDA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  text: {
    fontFamily: 'Audiowide-Regular',
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Logo;
