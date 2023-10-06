import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Animated,
    SafeAreaView,
    StatusBar
} from "react-native";
import Box from "../../components/Box";
import Gradient from "../../components/Gradient";
import CountryTransfer from "../../components/CountryTransfer";
import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { CountrySvgImage } from "../../resource/country";

import DynamicHeader from "../../components/DinamicHeader";
import { DARK_BLACK } from "../../style/styles";

const { height, width } = Dimensions.get("screen")
const Send = () => {
    const navigation = useNavigation()

    const myShadowStyle = new StyleSheet.create({
        elevation: 3,
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: {
            height: 3,
            width: 0,
        },
    });
    const HEADER_HEIGHT = 30;

    const headerStyle = new StyleSheet.create({
        width: "100%",
        position: "absolute",
        backgroundColor: "#060606",

        height: HEADER_HEIGHT,
        borderWidth: 1,
        borderColor: "red",
        color: "#fff",
        fontSize: 20,
    });
    const [myStyle, setMyStyle] = useState(headerStyle);

    const data = [
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                code: "pl"
            },
        },
    ];
    let scrollOffsetY = useRef(new Animated.Value(0)).current;
    const [myCardsThree, setMyCardsThree] = useState(data);
    return (
        <Gradient>
            <View style={styles.container}>
                <StatusBar backgroundColor={DARK_BLACK} />
                <SafeAreaView style={
                    {
                        flex: 5,
                        paddingTop: 10,
                        margin: 0,
                        height: height
                    }
                }>
                    <StatusBar barStyle={"light-content"} />
                    <DynamicHeader animHeaderValue={scrollOffsetY} >
                        <View>
                            <View style={styles.titleContainer}>
                                <Text style={styles.text}>Send Money</Text>
                                <Text style={styles.subtitle}>
                                    Select a recepient you sent to previously or renter new recepient
                                    details
                                </Text>
                            </View>
                            <Pressable style={styles.btn} onPress={() => {
                                navigation.navigate("Other", {
                                    screen: "NewRecepient"
                                })
                            }}>
                                <View style={{
                                    width: 45,
                                    height: 45,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderWidth: 1,
                                    borderColor: "#FF6A00",
                                    borderRadius: 25
                                }}>
                                    <SimpleLineIcons name="user-follow" size={24} color="#FF6A00" />
                                </View>
                                <Text style={styles.btntext}>New recipient</Text>
                            </Pressable>
                        </View>
                    </DynamicHeader>
                    <ScrollView
                        scrollEventThrottle={1}
                        showsVerticalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
                            { useNativeDriver: false }
                        )}
                    >

                        <Text style={{ ...styles.subtitle, width: "90%", marginBottom: 10 }}>My Recipients</Text>


                        <View style={{ width: "90%", paddingVertical: 10 }}>
                            <View style={{
                                width: width * 0.85,
                            }}>
                                {myCardsThree.map((item, index) => (
                                    <TouchableOpacity style={styles.item} key={index} onPress={() => navigation.navigate("Other",
                                        {
                                            screen: "SendCalculator", params: {
                                                main: "Other",
                                                screen: "Send"
                                            }
                                        }
                                    )}>
                                        <View style={{
                                            flex: 1.7,
                                            justifyContent: "flex-start",
                                        }}>
                                            <View style={styles.countryImage}>
                                                <AntDesign name="creditcard" size={23} color="#fff" />
                                                <View style={styles.imageContainer}>
                                                    <CountrySvgImage code={item.country.code} width={30} height={20} radius={20} styles={{
                                                        borderRadius: 10,
                                                        zIndex: 1,
                                                        position: "relative"
                                                    }} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.cardInfo}>
                                            <Text style={styles.card}>
                                                To card {`***${item.toSumm.slice(0, -2)}`}
                                            </Text>
                                            <Text style={styles.cardName}>{item.name}</Text>
                                        </View>
                                        <Text style={styles.currencyCode}>
                                            {item.country.currencyCode}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>

            </View>
        </Gradient>
    );
};
export default Send;
const styles = StyleSheet.create({

    scroll: {
        height: "auto",
    },
    container: {
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
    },
    item: {
        flexDirection: "row",
        paddingVertical: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        flexGrow: 9,
        width: "100%"
    },
    text: {
        fontSize: 25,
        fontFamily: "MontserratBold",

        fontWeight: "600",
        lineHeight: 26,
        color: "#fff",
        paddingVertical: 23,
        paddingTop: 0,
        paddingBottom: 13,
    },
    titleContainer: {
        width: "90%",
    },
    subtitle: {
        color: "#fff",
        fontFamily: "MontserratLight",
        backgroundColor: "transparent",
    },
    btn: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 21,
        gap: 11,
    },
    btntext: {
        color: "#FF7B01",
        fontFamily: "MontserratBold",
        fontSize: 20,
    },
    currencyCode: {
        color: "#fff",
        width: "15%",
        textAlign: "right",
        fontSize: 16,
        fontFamily: "Montserrat",
        flex: 2
    },
    cardInfo: {
        width: "65%",
        position: "relative",
        flexDirection: "column",
        gap: 5,
        justifyContent: "space-between",
        flex: 6
    },
    card: {
        fontFamily: "MontserratBold",
        color: "#fff",
        fontSize: 18
    },
    cardName: {
        fontFamily: "MontserratLight",
        color: "#fff",
    },
    pres: {
        paddingHorizontal: 65,
        paddingVertical: 9,
        backgroundColor: "#FF6B01",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    more: {
        fontFamily: "MontserratBold",
        color: "#fff",
    },
    countryImage: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: "#FF6B01",
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 246, 246, 0.08)",
    },
    imageContainer: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        overflow: "hidden",
        position: "absolute",
        zIndex: 2,
        bottom: -5,
        right: -10
    },
});
