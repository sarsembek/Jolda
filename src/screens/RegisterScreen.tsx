import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppButton from '../components/AppButton';
import Logo from '../components/Logo';
import AppInput from '../components/AppInput';
import ChevronLeftIcon from '../icons/ChevronLeft.icon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../core/types/RootStackParamList.type';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../theme/ThemeContext';
import colors from '../theme/colors';
import {
  formatKazakhPhoneNumber,
  validateKazakhPhoneNumber,
  validateEmail,
} from '../utils/validate';

const RegisterScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Register'>>();
  const theme = useTheme();

  // Controlled inputs & errors
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');

  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Handle the registration button
  const handleRegister = () => {
    // Clear any old errors
    setFirstNameError('');
    setLastNameError('');
    setPhoneError('');
    setEmailError('');

    let hasError = false;

    // Check if fields are empty (or do deeper validation, if needed)
    if (!firstName.trim()) {
      setFirstNameError('Заполните имя');
      hasError = true;
    }
    if (!lastName.trim()) {
      setLastNameError('Заполните фамилию');
      hasError = true;
    }
    if (!phone.trim()) {
      setPhoneError('Укажите номер телефона');
      hasError = true;
    }
    if (!email.trim()) {
      setEmailError('Укажите почту');
      hasError = true;
    }

    // If any required field is empty, stop
    if (hasError) return;

    // Otherwise, proceed (e.g., call an API)
    console.log('Register pressed with:', {
      firstName,
      lastName,
      phone,
      email,
    });
  };

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.background}}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        extraScrollHeight={10}
        keyboardShouldPersistTaps="handled">
        {/* Header with Back Button */}
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
            <Text style={styles.title}>Регистрация</Text>
            <Text style={styles.description}>
              Введите свои персональные данные
            </Text>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <AppInput
              label="Имя"
              placeholder="Ваше имя"
              value={firstName}
              onChangeValue={val => {
                setFirstName(val);
                if (firstNameError) setFirstNameError('');
              }}
              parentError={firstNameError}
            />
            <AppInput
              label="Фамилия"
              placeholder="Ваша фамилия"
              value={lastName}
              onChangeValue={val => {
                setLastName(val);
                if (lastNameError) setLastNameError('');
              }}
              parentError={lastNameError}
            />
            <AppInput
              label="Номер телефона"
              placeholder="+7 (777) 777 77 77"
              format={formatKazakhPhoneNumber}
              validate={validateKazakhPhoneNumber}
              numeric
              value={phone}
              onChangeValue={val => {
                setPhone(val);
                if (phoneError) setPhoneError('');
              }}
              parentError={phoneError}
            />
            <AppInput
              label="Почта"
              placeholder="Введите вашу почту"
              validate={validateEmail}
              value={email}
              onChangeValue={val => {
                setEmail(val);
                if (emailError) setEmailError('');
              }}
              parentError={emailError}
            />
          </View>

          {/* Register Button, orText, and Already Have Account */}
          <View style={styles.footer}>
            <AppButton
              title="Зарегистрироваться"
              onPress={handleRegister}
              type="primary"
            />
            <Text style={styles.orText}>или</Text>
            <Text style={styles.alreadyAccount}>
              Уже есть аккаунт?{' '}
              <Text
                style={styles.loginText}
                onPress={() => navigation.replace('Login')}>
                Войти
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const getStyles = (theme: {
  background: string;
  text: string;
  isDark: boolean;
}) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal: 24,
      backgroundColor: theme.background,
      paddingBottom: 32,
    },
    header: {
      alignItems: 'flex-start',
    },
    innerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 12,
    },
    titleContainer: {
      width: '100%',
      marginBottom: 16,
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
      marginBottom: 20,
    },
    footer: {
      width: '100%',
      alignItems: 'center',
      gap: 16,
    },
    orText: {
      fontSize: 14,
      color: theme.text,
    },
    alreadyAccount: {
      fontSize: 14,
      color: theme.text,
    },
    loginText: {
      color: colors.primary,
      fontWeight: 'bold',
    },
  });
