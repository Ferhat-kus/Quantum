import { StyleSheet, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
export const ITEM_SIZE = width * 0.43;
export const SPACING = 5;

const styles = StyleSheet.create({
  container: {
  },
  movieContainer: {
    width: ITEM_SIZE,
  },
  movieInner: {
    alignItems: "center",
    marginHorizontal: SPACING,
    padding: SPACING * 0.5,
    backgroundColor: "white",
    borderRadius: 24,
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 0.9,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
  },
  spacerContainer: {
    height: 200,
    width: width - ITEM_SIZE / 0.55,
  },
});

export default styles;
