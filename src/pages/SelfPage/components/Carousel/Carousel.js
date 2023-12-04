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

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = width * 0.43;
const SPACING = 5;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.scrollX = new Animated.Value(0);
  }

  render() {
    const LibraryImages = [
      { key: 'left-spacer' },
      ...Images,
      { key: 'right-spacer' },
    ];

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <FlatList
          horizontal
          data={LibraryImages}
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_SIZE}
          bounces={false}
          scrollEventThrottle={16} // 60FPS
          contentContainerStyle={{ alignItems: 'center' }}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item, index }) => {
            if (index === 0 || index === LibraryImages.length - 1) {
              return <View style={styles.spacerContainer} />;
            }

            return (
              <View key={item.key} style={styles.movieContainer}>
                <TouchableOpacity
                  onPress={this.props.onPress}
                  style={styles.movieInner}>
                  <Image source={item} style={styles.posterImage} />
                </TouchableOpacity>
              </View>
            );
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.scrollX } } }],
            { useNativeDriver: false }
          )}
        />
      </View>
    );
  }
}

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
