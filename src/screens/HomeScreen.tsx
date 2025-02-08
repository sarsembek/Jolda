import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

// Example icon components (replace with your actual icons)
import MenuIcon from '../icons/Menu.icon';
import SearchIcon from '../icons/Search.icon';

// AppButton you already use, e.g.
import AppButton from '../components/AppButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* Menu button on the left */}
        <AppButton onPress={() => console.log('Menu pressed')} type="icon">
          <MenuIcon />
        </AppButton>

        {/* Center title */}
        <Text style={styles.headerTitle}>Главная</Text>

        {/* Search button on the right */}
        <AppButton onPress={() => console.log('Search pressed')} type="icon">
          <SearchIcon />
        </AppButton>
      </View>

      {/* <View style={styles.content}>
        <Text style={styles.title}>Домашняя страница</Text>
      </View> */}
    </SafeAreaView>
  );
};

const getStyles = (theme: { background: string; text: string }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    /* HEADER STYLES */
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingBottom: 12,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: theme.text,
    },

    /* MAIN CONTENT AREA */
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.text,
    },
  });

export default HomeScreen;
