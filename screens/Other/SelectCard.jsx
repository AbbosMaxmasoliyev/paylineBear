import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gradient from "../../components/Gradient";
import CardSelection from "../../components/CardSelection";
import Box from "../../components/Box";
import { Image, ScrollView } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import { FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';
import { behavior } from "../../utils/platform";
import { DARK, DARK_BLACK, WHITE, YELLOW } from "../../style/styles";

let { height, width } = Dimensions.get("window");
const SelectCard = () => {
    const navigation = useNavigation()



    const [cardSelect, setCardSelect] = useState("");
    const [cvvValue, setCvvValue] = useState("");
    const [cvvFalse, setCvvfalse] = useState(false);
    const [keyboard, setKeyboardShow] = useState(false);
    const [completed, setCompleted] = useState(false);
    const next = () => {
        if (cvvValue == 122) {
            Keyboard.dismiss()
            setTimeout(() => {
                setCvvfalse(false);
                setCvvValue("");
                setCompleted("send");
                setKeyboardShow(false)
                navigation.navigate("Other", {
                    screen: "CheckTransfer",
                    params: completed
                })
            }, 3000);

            setTimeout(() => {
                setCompleted(false);
            }, 4500);
        } else {
            setCvvfalse(true);
        }
    };

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
                behavior={behavior()}

            >
                <StatusBar backgroundColor={DARK_BLACK} />

                <ScrollView contentContainerStyle={{
                    flex: 1,
                    justifyContent: "flex-start",

                    height: "100%"
                }}>

                    <View style={{ alignItems: "center", justifyContent: "flex-start", flex: 0.5 }}>
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
                    {keyboard ? (
                        <View
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                zIndex: 2,
                                bottom: 0,
                                backgroundColor: DARK_BLACK + "9a",
                                flex: 1

                            }}
                        >

                            <View style={{
                                position: "absolute",
                                width: "100%",
                                height: 350,
                                backgroundColor: "#060606",
                                bottom: 0,
                                marginBottom: 0
                            }}>

                                <TouchableOpacity onPress={() => setKeyboardShow(false)} style={{
                                    position: "absolute",
                                    top: 10,
                                    left: 10
                                }}>
                                    <Ionicons name="ios-close-sharp" size={30} color={WHITE} />
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
                                        fontSize: 20
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




                </ScrollView>

            </KeyboardAvoidingView>
        </Gradient>
    );
};
export default SelectCard;
const styles = StyleSheet.create({
    cvvTitle: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: 18,
        marginBottom: 20,
        marginTop: 25,
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

        marginTop: 25
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
