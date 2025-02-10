import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type ChipType = 'fill' | 'outline';
type IconPosition = 'start' | 'end';

interface ChipProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  type?: ChipType;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Chip: React.FC<ChipProps> = ({
  title,
  onPress,
  type = 'fill',
  icon,
  iconPosition = 'start',
  style,
  textStyle,
}) => {
  // Access the theme from context
  const theme = useTheme();

  // Base container style
  const containerStyles: StyleProp<ViewStyle>[] = [styles.containerBase];

  // Decide fill or outline style dynamically
  if (type === 'fill') {
    // If it's dark mode, pick a slightly different fill color, etc.
    containerStyles.push({
      backgroundColor: theme.isDark ? '#338BFB' : '#016FEE', // example: primary color variant
    });
  } else if (type === 'outline') {
    containerStyles.push({
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.border, // from theme
    });
  }

  // Base text style
  const chipTextStyles: StyleProp<TextStyle>[] = [styles.textBase];

  // Fill => typically white text, or a color that contrasts the fill
  // Outline => typically the theme.text or some neutral color
  if (type === 'fill') {
    // White text stands out against fill
    chipTextStyles.push({ color: '#FFFFFF' });
  } else if (type === 'outline') {
    // Use the theme text for outline
    chipTextStyles.push({ color: theme.text });
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[...containerStyles, style]}
      activeOpacity={0.7}
    >
      {/* Icon at the start */}
      {icon && iconPosition === 'start' && (
        <View style={styles.iconWrapper}>
          {icon}
        </View>
      )}

      <Text style={[...chipTextStyles, textStyle]}>
        {title}
      </Text>

      {/* Icon at the end */}
      {icon && iconPosition === 'end' && (
        <View style={styles.iconWrapper}>
          {icon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Chip;

/**
 * We keep only shared, static styles here.
 * Dynamic color logic goes in the component above.
 */
const styles = StyleSheet.create({
  containerBase: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9999, // max rounding
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  textBase: {
    fontSize: 16,
    fontWeight: '500',
  },
  iconWrapper: {
    marginHorizontal: 4,
  },
});
