import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  FlatList,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Images } from './Constants';

// Ekran genişliğini al
const { width } = Dimensions.get('window');

// Her bir öğe için sabit boyut
const ITEM_SIZE = width * 0.43;

// Öğeler arasındaki boşluk
const SPACING = 5;

export default class App extends Component {
  // Constructor, sınıfın başlatılmasını ve state yönetimini sağlar
  constructor(props) {
    super(props);

    // Animasyon değerini oluştur
    this.scrollX = new Animated.Value(0);
  }

  // Render fonksiyonu, bileşenin görüntüsünü oluşturur
  render() {
    // Kütüphanedeki resimleri içeren dizi
    const LibraryImages = [
      { key: 'left-spacer' },
      ...Images,
      { key: 'right-spacer' },
    ];

    // Ana bileşenin JSX yapısı
    return (
      <View style={styles.container}>
        {/* Ekranın üst kısmındaki durum çubuğunu gizle */}
        <StatusBar hidden />

        {/* Resimleri yatay olarak gösteren FlatList */}
        <FlatList
          horizontal // Yatay yönde sıralama
          data={LibraryImages} // Gösterilecek veri dizisi
          showsHorizontalScrollIndicator={false} // Yatay kaydırma çubuğunu gizle
          snapToInterval={ITEM_SIZE} // Scroll edildiğinde hedef konumları belirle
          bounces={false} // Ekranın kenarına ulaşıldığında sıçramayı devre dışı bırak
          scrollEventThrottle={16} // Scroll olaylarını 60 FPS hızında tetikle
          contentContainerStyle={{ alignItems: 'center' }} // İçerik konteynerinin stilini ayarla
          keyExtractor={(item, index) => `${index}`} // Her öğe için benzersiz bir anahtar üret
          renderItem={({ item, index }) => {
            // İlk ve son öğeler boşluk
            if (index === 0 || index === LibraryImages.length - 1) {
              return <View style={styles.spacerContainer} />;
            }

            // Diğer durumda resmi içeren TouchableOpacity
            return (
              <View key={item.key} style={styles.movieContainer}>
                <TouchableOpacity
                  onPress={this.props.onPress} // Dışarıdan gelen onPress fonksiyonunu çağır
                  style={styles.movieInner}>
                  {/* Resim */}
                  <Image source={item} style={styles.posterImage} />
                </TouchableOpacity>
              </View>
            );
          }}
          onScroll={Animated.event(
            // Scroll olayını dinle
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            { useNativeDriver: false }
          )}
        />

      </View>
    );
  }
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  container: {},
  movieContainer: {
    width: ITEM_SIZE,
  },
  movieInner: {
    alignItems: 'center',
    marginHorizontal: SPACING,
    padding: SPACING * 0.5,
    backgroundColor: 'white',
    borderRadius: 24,
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 0.9,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
  },
  spacerContainer: {
    height: 200,
    width: width - ITEM_SIZE / 0.55,
  },
});
