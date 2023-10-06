import React, { useReducer, useEffect, useRef, useState, useContext } from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    StatusBar,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Pressable,
    Platform,
} from "react-native";
import { CustomStyle, GlobalStyle } from "../../style/styles";
import { router, useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import country, { phoneCountry } from "../../resource/country";
import { MobileNumberContext } from "./loginContext";
import { SvgFromXml } from "react-native-svg";



const behavior = () => (Platform.OS === "ios" ? "padding" : "height");
const { height, width } = Dimensions.get("screen");

function LogoTitle() {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Salom</Text>
        </View>
    );
}

// Reducer funksiyasi
function numberReducer(state, action) {
    switch (action.type) {
        case "append":
            return state + action.payload;
        case "clear":
            return "";
        default:
            return state;
    }
}

const formatPhoneNumber = (number) => {
    const cleanedNumber = number.replace(/[^\d]/g, "");
    const areaCode = cleanedNumber.slice(0, 2);
    const firstPart = cleanedNumber.slice(2, 5);
    const secondPart = cleanedNumber.slice(5, 7);
    const thirdPart = cleanedNumber.slice(7, 12);
    if (cleanedNumber.length == 0) {
        return ``;
    } else if (cleanedNumber.length <= 2) {
        return `(${areaCode}`;
    } else if (cleanedNumber.length <= 5) {
        return `(${areaCode}) ${firstPart}`;
    } else if (cleanedNumber.length <= 7) {
        return `(${areaCode}) ${firstPart}${secondPart}`;
    } else if (cleanedNumber.length < 12) {
        return `(${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;
    }
};

function formattedPhoneNumberReducer(state, action) {
    switch (action.type) {
        case "update":
            return formatPhoneNumber(action.payload);
        default:
            return state;
    }
}

const SignPhoneCode = ({ phoneData }) => {
    const [mobileNumber, setMobileNumber] = useContext(MobileNumberContext)

    const [checkColor, setCheckColor] = useState("transparent");
    const navigation = useNavigation();
    const [hover, setHover] = useState();
    const [show, setShow] = useState(false);

    const [number, dispatchNumber] = useReducer(numberReducer, "");
    const [formattedPhoneNumber, dispatchFormattedPhoneNumber] = useReducer(
        formattedPhoneNumberReducer,
        ""
    );
    const phoneCodeRef = useRef(null);
    const phoneNumberRef = useRef(null);

    useEffect(() => {
        if (number) {

            dispatchFormattedPhoneNumber((prev) => (prev = formatPhoneNumber(number)));
        } else {

        }
    }, [number]);

    useEffect(() => {
        if (show) {
            Keyboard.dismiss();
        }
    }, [show]);

    useEffect(() => {
        phoneCodeRef.current.focus();
    }, []);

    const handlePhoneNumberChange = (son) => {
        dispatchNumber({ type: "append", payload: son });
        dispatchFormattedPhoneNumber({
            type: "update",
            payload: number + son,
        });
    };




    const [data, setData] = useState(phoneData.phoneCode);
    const sendNumber = () => {
        const phoneNumber = formattedPhoneNumber.replace(/[^\d]/g, "")
        if (phoneNumber.length === phoneData.numberDigit) {
            const contextNumber = `+${data}${phoneNumber}`
            setMobileNumber(contextNumber)
            console.log(contextNumber);
            setCheckColor(prev => prev = "transparent")
            // fetch("https://bear-zero-3e6883aa3ebd.herokuapp.com/api/auth/login", {
            //     method: 'POST',
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         "phone": contextNumber
            //     }),
            //     redirect: 'follow',

            // })
            //     .then(response => response.json())
            //     .then(result => {
            //         console.log(result);
            //         if (result.cheksId) {
            //             console.log();
            //         }
            //     })
            //     .catch(error => console.log('error', error));
            //
            navigation.navigate("Authentication")
        } else {
            setCheckColor(prev => prev = "red")
        }
    }
    return (
        <KeyboardAvoidingView behavior={behavior} style={{ flex: 1 }}>

            <View style={styles.loginScreen}>
                <View
                    style={{
                        flex: 5,
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{ ...GlobalStyle.title, marginBottom: 25, width: 350 }}
                    >
                        Fill out to access or register for Bear Payline
                    </Text>
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View
                        style={{
                            flex: 3.5,
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: 10
                        }}
                    >
                        <View style={styles.countryName}>
                            <TouchableOpacity style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10
                            }}>
                                <SvgFromXml xml={phoneCountry['998'].image} />
                                <Text style={styles.TextInput}>{phoneCountry["998"].countryName}</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                ...GlobalStyle.inputBlock,
                                height: 55,
                                width: "90%",
                                borderColor: checkColor,
                                borderWidth: 1,
                                flexDirection: "row",
                                justifyContent: "flex-start"
                            }}
                        >
                            <View style={{ ...styles.phonePasscode, flex: 1 }}>
                                <View
                                    style={{
                                        justifyContent: "center",
                                        flexDirection: "row",
                                        width: 40,

                                    }}
                                >
                                    <Text
                                        style={{
                                            ...styles.TextInput,
                                            width: 20,
                                            textAlign: "right",
                                            lineHeight: 26,
                                        }}
                                    >
                                        +
                                    </Text>
                                    <TextInput
                                        keyboardType="phone-pad"
                                        style={{ ...styles.TextInput }}
                                        onChangeText={(code) => {
                                            setData((prev) => code);
                                        }}
                                        maxLength={4}
                                        value={data ? data : null}
                                    />
                                </View>

                            </View>
                            <TextInput
                                ref={phoneCodeRef}
                                keyboardAppearance="dark"
                                autoComplete="off"
                                keyboardType="phone-pad"
                                placeholder="Enter your phone number"
                                style={{ ...styles.TextInput, height: "auto", flex: 6 }}
                                value={formattedPhoneNumber}
                                onChangeText={(e) => dispatchFormattedPhoneNumber({ type: 'update', payload: e })}
                                placeholderTextColor={"#fff9"}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View
                    style={{
                        minWidth: "80%",
                        maxWidth: "80%",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 5,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            paddingHorizontal: 25,
                            paddingVertical: 8,
                            ...GlobalStyle.btn,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => sendNumber()}
                    >
                        <Text style={GlobalStyle.btnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};





let styles = StyleSheet.create({
    imagePassCode: {
        width: 18,
        height: 18,
    },
    TextInput: {
        fontSize: width * 0.048,
        fontFamily: "MontserratBold",
        color: "#fff"
    },
    ScrollView: {
        position: "absolute",
        top: 40,
        left: -4,
        width: 100,
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#FFCF8B",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        paddingBottom: 8,
        paddingHorizontal: 8,
        zIndex: 99
    },
    selectPasscode: {
        width: "100%",
        margin: 2,
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 10,
    },

    loginScreen: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#060606",
        height: height,
        minHeight: 500
    },

    phonePasscode: {
        width: "100%",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
    },

    phonePasscodeNumber: {
        height: 20,
        fontFamily: "Montserrat",
        color: "#fff",
        fontSize: 18,
        width: 60,
        textAlign: "left",
        padding: 0
    },
    countryName: {
        backgroundColor: "#fff1",
        padding: 10,
        borderRadius: 10
    }
});

export default SignPhoneCode;
