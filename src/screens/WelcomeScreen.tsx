import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen: React.FC = ({}) => {
  const handleRegister = () => {
    // Handle register action
  };

  const handleLogin = () => {
    // Handle login action
  };

  return (
    <View className="flex-1 justify-between">
      <Image
        source={require('../../assets/welcome_screen.png')}
        className="w-full h-1/2 resize-cover"
      />
      <View className="h-[400px] bg-gray-100 items-center justify-center p-5">
        <Text className="text-2xl mb-6 text-center text-gray-800">Добро пожаловать!</Text>
        <Button title="Регистрация" type="primary" onPress={handleRegister} />
        <Button title="Вход" type="outline" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default WelcomeScreen;
