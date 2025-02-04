import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import Logo from '../components/Logo';
import AppButton from '../components/AppButton'; // adjust the path as needed

const WelcomeScreen = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* Dark overlay */}
        <View style={styles.overlay}>
          <View style={styles.topSection}>
            <Text style={styles.topText}>
              Твоя дорога начинается здесь!
            </Text>
          </View>
          <View style={styles.authContainer}>
            <Logo />
            <Text style={styles.welcomeText}>Добро пожаловать</Text>
            <AppButton
              title="Зарегистрироваться"
              onPress={() => {
                // handle registration
              }}
              type="primary"
            />
            <Text style={styles.orText}>или</Text>
            <AppButton
              title="Войти"
              onPress={() => {
                // handle login
              }}
              type="outline"
            />
          </View>
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
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // 60% dark overlay
    flexDirection: 'column',
  },
  topSection: {
    flex: 0.55, // Takes 55% of the overlay's height
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 32,
    textAlign: 'center',
  },
  authContainer: {
    flex: 0.45, // Takes 45% of the overlay's height
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 36,
    paddingVertical: 36,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#71717a',
    marginVertical: 8,
  },
});

export default WelcomeScreen;
