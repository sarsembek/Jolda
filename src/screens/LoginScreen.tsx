import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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

const LoginScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true} // ensures it also works on Android
        extraScrollHeight={10} // increase for more space above the keyboard
        keyboardShouldPersistTaps="handled">
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

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            {/* Pass style={{ color: theme.text }} (or whatever prop your AppInput uses for text style) */}
            <AppInput label="Номер телефона" placeholder="Номер телефона" />
            <AppInput label="Пароль" placeholder="Пароль" secureTextEntry />

            {/* Forgot Password */}
            <Text style={styles.forgotPassword}>Забыли пароль?</Text>
          </View>

          {/* Login Button */}
          <AppButton
            title="Войти"
            onPress={() => console.log('Login pressed')}
            type="primary"
          />

          {/* Already Have an Account */}
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
      marginBottom: 16,
    },
    innerContainer: {
      flexGrow: 1,
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
    forgotPassword: {
      alignSelf: 'flex-end',
      fontSize: 14,
      color: theme.text,
      marginBottom: 24,
    },
    noAccountText: {
      fontSize: 14,
      color: theme.text,
      marginTop: 32,
    },
    registerText: {
      color: colors.primary,
      fontWeight: 'bold',
    },
  });

export default LoginScreen;
