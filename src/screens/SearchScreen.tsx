import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import SearchHeader from '../components/SearchHeader';
import CarItem from '../components/CarItem'; // Компонент для отображения машин

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  
  const cars = [
    { id: '1', name: 'Toyota Camry' },
    { id: '2', name: 'BMW X5' },
    { id: '3', name: 'Mercedes-Benz C-Class' },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Верхний компонент с поиском */}
      <SearchHeader query={query} setQuery={setQuery} />

      {/* Список машин */}
        <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <CarItem image={item.image} name={item.name} price={item.price} />
            )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});

export default SearchScreen;
