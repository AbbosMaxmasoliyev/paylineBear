import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Image, Button, StatusBar, Dimensions, } from 'react-native'
import Gradient from '../../components/Gradient'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import SendCalculator from '../../components/SendCalculator';
import Box from "../../components/Box"
import { Entypo } from '@expo/vector-icons';
import CountryTransfer from "../../components/CountryTransfer"
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
// import { format } from 'date-fns';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import PDFView from 'react-native-view-pdf';
import * as OpenAnything from 'react-native-openanything';
import { CountrySvgImage } from '../../resource/country';
import GoBack from '../../components/goBack';






const { width, height } = Dimensions.get("screen")



const TransactionHistory = () => {
    const navigation = useNavigation()


    const [show, setShow] = useState(false)

    const [pdfSource, setPdfSource] = useState()
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "Transaction",
            headerStyle: {
                backgroundColor: "#060606",

            },
            headerTintColor: "#fff",
            headerLeft: () => (
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Entypo name="chevron-small-left" size={30} color="#fff" />
                </TouchableOpacity>
            )
        })
    }, [])

    let html = `
    <html>
        <style>
            body{
                width: 400px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
            .subtitle{
                color: #454545;
                margin-top: 20px;
                text-transform: uppercase;
            }
            p,h1{
                margin: 0;
            }
        </style>
    <body>
        <h1>TRANSACTION DETAILS</h1>
        <hr>
        <p class="subtitle">Recepinent Data</p>
        <p class="title">Makxmasoliye Otajon</p>
        <p class="subtitle">Recepinent Account Number</p>
        <p class="title">83 1020 1068 0000 1302 0414 6734</p>
        <p class="subtitle">TITLE</p>
        <p class="title">Pay to mobile</p>
        <p class="subtitle">AMOUNT</p>
        <p class="title">-900.00 PLN</p>
        <p class="subtitle">OPERATION DATE</p>
        <p class="title">05-07-2023</p>
        <p class="subtitle">BOOKING DATE</p>
        <p class="title">05-07-2023</p>
        <p class="subtitle">SENDER DATA</p>
        <p class="title">SAMANDAR MAHMUDOV</p> 
        <p class="subtitle">SENDER ACCOUNT NUMBER</p>
        <p class="title">87 1090 1043 0000 0001 5336 6276</p>
    </body>
    </html>`


    let generatePdf = async () => {
        const file = await printToFileAsync({
            html: html,
            base64: false
        })

        console.log(file.uri);
        if (file) {
            setPdfSource(file.uri)
        }
    }




    const route = useRoute()
    const item = route.params.transaction
    console.log(item.country);
    const date = new Date()
    const status = () => {
        if (item.status === "send") {
            return (
                <View style={{ width: "90%", alignSelf: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                        <Feather name="check" size={30} color="#FF8200" />
                        <Text style={{ fontSize: 20, lineHeight: 22, color: "#fff", fontFamily: "Montserrat" }}>Send Successfully</Text>
                    </View>


                </View>
            )
        } else if (item.status == "not") {
            return (
                <View  >
                    <Ionicons name="close-outline" size={24} color="#FF8200" />
                    <Text>Send Failed</Text>
                </View>
            )
            // <Ionicons name="md-refresh-circle-outline" size={24} color="black" />
        }
    }
    const dateObj = new Date();
    const formattedDate = dateObj;

    return (

        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Gradient style={{ flexDirection: "column", justifyContent: "center" }}>
                <Box>
                    <View style={{ width: '90%', alignSelf: "center", marginTop: 15 }}>
                        <View style={{ width: 60, height: 60, justifyContent: "center", alignItems: "center" }}>
                            <View style={itemStyles.countryImage}>
                                <AntDesign name="creditcard" size={28} color="#fff" />
                                <View style={itemStyles.imageContainer}>
                                    <CountrySvgImage code={item.country.country} width={40} height={40} radius={10} styles={{
                                        borderRadius: 10,
                                        zIndex: 1,
                                        position: "relative"
                                    }} />
                                </View>
                            </View>
                        </View>
                        <Text style={{ ...styles.textBottom, color: "#fff", fontSize: 23, marginVertical: 20 }}>{item.name}</Text>
                    </View>
                    {
                        status()
                    }

                    <View style={{ flexDirection: "row", width: "90%", alignSelf: "center", marginVertical: 23, alignItems: "center" }}>
                        <Text style={styles.textMoneyTransaction}>45.120 PLN </Text>
                        <AntDesign name="arrowright" size={30} color="white" style={{ marginHorizontal: 10 }} />
                        <Text style={styles.textMoneyTransaction}> 65.1215 UZS</Text>

                    </View>

                    <View style={{ justifyContent: "center", width: "90%", alignSelf: "center", flexDirection: "row", borderBottomWidth: 1.5, borderTopWidth: 1.5, borderBottomColor: "#FF6B01", borderTopColor: "#FF6B01" }}>
                        <TouchableOpacity style={{ width: "100%", paddingVertical: 19, flexDirection: "row", alignItems: "center", gap: 15, }}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                borderColor: "#FF6B01",
                                borderWidth: 2,
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row"
                            }}>
                                <Ionicons name="refresh" size={27} color="#FF6B01" />
                            </View>
                            <Text style={{ color: "#fff", fontSize: 25, fontFamily: "Montserrat" }}>Repeat transfer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={{ ...styles.textInfo, fontFamily: "Montserrat" }}>
                            Date:
                        </Text>
                        <Text style={{ ...styles.textInfo, fontFamily: "Montserrat" }}>{formattedDate}</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={{ ...styles.textInfo, fontFamily: "Montserrat" }}>
                            Comission:
                        </Text>
                        <Text style={{ ...styles.textInfo, fontFamily: "Montserrat" }}>{`4 PLN`}</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={{ ...styles.textInfo, fontFamily: "Montserrat" }}>
                            Currency:
                        </Text>
                        <Text style={{ ...styles.textInfo, fontFamily: "Montserrat" }}>{`1.00 PLN = 2.668 UZS `}</Text>
                    </View>
                    <View style={{ borderColor: "#FF6B01", borderWidth: 0.7, width: "90%", alignSelf: "center" }}></View>
                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", width: "90%", justifyContent: "space-between", marginVertical: 15, }}>
                        <Text style={styles.card}>Card</Text>
                        <View >
                            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 5 }}>
                                <Text style={styles.cardNumber}>{`8600 1231 **** **23`}</Text>
                                <Image style={{ width: 25, height: 25 }} source={require("../../assets/cards/Millennium_bcp-logo-1315204029-seeklogo.png")} />
                            </View>
                            <Text style={styles.name}>{`Ibrohimbek Qalandarov`}</Text>
                        </View>
                    </View>
                </Box>


            </Gradient>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.touch} >
                    <Feather name="download" size={25} color="#FF6B01" />
                    <Text style={styles.textBottom}>Download</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => generatePdf()}>
                    <Ionicons name="receipt-outline" size={25} color="#FF6B01" />
                    <Text style={styles.textBottom}>Check</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default TransactionHistory
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    textInfo: {
        width: "50%",
        color: "#fff",
        fontSize: 17
    },
    infoCard: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        marginVertical: 16.5
    },
    textMoneyTransaction: {
        fontSize: 25,
        fontFamily: "MontserratMedium",
        color: "#fff"
    },
    card: {
        color: "#fff",
        fontFamily: "MontserratLight",
        fontSize: 18
    },
    cardNumber: {
        color: "#fff",
        fontFamily: "Montserrat",
        fontSize: 20
    },
    name: {
        color: "#fff",
        textAlign: "right",
        fontSize: 18,
        fontFamily: "MontserratLight"
    },
    bottom: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000e14aa",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,

    },
    touch: {
        alignItems: "center"
    },
    textBottom: {
        color: "#FF6B01",
        fontSize: 15,
        fontFamily: "MontserratMedium"
    }
})


const itemStyles = StyleSheet.create({
    countryImage: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: "#FF6B01",
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 246, 246, 0.08)"
    },
    imageContainer: {
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        overflow: "hidden",
        position: "absolute",
        zIndex: 2,
        bottom: -5,
        right: -10
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
        fontSize: width / 22
    },
})