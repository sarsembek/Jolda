import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageViewing from "react-native-image-viewing";
import ChevronLeftIcon from '../icons/ChevronLeft.icon';
import ShareIcon from '../icons/Share.icon';
import HeartIcon from '../icons/Heart.icon';
import RedHeartIcon from '../icons/RedHeart.icon';
import MapIcon from '../icons/Map.icon';
import CarIcon from '../icons/Car.icon';
import EditIcon from '../icons/Edit.icon';
import ChevronRightIcon from '../icons/ChevronRight.icon';
import ContinueButton from '../components/ContinueButton';

const { width } = Dimensions.get('window');

const CarDetailScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isImageViewerVisible, setImageViewerVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: any }) => {
    if (viewableItems.length > 0) {
      setCurrentImageIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
  

  const images = [
    { uri: 'https://avatars.mds.yandex.net/get-verba/787013/2a000001809379c4dd3651e414167a8a9c33/auto_main' },
    { uri: 'https://avatars.mds.yandex.net/get-autoru-vos/5930866/b4688abb4449da02e61ba60192118d59/1200x900' },
    { uri: 'https://www.zr.ru/d/story/4f/366927/201110041633_all_new_toyota_camry_exterior.jpg' }
  ];

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Галерея изображений */}
        <View style={styles.imageContainer}>
          <FlatList
            data={images}
            renderItem={({ item, index }: { item: { uri: string }; index: number }) => (
              <TouchableOpacity onPress={() => {
                setSelectedImageIndex(index);
                setTimeout(() => setImageViewerVisible(true), 100);
              }}>
                <Image source={{ uri: item.uri }} style={styles.image} />
              </TouchableOpacity>
            )}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
          {/* Индекатор изображений */}
          <View style={styles.pagination}>
            <Text style={styles.paginationText}>{currentImageIndex + 1} / {images.length}</Text>
          </View>

          {/* Верхний компонент с кнопками */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevronLeftIcon />
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <TouchableOpacity>
                <ShareIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleFavorite}>
                {isFavorite ? <RedHeartIcon /> : <HeartIcon />}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.carInfo}>
          {/* Информация о машине */}
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Toyota Camry XV50</Text>
            <Text style={styles.subtitle}>2013 • 4.8 ★</Text>
          </View>

          {/* Дополнительная информация */}
          
          <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('CarModelDetail' as never)}>
            <Text style={styles.sectionTitle}>Дополнительная информация</Text>
            <View style={styles.row}>
              <CarIcon />
              <View style={styles.section}>
                <Text style={styles.text}>Тип кузова: Седан</Text>
                <Text style={styles.text}>Коробка передач: Автомат</Text>
                <Text style={styles.text}>Цвет: Черный</Text>
              </View>
              <ChevronRightIcon />
            </View>
          </TouchableOpacity>
          
          <View style={styles.border}></View>

          {/* Локация */}
          <TouchableOpacity>
            <View style={styles.selectMap}>
              <View style={styles.rowIcon}>
                  <MapIcon />
                <Text style={styles.textIcon}>ул. Достык 98</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Время аренды */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Время аренды</Text>
            <View style={styles.row}>
              <Text style={styles.text}>03 апреля 09:00</Text>
              <TouchableOpacity>
                <EditIcon />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>04 апреля 18:00</Text>
          </View>

          <View style={styles.border}></View>

          {/* Требования */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Требования</Text>
            <Text style={styles.text}>Возраст: от 21 года</Text>
            <Text style={styles.text}>Стаж вождения: от 2 лет</Text>
            <Text style={styles.text}>Документы: Паспорт, Вод. удостоверение</Text>
          </View>

          <View style={styles.border}></View>

          {/* Страховка */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Страховка</Text>
            <Text style={styles.text}>КАСКО включено</Text>
            <Text style={styles.text}>ОСАГО включено</Text>
          </View>
        </View>
      </ScrollView>

      {/* Открытие изображений в полноэкранном режиме */}
      <ImageViewing
        key={selectedImageIndex} 
        images={images}
        imageIndex={selectedImageIndex}
        visible={isImageViewerVisible}
        onRequestClose={() => setImageViewerVisible(false)}
      />

      {/* Цена и кнопка */}
      <View style={styles.footer}>
        <Text style={styles.price}>25000 тг / день </Text>
        <ContinueButton title="Продолжить" onPress={() => navigation.navigate('MakingAnOrder' as never)} />
      </View>
    </SafeAreaView>
  );
};

export default CarDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingBottom: 100 }, // Чтобы футер не перекрывал контент
  imageContainer: { height: 250, position: 'relative' },
  image: { width, height: '100%', resizeMode: 'cover' },
  carInfo: { borderRadius: 32 },
  header: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRight: { flexDirection: 'row', gap: 16 },
  infoContainer: { padding: 16, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 18, color: 'gray' },
  section: { paddingHorizontal: 16, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  text: { fontSize: 16, color: '#333' },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E3E5E5',
  },
  price: { fontSize: 20, fontWeight: 'bold' },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '90%',
    bottom: 5,
    left: 16,
    right: 16,
  },
  rowIcon: {
    borderWidth: 2,
    borderColor: '#f0f0f0',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    height: 35,
  },
  textIcon: { fontSize: 12, color: '#333', left: 5 },
  selectMap: { alignItems: 'center', marginVertical: 16 },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{ translateX: -25 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  paginationText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
