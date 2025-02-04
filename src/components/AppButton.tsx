import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export type ButtonType = 'primary' | 'outline';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  type?: ButtonType;
}

const AppButton: React.FC<AppButtonProps> = ({ title, onPress, type = 'primary' }) => {
  const containerStyle =
    type === 'primary' ? styles.primaryContainer : styles.outlineContainer;

  const buttonColor = type === 'primary' ? '#fff' : '#007bff';

  return (
    <View style={containerStyle}>
      <Button title={title} onPress={onPress} color={buttonColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: '#007bff',
    borderRadius: 32,
    overflow: 'hidden', // ensure the border radius clips the Button
    width: '100%',
    paddingVertical: 8,
  },
  outlineContainer: {
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 32,
    overflow: 'hidden',
    width: '100%',
    paddingVertical: 8,
  },
});

export default AppButton;
