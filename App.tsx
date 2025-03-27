import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {ThemeProvider, useTheme} from './src/theme/ThemeContext';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import SearchScreen from './src/screens/SearchScreen';
import CarDetailScreen from './src/screens/CarDetailScreen';
import CarModelDetailScreen from './src/screens/CarModelDetailScreen';
import MakingAnOrderScreen from './src/screens/MakingAnOrderScreen';

const Stack = createStackNavigator();

const AppContent = (): React.JSX.Element => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      {/* Use light or dark status bar depending on the theme */}
      <StatusBar barStyle={theme.isDark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        {/* 
          WELCOME SCREEN 
          - gestureEnabled: false prevents swiping back from Welcome to any “previous” screen
          - This ensures the user can’t accidentally go back into a blank stack state.
        */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            gestureEnabled: false,
          }}
        />

        {/* 
          LOGIN SCREEN 
          - Uses a horizontal transition
          - Going “back” from here will return to Welcome
        */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        {/* 
          REGISTER SCREEN 
          - Also uses a horizontal transition
          - Going “back” from here will return to Welcome
        */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        {/* HOME SCREEN */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Добавляем SearchScreen */}
        <Stack.Screen name="Search" component={SearchScreen} />

        {/* Добавляем CarDetailScreen */}
        <Stack.Screen name="CarDetail" component={CarDetailScreen} />

        {/* Добавляем CarModelDetailScreen */}
        <Stack.Screen name="CarModelDetail" component={CarModelDetailScreen} />

        {/* Добавляем MakingAnOrderScreen */}
        <Stack.Screen name="MakingAnOrder" component={MakingAnOrderScreen} />
        
      </Stack.Navigator>
    </View>
  );
};

const getStyles = (theme: {background: string}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
  });

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
