import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
const { height, width } = Dimensions.get("screen")


export const YELLOW = "#FF6B01"
export const DARK = "#242424"
export const DARK_BLACK = "#070505"
export const GRAY = "#393E46"
export const WHITE = "#EEEEEE"



let GlobalStyle = StyleSheet.create({
  btn: {

    borderRadius: 25,

    backgroundColor: GRAY,
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    width: "100%",
    color: WHITE,
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Montserrat",
    lineHeight: 40,
    fontSize: 20,
  },

  title: {
    color: WHITE,
    fontFamily: "Montserrat",
    width: "100%",
    textAlign: "center",
    fontSize: 25,
  },
  background: {
    padding: 5,
    backgroundColor: DARK,
    borderRadius: 10,
  },
  inputBlock: {
    padding: 12,
    position: "relative",
    width: "80%",
    backgroundColor: GRAY,
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

    backgroundColor: GRAY,
    borderRadius: 15,
  },
  internal: {
    borderWidth: 1,
    borderColor: YELLOW,
    borderRadius: 20,
    position: "relative",
    backgroundColor: WHITE,
  },
  gradient: {
    backgroundColor: DARK,
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



