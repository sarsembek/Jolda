// AppInput.tsx
import React, {useState} from 'react';
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
  /** Value controlled by the parent */
  value: string;
  /** Callback to update parent's state */
  onChangeValue: (val: string) => void;
  /** An error string from the parent (e.g., "Field is required") */
  parentError?: string;

  secureTextEntry?: boolean;
  onFocus?: () => void;
  /**
   * A function to format the user's input (phone, etc.).
   * Called on each text change.
   */
  format?: (value: string) => string;
  /**
   * A function to validate the user's input (if you want).
   * Returns an error string if invalid, or '' if valid.
   * We'll show it only if there's no parentError, for example.
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
  value,
  onChangeValue,
  parentError,

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

  // We'll store local validation error only if you'd like to show format/validate errors
  const [localError, setLocalError] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  // For password toggling
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  // Called whenever text changes in the TextInput
  const handleChangeText = (input: string) => {
    // 1) Format if provided
    let formattedValue = input;
    if (format) {
      formattedValue = format(input);
    }

    // 2) Validate if provided
    let errorMessage = '';
    if (validate) {
      errorMessage = validate(formattedValue);
    }
    setLocalError(errorMessage);

    // 3) Notify parent about the final string
    onChangeValue(formattedValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
    // If using phone format, and the input is empty on focus, insert '7' so that +7 shows up
    if (format && !value) {
      handleChangeText('7');
    }
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Decide which error to display:
  // - If the parent is forcing an error (e.g. "Field required"), show that first
  // - Otherwise, show the local validation error from phone/email logic
  const finalError = parentError || localError;

  return (
    <View style={{width: '100%', marginBottom: 16}}>
      {/* Label */}
      <Text style={[styles.label, {color: textColor}]}>{label}</Text>

      {/* Input Field Container */}
      <View
        style={[
          styles.inputContainer,
          {borderColor: isFocused ? '#007bff' : '#E3E5E5'},
        ]}>
        <TextInput
          style={[styles.input, {color: textColor}]}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          secureTextEntry={!isPasswordVisible}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          value={value} // fully controlled
          keyboardType={numeric ? 'number-pad' : 'default'}
        />

        {/* Toggle password visibility (if secureTextEntry) */}
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.iconContainer}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
          </TouchableOpacity>
        )}
      </View>

      {/* Error Text */}
      {!!finalError && <Text style={styles.errorText}>{finalError}</Text>}
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
