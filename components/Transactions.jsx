import { useContext, useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native";
import CountryTransfer from "./CountryTransfer";
import { CountrySvgImage } from "../resource/country";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import TransactionItem from "./TransactionItem";

const { width, height } = Dimensions.get("screen")


const TransactionItem = ({ item, press }) => {

    return (
        <TouchableOpacity style={{ ...itemStyles.transactionsItem }} onPress={() => {
            press({ transaction: item })
        }}>

            <View style={{
                flex: 1
            }}>
                <View style={itemStyles.countryImage}>
                    <AntDesign name="creditcard" size={22} color="#fff" />
                    <View style={itemStyles.imageContainer}>
                        <CountrySvgImage code={item.country.country} width={30} height={30} radius={10} styles={{
                            borderRadius: 10,
                            zIndex: 1,
                            position: "relative"
                        }} />
                    </View>
                </View>
            </View>
            <View style={itemStyles.info}>
                <Text style={itemStyles.name}> {item.name.split(" ")[1][0] + "."} {item.name.split(" ")[0]} </Text>
                <Text style={itemStyles.card}>
                    To card {`***${item.toSumm.slice(0, -2)}`}
                </Text>
            </View>
            <View style={itemStyles.currency}>
                <Text
                    style={itemStyles.summ}
                >{`-${item.toSumm} ${item.country.currencyCode}`}
                </Text>
                {item.status == "send" ? (
                    <Ionicons name="ios-checkmark-circle-outline" size={24} color="#FF6B01" />
                ) : (

                    <AntDesign name="minuscircleo" size={24} color="#FF6B01" />
                )}
            </View>
        </TouchableOpacity>
    )
}

const Transactions = (press) => {

    const keyExtractor = (item, index) => index.toString();
    const navigation = useNavigation()





    const data = [
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
        {
            name: "Makxmasoliyev Otajon",
            card: "9860120145964523",
            toSumm: "135000",
            status: "send",
            country: {
                currencyCode: "UZS",
                country: "pl"
            },
        },
    ];
    return (
        <View style={styles.transactions}>
            <Text style={styles.title}>Transactions</Text>


            <View>
                {
                    data.map((item, index) => (
                        <TransactionItem
                            item={item}
                            key={index}
                            press={(item) => {
                                navigation.navigate("Other",
                                    { screen: "TransactionHistory", params: item },

                                )
                            }
                            } />
                    ))
                }
            </View>
        </View>
    );
};
export default Transactions;
const styles = StyleSheet.create({
    transactions: {

        width: "95%",
        alignSelf: "center",
        padding: 13,
        borderRadius: 15,
        backgroundColor: "rgba(68, 67, 65, 1)",
        paddingBottom: 20
    },
    card: {
        color: "#fff",
        fontFamily: "MontserratLight",
        lineHeight: 20,
        fontSize: width / 30
    },
    title: {
        fontSize: 18,
        fontFamily: "Montserrat",
        color: "#fff",

        marginTop: 5,
        marginBottom: 15,
    },
    currency: {
        flexDirection: "column",
        alignItems: "flex-end",
        height: "100%",
        justifyContent: "space-between",
    },
    summ: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "MontserratLight",
        lineHeight: 27,
    },
    transactionsItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        height: 80,
    },
    name: {
        fontFamily: "Montserrat",
        color: "#fff",
        fontSize: width / 28
    },
    info: {
        width: "50%",
        flexDirection: "column",
        justifyContent: "space-evenly",

        height: "100%",
    },

});


const itemStyles = StyleSheet.create({
    countryImage: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: "#FF6B01",
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 246, 246, 0.08)"
    },
    imageContainer: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        overflow: "hidden",
        position: "absolute",
        zIndex: 2,
        bottom: -5,
        right: -8
    },
    transactionsItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        height: 80,
        flexGrow: 9,
        marginBottom: 2
    },
    info: {
        width: "50%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        flex: 3.7,
        height: "100%",
    },
    card: {
        color: "#fff",
        fontFamily: "MontserratLight",
        lineHeight: 20,
        fontSize: width / 30
    },
    currency: {
        flexDirection: "column",
        alignItems: "flex-end",
        height: "100%",
        justifyContent: "space-between",
        flex: 2
    },
    summ: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "MontserratLight",
        lineHeight: 40,
    },
    name: {
        fontFamily: "MontserratMedium",
        color: "#fff",
        fontSize: width / 24
    },
})
