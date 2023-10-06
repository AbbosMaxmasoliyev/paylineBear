import React, { useContext, useEffect, useReducer, useState } from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    StatusBar,
    Dimensions,
    Platform,
} from "react-native";
import { CustomStyle } from "../../style/styles";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import CustomKeyboard from "../../components/KeyboardNumber";
import { Keyboard } from "react-native";
import SignPhoneCode from "./signPhone";
import country from "../../resource/country";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("screen");

function LogoTitle() {

    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Text>Salom</Text>
        </View>
    );
}

// Reducer funksiyasi
function numberReducer(state, action) {
    switch (action.type) {
        case 'append':
            return state + action.payload;
        case 'clear':
            return '';
        default:
            return state;
    }
}

const Index = () => {

    const navigation = useNavigation()
    const [number, dispatchNumber] = useReducer(numberReducer, '');
    const [show, setShow] = useState(false);


    useEffect(() => {
        if (show) {
            Keyboard.dismiss()
        }
    }, [show])

    const handlePhoneNumberChange = (son) => {
        dispatchNumber({ type: 'append', payload: son });
    };

    const formatPhoneNumber = (number) => {
        // Avvalgi kod...
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
           
        })
    }, [])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                style={{ height: "100%" }}
                contentContainerStyle={{
                    height: height - 150,
                    padding: 0,
                    flex: 1,
                }}
            >
                <SignPhoneCode phoneData={country.uz} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    // Stilni o'zgartiring
});

export default Index;