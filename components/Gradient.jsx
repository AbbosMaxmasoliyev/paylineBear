import { StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../style/styles";
import { Image } from "react-native";
import { Dimensions } from "react-native";



const Gradient = ({ children, style }) => {
    return (
        <View style={{ ...GlobalStyle.gradient, ...style }}>


            {children}
        </View>
    );
};
export default Gradient;
const styles = StyleSheet.create({

});
