import React, { useState, ReactElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

export type ButtonType = 'primary' | 'outline' | 'icon';

interface ContinueButtonProps {
  title?: string;
  onPress: () => void;
  type?: ButtonType;
  children?: ReactElement<{ color?: string }>; // Ensure children accept `color`
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ title, onPress, type = 'primary', children }) => {
  const [isPressed, setIsPressed] = useState(false);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const containerStyle = [
    styles.button,
    type === 'primary' ? styles.primaryButton : styles.outlineButton,
    type === 'icon' && {
      ...styles.iconButton,
      backgroundColor: isPressed ? (isDarkMode ? '#555' : '#D1D5DB') : 'transparent',
    },
  ];

  const textStyle = [
    styles.buttonText,
    type === 'outline' && styles.outlineText,
    type === 'icon' && { color: isDarkMode ? '#fff' : '#007bff' },
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      activeOpacity={0.7}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View style={styles.content}>
        {children && React.isValidElement(children) ? React.cloneElement(children, { color: isDarkMode ? '#fff' : '#000' }) : null}
        {title && <Text style={textStyle}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '40%',
  },
  primaryButton: {
    backgroundColor: '#007bff',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#007bff',
    backgroundColor: 'transparent',
  },
  iconButton: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: 'auto',
    borderRadius: 16,
    borderColor: '#E3E5E5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineText: {
    color: '#007bff',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ContinueButton;
