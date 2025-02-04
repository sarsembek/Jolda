import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import LogoIcon from '../icons/Logo.icon';

const Logo = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <LogoIcon />
      <Text style={[styles.text, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>
        OLDA
      </Text>
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
