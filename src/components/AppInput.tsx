import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import EyeOffIcon from '../icons/EyeOff.icon';
import EyeOnIcon from '../icons/EyeOn.icon';
import colors from '../theme/colors';

interface AppInputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onFocus?: () => void;
  /**
   * A function to format the user's input (phone, etc.).
   * If provided, we call it on each text change.
   */
  format?: (value: string) => string;
  /**
   * A function to validate the user's input.
   * It should return an error string if invalid, or '' if valid.
   */
  validate?: (value: string) => string;
  /**
   * If true, uses a numeric keyboard (digits only).
   */
  numeric?: boolean;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  placeholder,
  secureTextEntry = false,
  onFocus,
  format,
  validate,
  numeric = false,
}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const textColor = isDarkMode ? '#FFFFFF' : '#000000';
  const placeholderColor = isDarkMode ? '#CCCCCC' : '#888888';

  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  // Called whenever text changes
  const handleChangeText = (input: string) => {
    // 1) Format (if provided)
    let formattedValue = input;
    if (format) {
      formattedValue = format(input);
    }

    // 2) Validate (if provided)
    let errorMessage = '';
    if (validate) {
      errorMessage = validate(formattedValue);
    }

    setValue(formattedValue);
    setError(errorMessage);
  };

  const handleFocus = () => {
    setIsFocused(true);
    // If using phone format, and the input is empty on focus, insert '7' so that +7 shows up immediately
    if (format && !value) {
      handleChangeText('7');
    }
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={{ width: '100%', marginBottom: 16 }}>
      {/* Label */}
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>

      {/* Input Field Container */}
      <View
        style={[
          styles.inputContainer,
          { borderColor: isFocused ? '#007bff' : '#E3E5E5' },
        ]}
      >
        <TextInput
          style={[styles.input, { color: textColor }]}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          secureTextEntry={!isPasswordVisible}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          value={value}
          // Use a numeric keyboard if numeric is true
          keyboardType={numeric ? 'number-pad' : 'default'}
        />

        {/* Toggle password visibility (if secureTextEntry) */}
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.iconContainer}
          >
            {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
          </TouchableOpacity>
        )}
      </View>

      {/* Error Text */}
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
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
  errorText: {
    marginTop: 4,
    fontSize: 14,
    color: colors.error, // your theme's error color
  },
});
