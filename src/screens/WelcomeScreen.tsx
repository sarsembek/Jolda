import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/Logo';
import AppButton from '../components/AppButton';
import { RootStackParamList } from '../core/types/RootStackParamList.type';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../theme/ThemeContext';

const WelcomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Welcome'>>();
  const theme = useTheme();
  const styles = getStyles(theme);

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
            <Text style={styles.welcomeText}>
              Добро пожаловать
            </Text>
            <AppButton
              title="Зарегистрироваться"
              onPress={() => navigation.navigate('Register')}
              type="primary"
            />
            <Text style={styles.orText}>или</Text>
            <AppButton
              title="Войти"
              onPress={() => navigation.navigate('Login')}
              type="outline"
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const getStyles = (theme: { isDark: boolean; text: string }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    overlay: {
      flex: 1,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // A consistent dark overlay
      flexDirection: 'column',
    },
    topSection: {
      flex: 0.6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    topText: {
      fontFamily: 'Unbounded-Bold',
      fontSize: 40,
      fontWeight: 'bold',
      marginHorizontal: 32,
      color: '#fff', // Remains white for strong contrast with the overlay
    },
    authContainer: {
      flex: 0.4,
      width: '100%',
      paddingHorizontal: 36,
      paddingVertical: 36,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      backgroundColor: theme.isDark ? '#212121' : '#fff',
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: theme.text,
    },
    orText: {
      marginHorizontal: 10,
      fontSize: 16,
      color: theme.text,
      marginVertical: 8,
    },
  });

export default WelcomeScreen;
