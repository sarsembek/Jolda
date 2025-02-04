import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../core/types/RootStackParamList.type';
import AppButton from '../components/AppButton';
import Logo from '../components/Logo';
import AppInput from '../components/AppInput';
import ChevronLeftIcon from '../icons/ChevronLeft.icon';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Register'>>();
  const colorScheme = useColorScheme(); // Detect system theme

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colorScheme === 'dark' ? '#212121' : '#fff' }, // Dynamic background
      ]}
    >
      {/* Header with Back Button */}
      <View style={styles.header}>
        <AppButton onPress={() => navigation.goBack()} type="icon">
          <ChevronLeftIcon />
        </AppButton>
      </View>

      {/* Inner Content */}
      <View style={styles.innerContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Logo />
        </View>

        {/* Title & Description */}
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>
            Регистрация
          </Text>
          <Text style={styles.description}>Введите свои персональные данные</Text>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <AppInput label="Имя" placeholder="Ваше имя" />
          <AppInput label="Фамилия" placeholder="Ваша фамилия" />
          <AppInput label="Номер телефона" placeholder="Ваш номер телефона" />
          <AppInput label="Почта" placeholder="Введите вашу почту" />
        </View>

        {/* Register Button, orText, and Already Have Account */}
        <View style={styles.footer}>
          <AppButton
            title="Зарегистрироваться"
            onPress={() => console.log('Register pressed')}
            type="primary"
          />
          <Text style={styles.orText}>или</Text>
          <Text style={styles.alreadyAccount}>
            Уже есть аккаунт?{' '}
            <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
              Войти
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32, // Ensures alignment
  },
  header: {
    alignItems: 'flex-start', // Align back button to the left
    marginBottom: 16, // Provides spacing from top
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  logoContainer: {
    alignItems: 'center', // Center the logo
    marginBottom: 12, // Decreased space
  },
  titleContainer: {
    width: '100%',
    gap: 8, // Decreased gap
    marginBottom: 16,
  },
  title: {
    fontSize: 32, // Reduced size for better fitting
    fontWeight: 'bold',
    textAlign: 'left', // Align to left
  },
  description: {
    color: '#71717A',
    fontSize: 14, // Slightly smaller
    textAlign: 'left', // Align to left
  },
  inputContainer: {
    width: '100%',
    gap: 6, // Reduced gap between inputs
    marginBottom: 20, // Decreased bottom margin
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    gap: 16, // Reduced gap
  },
  orText: {
    fontSize: 14,
    color: '#71717A',
  },
  alreadyAccount: {
    fontSize: 14,
    color: '#71717A',
  },
  loginText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
  },
});

export default RegisterScreen;
