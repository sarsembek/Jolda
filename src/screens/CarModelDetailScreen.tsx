import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext'; // Импорт useTheme

const CarModelDetailScreen = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    
    const carDetails = {
        brand: 'Toyota',
        model: 'Camry',
        generation: '50',
        vechicle_type: 'Седан',
        transmission: 'Автомат',
        year: '2015',
        color: 'Черный',
        engine_capacity: '2.5 л',
        drive_type: 'Передний',
        number_of_doors: '4',
        number_of_seats: '5',
        steeringWheel: 'Левый',
    };

    return (
        <ScrollView style={getStyles(theme).container}>
            <Text style={getStyles(theme).title}>
                {carDetails.brand} {carDetails.model} {carDetails.generation}
            </Text>
            <View style={getStyles(theme).infoContainer}>
                {Object.entries(carDetails)
                    .filter(([key]) => !['brand', 'model', 'generation'].includes(key))
                    .map(([key, value]) => (
                        <View key={key} style={getStyles(theme).row}>
                            <Text style={getStyles(theme).label}>{translateKey(key)}:</Text>
                            <Text style={getStyles(theme).value}>{value}</Text>
                        </View>
                    ))}
            </View>
            <View style={getStyles(theme).backButton}>
                <AppButton title="Назад" onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    );
};


const translateKey = (key) => {
    const translations = {
        vechicle_type: 'Кузов',
        transmission: 'Трансмиссия',
        year: 'Год',
        color: 'Цвет',
        engine_capacity: 'Объем двигателя',
        drive_type: 'Привод',
        number_of_doors: 'Количество дверей',
        number_of_seats: 'Количество мест',
        steeringWheel: 'Расположение руля',
    };
    return translations[key] || key;
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 15,
      paddingTop: 15,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme.text,
      marginBottom: 20,
    },
    infoContainer: {
      backgroundColor: '#f8f8f8',
      padding: 10,
      borderRadius: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.text,
    },
    value: {
      fontSize: 16,
      color: theme.text,
    },
    backButton: {
      top: 10,
      alignItems: 'center',
      paddingTop: 15,
    },
  });

export default CarModelDetailScreen;
