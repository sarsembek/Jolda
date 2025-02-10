import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useTheme } from '../theme/ThemeContext';

import MenuIcon from '../icons/Menu.icon';
import SearchIcon from '../icons/Search.icon';
import AppButton from '../components/AppButton';
import Chip from '../components/Chip';
import MapPinIcon from '../icons/MapPin.icon';
import colors from '../theme/colors';

import { useLocationAddress } from '../hooks/useLocationAddress';
import CarCard from '../components/CarCard';

// Filter options for chips
const filterTypes = [
  { label: 'Все', type: 'fill' },
  { label: 'Эконом', type: 'outline' },
  { label: 'Комфорт', type: 'outline' },
  { label: 'Бизнес', type: 'outline' },
];

// Popular car brands
const carBrands = [
  { name: 'Toyota', image: require('../../assets/images/toyota.png') },
  { name: 'BMW', image: require('../../assets/images/bmw.png') },
  { name: 'Chevrolet', image: require('../../assets/images/chevrolet.png') },
  { name: 'Mercedes', image: require('../../assets/images/mercedes.png') },
  { name: 'Audi', image: require('../../assets/images/audi.png') },
];

// Sample cars for "Машины рядом"
const nearbyCars = [
  {
    id: '1',
    brand: 'Porsche',
    model: 'Taycan',
    price: '100 000',
    location: 'ул Достык 98',
    image: require('../../assets/images/porsche-taycan.jpg'),
  },
  {
    id: '2',
    brand: 'Porsche',
    model: 'Taycan',
    price: '100 000',
    location: 'ул Достык 98',
    image: require('../../assets/images/porsche-taycan.jpg'),
  },
  {
    id: '3',
    brand: 'Porsche',
    model: 'Taycan',
    price: '100 000',
    location: 'ул Достык 98',
    image: require('../../assets/images/porsche-taycan.jpg'),
  },
];

const HomeScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  // Get the current address using the hook
  const { address, error, loading } = useLocationAddress();

  // State for selected filter
  const [selectedFilter, setSelectedFilter] = useState('Все');

  // State for selected brand
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Decide the title to show in the Chip
  let chipTitle = 'Загрузка...';
  if (!loading) {
    chipTitle = error || (address ?? 'Адрес не найден');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed HEADER */}
      <View style={styles.header}>
        <AppButton onPress={() => console.log('Menu pressed')} type="icon">
          <MenuIcon />
        </AppButton>
        <Text style={styles.headerTitle}>Главная</Text>
        <AppButton onPress={() => console.log('Search pressed')} type="icon">
          <SearchIcon />
        </AppButton>
      </View>

      {/* SCROLLABLE CONTENT */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Location Chip (Static) */}
        <View style={styles.locationContainer}>
          <Chip
            type="outline"
            title={chipTitle.length > 25 ? `${chipTitle.substring(0, 22)}...` : chipTitle}
            icon={<MapPinIcon color={colors.primary} />}
            iconPosition="start"
            style={styles.chip}
          />
        </View>

        {/* Filters Section (Scrollable Chips) */}
        <View style={styles.sharedContainer}>
          <Text style={styles.sharedTitle}>Обзор</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
            {filterTypes.map((filter, index) => (
              <Chip
                key={index}
                title={filter.label}
                type={selectedFilter === filter.label ? 'fill' : 'outline'}
                onPress={() => setSelectedFilter(filter.label)}
                style={styles.filterChip}
              />
            ))}
          </ScrollView>
        </View>

        {/* Popular Car Brands Slider */}
        <View style={styles.brandContainer}>
          <Text style={styles.sharedTitle}>Популярные бренды</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandSlider}>
            {carBrands.map((brand, index) => (
              <TouchableOpacity key={index} style={styles.brandItem} onPress={() => setSelectedBrand(brand.name)}>
                {/* Brand Image with Conditional Border */}
                <Image
                  source={brand.image}
                  style={[
                    styles.brandImage,
                    selectedBrand === brand.name ? styles.selectedBrand : styles.defaultBrand,
                  ]}
                  resizeMode="contain"
                />
                <Text style={styles.brandName}>{brand.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Nearby Cars Section */}
        <View style={styles.nearbyContainer}>
          <Text style={styles.sharedTitle}>Машины рядом</Text>
          <FlashList
            data={nearbyCars}
            renderItem={({ item }) => (
              <CarCard
                brand={item.brand}
                model={item.model}
                price={item.price}
                location={item.location}
                image={item.image}
              />
            )}
            estimatedItemSize={220}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const getStyles = (theme: { background: string; text: string; border: string }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollContainer: {
      flexGrow: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingBottom: 6,
      backgroundColor: theme.background,
      zIndex: 10,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.text,
    },
    locationContainer: {
      alignItems: 'center',
      marginHorizontal: 32,
      marginBottom: 8,
    },
    chip: {
      maxWidth: '100%',
      paddingHorizontal: 12,
    },
    sharedContainer: {
      marginHorizontal: 16,
      marginTop: 12,
    },
    sharedTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 8,
    },
    filtersContainer: {
      flexDirection: 'row',
      gap: 8,
    },
    filterChip: {
      marginRight: 8,
    },
    brandContainer: {
      marginHorizontal: 16,
      marginTop: 22,
    },
    brandSlider: {
      flexDirection: 'row',
    },
    brandItem: {
      alignItems: 'center',
      marginRight: 16,
    },
    brandImage: {
      width: 80,
      height: 80,
      borderRadius: 12,
      borderWidth: 2,
    },
    selectedBrand: {
      borderColor: colors.primary, // Blue border when selected
    },
    defaultBrand: {
      borderColor: theme.border, // Default gray border
    },
    brandName: {
      marginTop: 4,
      fontSize: 14,
      fontWeight: '500',
      color: theme.text,
    },
    nearbyContainer: {
      marginHorizontal: 16,
      marginTop: 22,
    },
  });

export default HomeScreen;
