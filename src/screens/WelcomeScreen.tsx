import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Logo from '../components/Logo';

const WelcomeScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Text style={styles.topText}>Твоя дорога начинается здесь!</Text>
      </ImageBackground>
      <Logo />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>или</Text>
        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.outlineButtonText}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  buttonsContainer: {
    width: '100%',
    aspectRatio: 1, // Forces a square container (height equals width)
    margin: 0,       // No outside margin
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  outlineButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default WelcomeScreen;
