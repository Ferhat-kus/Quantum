import React, { useRef } from "react";
import { View, Image, StatusBar, FlatList, Animated, TouchableOpacity } from "react-native";
import { Images } from "./Constants";
import styles, { ITEM_SIZE } from "./Styles";

export default function App({onPress}) {
  const MovieImages = [
    { key: "left-spacer" },
    ...Images, 
    { key: "right-spacer" },
  ];

  // const  = this.props;

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        horizontal
        data={MovieImages}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        bounces={false}
        scrollEventThrottle={16} // 60FPS
        contentContainerStyle={{ alignItems: "center" }}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => {
          if (index === 0 || index === MovieImages.length - 1) {
            return <View style={styles.spacerContainer} />;
          }

          return (
            <View key={index} style={styles.movieContainer}>
              <TouchableOpacity onPress={onPress} style={styles.movieInner}>
                <Image source={item} style={styles.posterImage} />
              </TouchableOpacity>
            </View>
          );
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
    </View>
  );
}
