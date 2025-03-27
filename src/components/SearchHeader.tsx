import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChevronLeftIcon from '../icons/ChevronLeft.icon';

import FilterIcon from '../icons/Filter.icon.tsx';
import AppButton from '../components/AppButton';

const SearchHeader = ({ query, setQuery }: { query: string; setQuery: (text: string) => void }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Кнопка "назад" */}
      <AppButton onPress={() => navigation.goBack()} type="icon">
            <ChevronLeftIcon />
        </AppButton>

      {/* Поле ввода поиска */}
      <TextInput
        style={styles.input}
        placeholder="Поиск..."
        value={query}
        onChangeText={setQuery}
      />

      {/* Кнопка "фильтр" */}
      <AppButton onPress={() => navigation.goBack()} type="icon">
            <FilterIcon />
          </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 10,
  },
});

export default SearchHeader;
