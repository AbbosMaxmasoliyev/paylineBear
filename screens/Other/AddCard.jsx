import { StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Gradient from "../../components/Gradient";
import Box from "../../components/Box";
import { SvgFromXml } from "react-native-svg";
import { bank } from "../../resource/icons";
import { behavior } from "../../utils/platform";
import { cardFormattedNumber, reducer } from "../../utils/formattedNumber"
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { NewCard, NewRecepientContext } from "../../Context/SendContext";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");


const initialState = {
    formattedNumber: "",
    firstName: "",
    lastName: ""
};


const AddCard = () => {

    const navigation = useNavigation()
    const [card, setCard] = useContext(NewCard)

    let cardNumberRef = useRef(null)
    let firstNameRef = useRef(null)
    let lastNameRef = useRef(null)
    const [state, dispatch] = useReducer(reducer, initialState);
    const [cardData, setCardData] = useState(initialState)
    useEffect(() => {
        setCardData(prev => prev = { ...prev, ...state })
    }, [state])
    function jumpingRef(e, old, next, object) {




        if (e.nativeEvent.key === 'Backspace') {
            if (cardData[object].length === 0) {
                console.log(cardData.lastName);
                old.current.focus()
            }
        }
    }


    return (
        <View style={{
            backgroundColor: "#26262a"
        }}>

            <Gradient style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <KeyboardAvoidingView
                        behavior={"padding"}
                        style={{
                            flex: 1,
                            height: height,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Box style={styles.box}>
                            <View style={styles.card}>
                                <View style={{
                                    borderWidth: 1,
                                    borderColor: "#FF7B01",
                                    padding: 15,
                                    borderRadius: 30
                                }}>
                                    <SvgFromXml xml={bank(45, "#FF7B01")} />
                                </View>

                            </View>
                            <View style={styles.block}>
                                <Text style={styles.title}>Add recepient’s card </Text>
                                <TextInput
                                    style={styles.input}
                                    ref={cardNumberRef}
                                    placeholder="Enter card number"
                                    placeholderTextColor={"#fff"}
                                    keyboardType="number-pad"
                                    keyboardAppearance="dark"
                                    maxLength={19}
                                    value={cardData.formattedNumber}
                                    onChangeText={cardNumber => {
                                        dispatch({ type: 'UPDATE_NUMBER', payload: cardFormattedNumber(cardNumber) })
                                        if (cardNumber.replace(/[^\d]/g, "").length >= 16) {
                                            firstNameRef.current.focus()
                                        }
                                    }}
                                />
                            </View>
                            <View style={styles.block}>
                                <TextInput
                                    ref={firstNameRef}
                                    style={{
                                        ...styles.input,
                                        width: "90%",
                                        height: 53,
                                        borderRadius: 10,
                                        backgroundColor: "rgba(138, 136, 136, 0.19)",
                                        marginTop: 34,
                                    }}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                    placeholder="First name"
                                    placeholderTextColor={"#fff"}
                                    value={cardData.firstName}
                                    onChangeText={(firstName) => dispatch({ type: 'FIRST_NAME', payload: firstName })}
                                    onKeyPress={(e) => jumpingRef(e, cardNumberRef, lastNameRef, "firstName")}
                                />
                                <Text style={styles.subtitle}>In English characters</Text>
                            </View>

                            <View style={styles.block}>

                                <TextInput
                                    style={{
                                        ...styles.input,
                                        width: "90%",
                                        height: 53,
                                        borderRadius: 10,
                                        backgroundColor: "rgba(138, 136, 136, 0.19)",
                                        marginTop: 34,
                                    }}
                                    ref={lastNameRef}
                                    keyboardType="default"
                                    keyboardAppearance="dark"
                                    placeholder="Last name"
                                    value={cardData.lastName}
                                    placeholderTextColor={"#fff"}
                                    onChangeText={(lastName) => {
                                        dispatch({ type: 'LAST_NAME', payload: lastName })

                                    }}
                                    onKeyPress={(e) => jumpingRef(e, firstNameRef)}
                                />
                                <Text style={styles.subtitle}>In English characters</Text>
                            </View>

                            <View style={{
                                width: "90%",
                                justifyContent: "center",
                                alignItems: "center",
                                flex: 1,
                                minHeight: 53
                            }}>
                                <TouchableOpacity style={{
                                    height: 53,
                                    backgroundColor: "rgba(255, 106, 0, 0.79)",
                                    width: "90%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 20
                                }}
                                    onPress={() => {
                                        setCard(prev => prev = cardData)
                                        navigation.navigate("Other", { screen: "SendCalculator", })
                                    }}
                                >
                                    <Text style={{ color: "#fff", fontFamily: "Montserrat", fontSize: 18 }}>Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </Box>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </Gradient>
        </View>
    );
};
export default AddCard;
const styles = StyleSheet.create({
    box: {
        height: height,
        width: width,
        borderRadius: 0,
        minHeight: 550,
        alignItems: "center",
        paddingVertical: 20,
        flexDirection: "column",
        flexShrink: 9
    },
    card: {
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        borderRadius: 20,
        flex: 2
    },

    block: {
        flex: 1,
        marginVertical: 15,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#FF7B01",
        height: 40,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontFamily: "MontserratBold",
        color: "#fff",
        fontSize: 19,
        width: "90%",
        height: 53,
        borderRadius: 10,
        backgroundColor: "rgba(138, 136, 136, 0.19)",
        marginTop: 34,
    },
    title: {
        textAlign: "center",
        width: width * 0.8,
        fontFamily: "Montserrat",
        fontSize: 19,
        color: "#fff",
    },
    subtitle: {
        fontFamily: "Montserrat",
        width: "85%",
        color: "#fff",
        marginTop: 8,
    },

});
