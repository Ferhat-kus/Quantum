import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Images } from './data';
import Data from './data';
// Ekran genişliğini al
const { width } = Dimensions.get('window');

// Her bir öğe için sabit boyut
const ITEM_SIZE = width * 0.35;

// Öğeler arasındaki boşluk
const SPACING = 5;

export default class App extends Component {

  // Render fonksiyonu, bileşenin görüntüsünü oluşturur
  render() {
    return (
      <View style={styles.container}>
        {/* Ekranın üst kısmındaki durum çubuğunu gizle */}
        <StatusBar hidden />

        {/* Resimleri yatay olarak gösteren FlatList */}
        <FlatList
          horizontal // Yatay yönde sıralama
          data={Data} // Gösterilecek veri dizisi
          showsHorizontalScrollIndicator={false} // Yatay kaydırma çubuğunu gizle
          snapToInterval={ITEM_SIZE} // Scroll edildiğinde hedef konumları belirle
          contentContainerStyle={{ alignItems: 'center' }} // İçerik konteynerinin stilini ayarla
          renderItem={({ item, index }) => {
            // Diğer durumda resmi içeren TouchableOpacity
            return (
              <View key={item.key} style={styles.movieContainer}>
                <TouchableOpacity
                  onPress={this.props.onPress} // Dışarıdan gelen onPress fonksiyonunu çağır
                  style={styles.movieInner}>
                  {/* Resim */}
                  <ImageBackground source={item.Images} style={styles.posterImage}>
                    <Text style={styles.Title}>{item.Title}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          }} 
        />

      </View>
    );
  }
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  container: {
    height: '80%',
  },
  movieContainer: {
    width: ITEM_SIZE,
  },
  movieInner: {
    alignItems: 'center',
    marginHorizontal: SPACING,
    padding: SPACING * 0.5,
    backgroundColor: 'white',
    borderRadius: 22,
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 0.9,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize:20,
    fontFamily:'Roboto-Bold',
    color: 'white',
    textAlign:'center',
  },
  spacerContainer: {
    height: 100,
    // width: width - ITEM_SIZE / 0.46,
  },
});
