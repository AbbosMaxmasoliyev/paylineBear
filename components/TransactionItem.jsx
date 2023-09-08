import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { CountrySvgImage } from '../resource/country'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const { width, height } = Dimensions.get("screen")
const TransactionItem = ({ item, press }) => {
    console.log(item);
    return (
        <TouchableOpacity style={{ ...styles.transactionsItem }} onPress={() => {
            press({ transaction: item })
        }}>

            <View style={{
                flex: 1
            }}>
                <View style={styles.countryImage}>
                    <AntDesign name="creditcard" size={22} color="#fff" />
                    <View style={styles.imageContainer}>
                        {/* <CountrySvgImage code={item.country.country} width={30} height={30} radius={10} styles={{
                            borderRadius: 10,
                            zIndex: 1,
                            position: "relative"
                        }} /> */}
                    </View>
                </View>
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.card}>
                    To card {`***${item.toSumm.slice(0, -2)}`}
                </Text>
            </View>
            <View style={styles.currency}>
                <Text
                    style={styles.summ}
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

export default TransactionItem

const styles = StyleSheet.create({
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
        flexGrow: 9
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
        fontSize: 18
    },
})