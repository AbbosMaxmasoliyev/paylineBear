import { Dimensions, Image, Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
const { width, height } = Dimensions.get("screen")
const ChechTransfer = () => {
    const navigation = useNavigation()
    const route = useRoute()

    let transferData = route.params;
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [completed, setCompleted] = useState(false);
    useEffect(() => {
        const next = () => {
            setSending(true);
            setTimeout(() => {
                setSuccess(false);
                setCompleted("send");

            }, 1000);
            setTimeout(() => {
                navigation.navigate("Send")
            }, 2500)


        };
        next()
    }, [])
    return (
        <View>

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
        </View>
    )
}

export default ChechTransfer

const styles = StyleSheet.create({})