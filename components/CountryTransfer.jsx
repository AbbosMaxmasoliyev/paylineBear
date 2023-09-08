import { StyleSheet, Text, View, Image } from "react-native";
const CountryTransfer = ({ image }) => {
  return (
    <View style={styles.image}>
      {/* <Image source={require("../assets/images/icons/circle/all.png")} /> */}
      <Image source={image} style={styles.itemImage} />
    </View>
  );
};
export default CountryTransfer;
const styles = StyleSheet.create({
  itemImage: {
    position: "absolute",
    justifyContent: "center",
    flexDirection: "column",
    bottom: -5,
    right: -5,
  },
  image: {
    position: "relative",
  },
});
