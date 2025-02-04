import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, useColorScheme } from 'react-native';
import Logo from '../components/Logo';
import AppButton from '../components/AppButton'; // adjust the path as needed

const WelcomeScreen = (): React.JSX.Element => {
  const colorScheme = useColorScheme(); // 'dark' or 'light'

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
          <View
            style={[
              styles.authContainer,
              { backgroundColor: colorScheme === 'dark' ? '#333' : '#fff' },
            ]}
          >
            <Logo />
            <Text
              style={[styles.welcomeText, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
            >
              Добро пожаловать
            </Text>
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
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject, // This makes the image cover the entire screen
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
    flex: 0.6, // 60% of the overlay's height
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 32,
  },
  authContainer: {
    flex: 0.4, // 40% of the overlay's height
    width: '100%',
    paddingHorizontal: 36,
    paddingVertical: 36,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
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
