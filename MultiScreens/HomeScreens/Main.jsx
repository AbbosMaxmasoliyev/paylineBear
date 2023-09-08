import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    Keyboard,
    StatusBar
} from "react-native";
import CarouselWrapper from "../../components/CarouselWrapper";
import Transactions from "../../components/Transactions";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Gradient from "../../components/Gradient";
const { width, height } = Dimensions.get("screen")

const Main = () => {

    const navigation = useNavigation()



    useEffect(() => {
        async function Run() {
            const result = await fetch('https://bear-payline-server-87da0985e77c.herokuapp.com/api/country/get/all')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                });
        }

        Run();
    }, [])

    return (
        <Gradient style={styles.container} onPointerEnter={() => Keyboard.dismiss()}>
            <StatusBar translucent barStyle={"dark-content"} backgroundColor={"#457585"} animated={true} networkActivityIndicatorVisible={true} />
            <View style={styles.carouselContainer}>
                <CarouselWrapper />
            </View>
            <ScrollView style={{ flex: 1, height: height, paddingTop: 25, marginTop: -15, zIndex: 1 }}>
                <View
                    style={{ flexDirection: "column", gap: 17, alignItems: "center" }}
                >
                    <View
                        style={{
                            position: "relative",
                            flexDirection: "row",
                            gap: 23,
                            width: "90%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Pressable style={{ ...styles.back }} onPress={() => navigation.navigate("Home", { screen: "Request" })}>
                            <Text style={styles.text}>Request</Text>
                        </Pressable>
                        <Pressable
                            style={{ ...styles.back }}
                            onPress={() => {
                                console.log("ishlayapti");
                                navigation.navigate("Home", { screen: "Send" })

                            }}
                        >
                            <Text style={styles.text}>Send</Text>
                        </Pressable>
                    </View>
                    <Pressable style={{ ...styles.back, width: "90%" }}>
                        <Text style={styles.text}>Bonuses</Text>
                    </Pressable>

                    <View style={styles.bonuses}>
                        <Text
                            style={{
                                fontFamily: "Montserrat",
                                color: "#fff",
                                textAlign: "center",
                                position: "relative",
                                fontSize: 12,
                                zIndex: 2,
                                width: "80%",
                            }}
                        >
                            Make up to PLN 4 for each new friend you invite who make first
                            transaction.
                        </Text>
                        <Image
                            source={require("../../assets/images/box.png")}
                            style={{ ...styles.box }}
                        />
                    </View>
                </View>
                <Transactions />
            </ScrollView>
        </Gradient>
    );
};
export default Main;

const styles = StyleSheet.create({
    carouselContainer: {
        height: 240,
        backgroundColor: "#457585",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        zIndex: 2,
        paddingTop: 10
    },
    dotsContainer: {
        width: 120,
        height: 50,
    },
    container: {
        width: width,
        height: height - 30,
        paddingTop: 35,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    summaryScrollContainer: {
        marginBottom: 12,
    },
    summaryContainer: {
        paddingHorizontal: 8,
    },
    container: {
        flex: 1,
    },
    back: {
        backgroundColor: "#FF6B01",
        maxWidth: "100%",
        minWidth: "40%",
        position: "relative",
        height: 47,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "MontserratBold",
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
    },

    bonuses: {
        width: "90%",
        height: 80,
        borderWidth: 3,
        borderColor: "#FF8200",
        borderRadius: 50,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: 20,
    },
    box: {
        position: "absolute",
        left: -25,
        bottom: -25,
        zIndex: -1,
    },
});
