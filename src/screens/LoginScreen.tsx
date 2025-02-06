import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../core/types/RootStackParamList.type';
import AppButton from '../components/AppButton';
import Logo from '../components/Logo';
import ChevronLeftIcon from '../icons/ChevronLeft.icon';
import AppInput from '../components/AppInput';
import {useTheme} from '../theme/ThemeContext';
import colors from '../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  formatKazakhPhoneNumber,
  validateKazakhPhoneNumber,
  validateEmail, // Make sure to import this
} from '../utils/validate';

const LoginScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
  const theme = useTheme();

  // 1) State to track whether we're using phone or email
  // Initially false => use "email" mode
  const [isPhone, setIsPhone] = useState(false);

  // 2) Toggle function
  const toggleAuthType = () => {
    setIsPhone(!isPhone);
  };

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={10}
        keyboardShouldPersistTaps="handled"
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
            <Text style={styles.title}>Вход</Text>
            <Text style={styles.description}>
              Войдите, чтобы пользоваться приложением
            </Text>
          </View>

          {/* INPUT FIELDS */}
          <View style={styles.inputContainer}>
            {/* Conditionally switch between Email vs. Phone */}
            <AppInput
              label={isPhone ? 'Номер телефона' : 'Почта'}
              placeholder={isPhone ? '+7 (777) 777 77 77' : 'Email'}
              // For phone, use phone format/validate; for email, no format + email validate.
              format={isPhone ? formatKazakhPhoneNumber : undefined}
              validate={isPhone ? validateKazakhPhoneNumber : validateEmail}
              numeric={isPhone ? true : false}
            />

            {/* Password */}
            <AppInput label="Пароль" placeholder="Пароль" secureTextEntry />

            <View style={styles.bottomContainer}>
              {/* Toggle link: switches phone/email mode */}
              <TouchableOpacity onPress={toggleAuthType}>
                <Text style={styles.loginWithEmail}>
                  {isPhone ? 'Войти по почте' : 'Войти по телефону'}
                </Text>
              </TouchableOpacity>

              {/* Forgot Password - aligned to the right */}
              <TouchableOpacity
                style={styles.forgotPasswordContainer}
                onPress={() => console.log('Forgot Password pressed')}
              >
                <Text style={styles.forgotPassword}>Забыли пароль?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* LOGIN BUTTON */}
          <AppButton
            title="Войти"
            onPress={() => console.log('Login pressed')}
            type="primary"
          />

          {/* ALREADY HAVE AN ACCOUNT? */}
          <Text style={styles.noAccountText}>
            Нету аккаунта?{' '}
            <Text
              style={styles.registerText}
              onPress={() => navigation.replace('Register')}
            >
              Зарегистрироваться
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const getStyles = (theme: {background: string; text: string}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollContainer: {
      flexGrow: 1,
      paddingHorizontal: 32,
    },
    header: {
      alignItems: 'flex-start',
    },
    innerContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginVertical: 32,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 12,
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
      color: theme.text,
    },
    description: {
      fontSize: 14,
      textAlign: 'left',
      color: theme.text,
    },
    inputContainer: {
      width: '100%',
      gap: 12,
      marginBottom: 20,
    },
    loginWithEmail: {
      fontSize: 14,
      color: colors.primary,
    },
    forgotPasswordContainer: {
      // intentionally empty
    },
    forgotPassword: {
      fontSize: 14,
      color: theme.text,
      textDecorationLine: 'underline',
    },
    noAccountText: {
      fontSize: 14,
      color: theme.text,
      marginTop: 32,
      textAlign: 'center',
    },
    registerText: {
      color: colors.primary,
      fontWeight: 'bold',
    },
    bottomContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export default LoginScreen;
