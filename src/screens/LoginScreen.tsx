import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../core/types/RootStackParamList.type';
import AppButton from '../components/AppButton';
import Logo from '../components/Logo';
import ChevronLeftIcon from '../icons/ChevronLeft.icon';
import AppInput from '../components/AppInput';

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#212121' : '#fff' }, // Dynamic background
      ]}
    >
      {/* Back Button */}
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
          <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Вход</Text>
          <Text style={styles.description}>Войдите, чтобы пользоваться приложением</Text>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <AppInput label="Номер телефона" placeholder="Номер телефона" />
          <AppInput label="Пароль" placeholder="Пароль" secureTextEntry />

          {/* Forgot Password */}
          <Text style={styles.forgotPassword}>Забыли пароль?</Text>
        </View>

        {/* Login Button */}
        <AppButton title="Войти" onPress={() => console.log('Login pressed')} type="primary" />

        {/* Already Have an Account */}
        <Text style={styles.noAccountText}>
          Нету аккаунта?{' '}
          <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>
            Зарегистрироваться
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  titleContainer: {
    width: '100%',
    marginBottom: 24,
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    color: '#71717A',
    textAlign: 'left',
  },
  inputContainer: {
    width: '100%',
    gap: 12,
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: '#71717A',
    marginBottom: 24,
  },
  noAccountText: {
    fontSize: 14,
    color: '#71717A',
    marginTop: 32,
  },
  registerText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
