import React, { StrictMode } from 'react';
import { useColorScheme, SafeAreaView, StatusBar } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    flex: 1,
  };

  return (
    <StrictMode>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <WelcomeScreen />
      </SafeAreaView>
    </StrictMode>
  );
}

export default App;
