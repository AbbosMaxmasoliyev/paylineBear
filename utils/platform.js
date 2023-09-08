import { Platform } from "react-native"
export const behavior = () => (Platform.OS === "android" ? "padding" : "height");