import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import EyeOffIcon from '../icons/EyeOff.icon';
import EyeOnIcon from '../icons/EyeOn.icon';

interface AppInputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean; // Optional secure entry
}

const AppInput: React.FC<AppInputProps> = ({ label, placeholder, secureTextEntry = false }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>
        {label}
      </Text>

      {/* Input Field */}
      <View style={[styles.inputContainer, { borderColor: isFocused ? '#007bff' : '#E3E5E5' }]}>
        <TextInput
          style={[styles.input, { color: '#71717A' }]}
          placeholder={placeholder}
          placeholderTextColor="#71717A"
          secureTextEntry={!isPasswordVisible} // Toggle visibility
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Password Visibility Toggle */}
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.iconContainer}>
            {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    padding: 8,
  },
});

export default AppInput;
