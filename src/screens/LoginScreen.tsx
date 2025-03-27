import React, {useState} from 'react';
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
  validateEmail,
} from '../utils/validate';
import axios from 'axios';


const LoginScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
  const theme = useTheme();

  // Are we using phone or email for the first field?
  const [isPhone, setIsPhone] = useState(false);

  // Controlled input states:
  const [authValue, setAuthValue] = useState(''); // phone or email
  const [authError, setAuthError] = useState('');

  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Toggle function between phone & email
  const toggleAuthType = () => {
    setIsPhone(!isPhone);
    // Clear the field & errors to avoid confusion
    setAuthValue('');
    setAuthError('');
  };

  // Called when user presses "Войти"
  // const handleLogin = () => {
  //   // Reset any old errors
  //   setAuthError('');
  //   setPasswordError('');

  //   let hasError = false;

  //   // Check if first field is empty
  //   if (!authValue.trim()) {
  //     setAuthError('Заполните поле');
  //     hasError = true;
  //   }
  //   // Check if password is empty
  //   if (!passwordValue.trim()) {
  //     setPasswordError('Введите пароль');
  //     hasError = true;
  //   }

  //   // If either is empty, stop here
  //   if (hasError) return;

  //   // Otherwise, proceed with your flow (e.g., check validity, call API, etc.)
  //   // For now, just navigate:
  //   navigation.navigate('Home');
  // };


  const handleLogin = async () => {
    setAuthError('');
    setPasswordError('');
  
    let hasError = false;
  
    if (!authValue.trim()) {
      setAuthError('Заполните поле');
      hasError = true;
    }
    if (!passwordValue.trim()) {
      setPasswordError('Введите пароль');
      hasError = true;
    }
    if (hasError) return;
  
    try {
      const response = await axios.post(
        'https://83ed-89-218-54-186.ngrok-free.app/auth/login',
        {
          email: isPhone ? null : authValue, // Если почта
          phone: isPhone ? authValue : null, // Если телефон
          password: passwordValue,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        console.log('Успешный вход:', response.data);
        navigation.navigate('CarDetail'); // Или другой экран
      } else {
        console.log('Ошибка входа:', response.data);
        setAuthError('Неверные данные');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setAuthError('Ошибка сервера');
    }
  };

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={10}
        keyboardShouldPersistTaps="handled">
        {/* Back Button */}
        <View style={styles.header}>
          <AppButton onPress={() => navigation.goBack()} type="icon">
            <ChevronLeftIcon size={32}/>
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
            {/* Conditionally phone vs. email */}
            <AppInput
              label={isPhone ? 'Номер телефона' : 'Почта'}
              placeholder={isPhone ? '+7 (777) 777 77 77' : 'Email'}
              format={isPhone ? formatKazakhPhoneNumber : undefined}
              validate={isPhone ? validateKazakhPhoneNumber : validateEmail}
              numeric={isPhone}
              // Controlled fields
              value={authValue}
              onChangeValue={val => {
                setAuthValue(val);
                // If user is typing, remove any "required" error
                if (authError) setAuthError('');
              }}
              parentError={authError} // Show "Заполните поле" if empty
            />

            {/* Password */}
            <AppInput
              label="Пароль"
              placeholder="Пароль"
              secureTextEntry
              value={passwordValue}
              onChangeValue={val => {
                setPasswordValue(val);
                if (passwordError) setPasswordError('');
              }}
              parentError={passwordError} // Show "Введите пароль" if empty
            />

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
                onPress={() => console.log('Forgot Password pressed')}>
                <Text style={styles.forgotPassword}>Забыли пароль?</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* LOGIN BUTTON */}

          {/* <AppButton title="Войти" onPress={handleLogin} type="primary" /> */}
          <AppButton title="Войти" onPress={() => navigation.navigate('CarDetail')} type="primary" />
          

          {/* ALREADY HAVE AN ACCOUNT? */}
          <Text style={styles.noAccountText}>
            Нету аккаунта?{' '}
            <Text
              style={styles.registerText}
              onPress={() => navigation.replace('Register')}>
              Зарегистрироваться
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const getStyles = (theme: {background: string; text: string}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollContainer: {
      flexGrow: 1,
      paddingHorizontal: 24,
    },
    header: {
      alignItems: 'flex-start',
    },
    innerContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 16,
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
