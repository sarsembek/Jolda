import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import MaterialCheckIcon from '../icons/MaterialCheck.icon';

interface AppCheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const AppCheckbox: React.FC<AppCheckboxProps> = ({ label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const toggleCheckbox = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox} activeOpacity={0.7}>
      <View style={[styles.checkbox, isChecked && styles.checkedBox]}>
        {isChecked && <MaterialCheckIcon size={18} color={isDarkMode ? '#000' : '#fff'} />}
      </View>
      {label && <Text style={[styles.label, isDarkMode && { color: '#fff' }]}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checkedBox: {
    backgroundColor: '#007bff',
  },
  label: {
    fontSize: 14,
    color: '#000',
  },
});

export default AppCheckbox;
