import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gradient from "../../components/Gradient";
import CardSelection from "../../components/CardSelection";
import Box from "../../components/Box";
import { Image, ScrollView } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { behavior } from "../../utils/platform";

let { height, width } = Dimensions.get("window");
const SelectCard = () => {
    const navigation = useNavigation()



    const [cardSelect, setCardSelect] = useState("");
    const [cvvValue, setCvvValue] = useState("");
    const [cvvFalse, setCvvfalse] = useState(false);
    const [keyboard, setKeyboardShow] = useState(false);
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [completed, setCompleted] = useState(false);
    const next = () => {
        if (cvvValue == 122) {
            Keyboard.dismiss()
            setSending(true);
            setTimeout(() => {
                setSuccess(false);
                setSending(false);
                setCvvfalse(false);
                setKeyboardShow(false);
                setCvvValue("");
                setCompleted("send");
            }, 3000);

            setTimeout(() => {
                setCompleted(false);
            }, 4500);
        } else {
            setCvvfalse(true);
        }
    };
    console.log(behavior());

    useEffect(() => {
        Keyboard.dismiss
    })
    return (
        <Gradient>
            <KeyboardAvoidingView style={{
                flex: 1,
                height: "100%",
                position: "relative"
            }}
                behavior={"padding"}

            >

                <ScrollView contentContainerStyle={{
                    flex: 1,
                    justifyContent: "flex-start",

                    height: "100%"
                }}>
                    {keyboard ? (
                        <View
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                zIndex: 2,
                                top: 0,
                                backgroundColor: "#060606aa",

                            }}
                        >

                            <View style={{
                                position: "absolute",
                                width: "100%",
                                height: 250,
                                backgroundColor: "#060606",
                                bottom: 0,
                                marginBottom: 30
                            }}>

                                <TouchableOpacity onPress={() => setKeyboardShow(false)} style={{
                                    position: "absolute",
                                    top: 0
                                }}>
                                    <Entypo name="chevron-small-down" size={35} color="#fff" />
                                </TouchableOpacity>
                                <Text style={styles.cvvTitle}>
                                    Enter the CVV for Santander
                                    {cardSelect.slice(cardSelect.length - 4, cardSelect.length)}{" "}
                                </Text>
                                <TextInput
                                    placeholder="Enter CVV"
                                    placeholderTextColor={"#fff"}
                                    maxLength={3}
                                    value={cvvValue}
                                    style={{
                                        backgroundColor: "#fff",
                                        height: 42,
                                        width: "90%",
                                        alignSelf: "center",
                                        borderRadius: 10,
                                        textAlign: "center",
                                        fontFamily: "Montserrat",
                                    }}
                                    keyboardType="decimal-pad"
                                    onChangeText={(e) => setCvvValue(e)}
                                />
                                {cvvFalse ? (
                                    <Text style={{ color: "#FF6A00", ...styles.cvvFalse }}>
                                        The CVV code is incorrect
                                    </Text>
                                ) : (
                                    <Text style={{ color: "#FFC700", ...styles.cvvFalse }}>
                                        3 digits on the back of your card
                                    </Text>
                                )}

                                <TouchableOpacity style={styles.touch} onPress={() => next()}>
                                    <Text style={styles.touchtext}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}
                    <View style={{ alignItems: "center", justifyContent: "flex-start", flex: 1 }}>
                        <View style={{ width: "98%" }}>
                            <CardSelection
                                navigation={navigation}
                                selectcard={(e) => {
                                    setCardSelect(e);
                                    setKeyboardShow(true);
                                }}
                            />
                        </View>
                    </View>

                    
                    {sending ? (
                        <View
                            style={{
                                position: "absolute",
                                width: width,
                                backgroundColor: "#060606",
                                top: 0,
                                zIndex: 4,
                                flex: 1,
                                height: height,
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={require("../../assets/images/transferMoneySending.gif")}
                                style={{ width: 250, height: 250 }}
                            />
                            <Text
                                style={{
                                    color: "#FF6A00",
                                    fontFamily: "MontserratMedium",
                                    fontSize: 20,
                                }}
                            >
                                Sending a transfer request
                            </Text>
                        </View>
                    ) : null}
                    {success ? (
                        <View
                            style={{
                                position: "absolute",
                                width: width,
                                backgroundColor: "#060606",
                                top: 0,
                                zIndex: 4,
                                flex: 1,
                                height: height,
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={require("../../assets/images/transferMoneySending.gif")}
                                style={{ width: 250, height: 250 }}
                            />
                            <Text
                                style={{
                                    color: "#FF6A00",
                                    fontFamily: "MontserratMedium",
                                    fontSize: 20,
                                }}
                            >
                                Sending a transfer request
                            </Text>
                        </View>
                    ) : null}
                    {completed == "bad" ? (
                        <View
                            style={{
                                position: "absolute",
                                width: width,
                                backgroundColor: "#060606",
                                top: 0,
                                zIndex: 4,
                                flex: 1,
                                height: height,
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: "#FF6A00",
                                    fontFamily: "MontserratMedium",
                                    fontSize: 20,
                                }}
                            >
                                Transfer failed
                            </Text>
                        </View>
                    ) : null}
                    {completed == "send" ? (
                        <View
                            style={{
                                position: "absolute",
                                width: width,
                                backgroundColor: "#060606",
                                top: 0,
                                zIndex: 4,
                                flex: 1,
                                height: height,
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Image style={{ width: 80, height: 80 }} source={require("../../assets/images/success.gif")} />
                            <Text
                                style={{
                                    color: "#FF6A00",
                                    fontFamily: "MontserratMedium",
                                    fontSize: 20,
                                }}
                            >
                                Transfer successfully
                            </Text>
                        </View>
                    ) : null}
                </ScrollView>

            </KeyboardAvoidingView>
        </Gradient>
    );
};
export default SelectCard;
const styles = StyleSheet.create({
    cvvTitle: {
        color: "#fff",
        marginVertical: 13,
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 18
    },
    cvvTrue: {
        color: "#FF6A00",
        marginVertical: 13,
        textAlign: "center",
        fontFamily: "MontserratLight",
    },
    touch: {
        width: "90%",
        alignSelf: "center",
        height: 50,
        borderRadius: 30,
        backgroundColor: "#FF6A00",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    touchtext: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "MontserratBold",
        fontSize: 18
    },
    cvvFalse: {
        textAlign: "center",
        lineHeight: 35,
        fontFamily: "MontserratLight",
    },
});
