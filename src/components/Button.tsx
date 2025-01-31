import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

type ButtonType = 'primary' | 'outline';

interface ButtonProps {
  title: string;
  type?: ButtonType;
  onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ title, type = 'primary', onPress }) => {
  return (
    <TouchableOpacity
      className={type === 'primary' ? 'bg-blue-500 rounded-lg p-4 my-2 items-center' : 'border-2 border-blue-500 rounded-lg p-4 my-2 items-center'}
      onPress={onPress}
    >
      <Text className={type === 'primary' ? 'text-white text-lg font-bold' : 'text-blue-500 text-lg font-bold'}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
