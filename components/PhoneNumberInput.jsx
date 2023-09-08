import { StyleSheet, Text, View } from "react-native";
import { GlobalStyle } from "../style/styles";
import { TextInput } from "react-native";
import { useState } from "react";
const PhoneNumberInput = ({ value, change, onfocus, ref }) => {
    const handlePhoneNumberChange = (e) => {
        change(e)
    }

    return (
        <TextInput
            ref={ref}
            textContentType="telephoneNumber"
            keyboardType="numeric"
            placeholder="Enter your phone number"
            style={{ ...styles.TextInput, ...GlobalStyle.background, flex: 6, height: "auto" }}
            value={value}
            onChangeText={(e) => handlePhoneNumberChange(e)}
            onPressIn={onfocus}
        />
    );
};
export default PhoneNumberInput;
const styles = StyleSheet.create({
    TextInput: {
        width: "70%",
        paddingHorizontal: 15,
        color: "#fff",
        fontFamily: "MontserratRegular",
    },
});
