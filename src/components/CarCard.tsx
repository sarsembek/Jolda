import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import Chip from './Chip';
import MapPinnedIcon from '../icons/MapPinned.icon';
import colors from '../theme/colors';

interface CarCardProps {
  brand: string;
  model: string;
  price: string;
  location: string;
  image: ImageSourcePropType;
  onPress?: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ brand, model, price, location, image, onPress }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      {/* Car Image with Dark Overlay using ImageBackground */}
      <ImageBackground source={image} style={styles.imageBackground} resizeMode="cover">
        <View style={styles.overlay} />
        {/* Brand & Model Text */}
        <View style={styles.textOverlay}>
          <Text style={styles.brand}>{brand}</Text>
          <Text style={styles.model}>{model}</Text>
        </View>

        {/* Bottom Info Section inside ImageBackground */}
        <View style={styles.infoContainer}>
          {/* Price Section */}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.currency}>₸</Text>
            <Text style={styles.perDay}>/ день</Text>
          </View>

          {/* Vertical Line Divider */}
          <View style={styles.divider} />

          {/* Smaller Location Chip */}
          <Chip
            type="outline"
            title={location}
            icon={<MapPinnedIcon color={colors.primary} />}
            iconPosition="start"
            style={styles.smallChip}
            textStyle={styles.smallChipText}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const getStyles = (theme: { background: string; text: string; border: string }) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.background,
      borderRadius: 16,
      overflow: 'hidden',
      elevation: 2, // Android shadow (small)
      shadowColor: '#000', // iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      marginBottom: 16,
    },
    imageBackground: {
      width: '100%',
      height: 230, // Increased height to accommodate infoContainer
      justifyContent: 'flex-end', // Aligns infoContainer at the bottom
      borderRadius: 16, // Matches card border
      overflow: 'hidden', // Ensures border consistency
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
    },
    textOverlay: {
      position: 'absolute',
      top: 16,
      left: 16,
    },
    brand: {
      fontSize: 20,
      fontWeight: '700',
      color: '#fff',
    },
    model: {
      fontSize: 16,
      fontWeight: '400',
      color: '#ddd',
    },
    infoContainer: {
      backgroundColor: theme.background, // Semi-transparent white
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16, // Increased padding
      borderBottomLeftRadius: 16, // Ensures seamless transition
      borderBottomRightRadius: 16,
      borderColor: theme.border,
      borderWidth: 1,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    price: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.primary,
    },
    currency: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.primary,
      marginLeft: 4,
    },
    perDay: {
      fontSize: 14,
      fontWeight: '400',
      color: colors.gray,
      marginLeft: 4,
    },
    divider: {
      width: 1,
      height: '80%',
      backgroundColor: colors.borderDefault,
      marginHorizontal: 12, // Space between price and location
    },
    smallChip: {
      paddingVertical: 4, // Reduced height
      paddingHorizontal: 8, // Reduced width
    },
    smallChipText: {
      fontSize: 12, // Smaller text for better fit
    },
  });

export default CarCard;
