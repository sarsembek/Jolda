import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import Logo from '../components/Logo';

const WelcomeScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <Text style={styles.topText}>
          Твоя дорога начинается здесь!
        </Text>
        <View style={styles.buttonsContainer}>
          <Logo />
          <Text style={styles.welcomeText}>Добро пожаловать</Text>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>или</Text>
          <TouchableOpacity style={styles.outlineButton}>
            <Text style={styles.outlineButtonText}>Войти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 42,
    marginVertical: 140,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    backgroundColor: '#fff',
    width: '100%',
    aspectRatio: 1,
    padding: 36,
    gap: 16,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: 'center'
  },
  primaryButton: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 32,
    width: '100%',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
  },
  outlineButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 32,
    alignItems: 'center',
  },
  outlineButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#71717a',
  },
});

export default WelcomeScreen;
