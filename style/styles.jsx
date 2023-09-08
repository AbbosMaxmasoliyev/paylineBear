import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
const { height, width } = Dimensions.get("screen")
let GlobalStyle = StyleSheet.create({
  btn: {
    
    borderRadius: 25,
    
    backgroundColor: "#FF6A00",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    width: "100%",
    color: "#fff",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "MontserratRegular",
    lineHeight: 40,
    fontSize: 20,
  },

  title: {
    color: "#FFB332",
    fontFamily: "MontserratRegular",
    width: "100%",
    textAlign: "center",
    fontSize: 25,
  },
  background: {
    padding: 5,
    backgroundColor: "#FF6A00",
    borderRadius: 10,
  },
  inputBlock: {
    padding: 12,
    position: "relative",
    width: "80%",
    backgroundColor: "#fff3",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 5,
    zIndex: 2,
  },
  key: {
    width: 30,
    height: 30,
    top: 19,
    left: 28,
    bottom: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  keyboard: {
    width: "100%",
    height: "40%",
    position: "absolute",
    zIndex: 3,
    bottom: 0,

    backgroundColor: "#000",
    borderRadius: 15,
  },
  internal: {
    borderWidth: 1,
    borderColor: "rgba(255, 130, 0, 0.40)",
    borderRadius: 20,
    position: "relative",
    backgroundColor: "rgba(68, 67, 67, 0.20)",
  },
  gradient: {
    backgroundColor: "#26262a",
    minWidth: width,
    minHeight: "100%",
  },
  left: {

    position: "absolute",
    width: 500,
    height: 500,
    top: "5%",
    left: -250,
    zIndex: -1

  },
  right: {
    position: "absolute",
    width: 500,
    height: 500,
    right: -250,
    bottom: "5%",
    zIndex: -1
  },
});

export { GlobalStyle };
