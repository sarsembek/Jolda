import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <Text className="text-2xl mb-6 text-center">Login</Text>
      <TextInput
        className="h-10 border border-gray-300 mb-3 px-2"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className="h-10 border border-gray-300 mb-3 px-2"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />z``
    </View>
  );
};

export default LoginScreen;
