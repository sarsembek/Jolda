import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeContext';

import MenuIcon from '../icons/Menu.icon';
import SearchIcon from '../icons/Search.icon';
import AppButton from '../components/AppButton';
import Chip from '../components/Chip';
import MapPinIcon from '../icons/MapPin.icon';
import colors from '../theme/colors';

// Our combined hook
import { useLocationAddress } from '../hooks/useLocationAddress';

const HomeScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  // This hook handles both geolocation & reverse geocoding
  const { address, error, loading } = useLocationAddress();

  // Decide the title to show in the Chip
  let chipTitle = 'Загрузка...';
  if (!loading) {
    chipTitle = error || (address ?? 'Адрес не найден');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <AppButton onPress={() => console.log('Menu pressed')} type="icon">
          <MenuIcon />
        </AppButton>
        <Text style={styles.headerTitle}>Главная</Text>
        <AppButton onPress={() => console.log('Search pressed')} type="icon">
          <SearchIcon />
        </AppButton>
      </View>

      {/* Location Chip */}
      <View style={styles.locationContainer}>
        <Chip
          type="outline"
          title={chipTitle}
          icon={<MapPinIcon color={colors.primary} />}
          iconPosition="start"
        />
      </View>
    </SafeAreaView>
  );
};

const getStyles = (theme: { background: string; text: string }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingBottom: 6,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.text,
    },
    locationContainer: {
      alignItems: 'center',
    },
  });

export default HomeScreen;
