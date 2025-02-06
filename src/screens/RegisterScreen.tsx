import React from 'react';
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

const RegisterScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Register'>>();
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.background}}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true} // makes sure it works on Android too
        extraScrollHeight={20} // adjust as needed for extra spacing
        keyboardShouldPersistTaps="handled">
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
            <Text style={styles.title}>Регистрация</Text>
            <Text style={styles.description}>
              Введите свои персональные данные
            </Text>
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
              <Text
                style={styles.loginText}
                onPress={() => navigation.navigate('Login')}>
                Войти
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const getStyles = (theme: {
  background: string;
  text: string;
  isDark: boolean;
}) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal: 32,
      backgroundColor: theme.background,
      paddingBottom: 32, // ensure there's some bottom padding for the keyboard
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
      color: theme.text, // Replace with an accent color if needed
      fontWeight: 'bold',
    },
  });

export default RegisterScreen;
