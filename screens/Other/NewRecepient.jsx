import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
} from "react-native";
import Gradient from "../../components/Gradient";
import Box from "../../components/Box";
import { TextInput } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SvgFromXml } from "react-native-svg";
import { newReceipent } from "../../resource/icons";
import { AntDesign } from '@expo/vector-icons';
import { behavior } from "../../utils/platform";
import { CountrySvgImage } from "../../resource/country";


const { width, height } = Dimensions.get("screen");

const data = [
    {
        name: "Uzbekistan",
        lanId: "uz",
        code: "uz",
    },
    {
        name: "Russian",
        lanId: "ru",
        code: "ru",
    },
    {
        name: "United Kingdom",
        lanId: "en",
        code: "gb",
    },
    {
        name: "Turkiye",
        lanId: "tur",
        code: "tr",
    },
    {
        name: "Kyrgyztan",
        lanId: "kyg",
        code: "kg",
    },
    {
        name: "Tajikistan",
        lanId: "taj",
        code: "tj",
    },
    {
        name: "Turkmenistan",
        lanId: "tum",
        code: "tm",
    },
    {
        name: "Kazakhstan",
        lanId: "kaz",
        code: "kz",
    },
];
const Recepient = ({ navigation }) => {

    console.log(data);
    const [text, setText] = useState("");
    const [country, setCountry] = useState(data);

    useEffect(() => {
        setCountry(
            data.filter((item) => item.name.toLocaleLowerCase().includes(text))
        );
    }, [text]);

    return (
        <Gradient style={styles.grad}>
            <TouchableWithoutFeedback onPressIn={() => Keyboard.dismiss()}>
                <KeyboardAvoidingView style={{
                    flex: 1,
                    justifyContent: "center"
                }}
                    behavior={behavior()}
                >
                    <Box style={styles.box}>
                        <Text style={styles.title}>
                            Select how to deliver money to recipient
                        </Text>
                        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Home_Send_BankCard")}>
                            <SvgFromXml xml={newReceipent(40, "#FF6B01")} />
                            <View>
                                <Text style={styles.bankTitle}>To bank card</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.destination}>More options by destination</Text>
                        <View
                            style={{
                                position: "relative",
                                borderRadius: 10,
                                backgroundColor: "rgba(138, 136, 136, 0.45)",
                                height: 40,
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                                marginBottom: 20,
                                flexGrow: 8,
                                overflow: "hidden",
                                zIndex: 2
                            }}
                        >
                            <View style={{
                                flex: 1.1,
                            }}>
                                <AntDesign name="search1" size={24} color="#fff" style={{

                                    alignSelf: "center"
                                }} />
                            </View>
                            <TextInput
                                onChangeText={(e) =>
                                    setText((prev) => (prev = e.toLocaleLowerCase()))
                                }
                                placeholder="Search country"
                                style={{
                                    fontFamily: "MontserratLight",
                                    flex: 6,
                                    color: "#fff",
                                    height: "100%",
                                    zIndex: 1,

                                }}
                                textAlign="left"
                                placeholderTextColor={"#fff"}
                            />
                        </View>
                        <ScrollView
                            style={{ height: height * 0.8 }}
                            showsVerticalScrollIndicator={false}
                        >
                            {country.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.couTouch} onPress={() => navigation.navigate("Home_Send_DeliverCard", { country: item })}>
                                    <Text style={{ color: "#fff", fontFamily: "MontserratBold" }}>
                                        {item.name}
                                    </Text>
                                    <View style={{
                                        height: 25,
                                        overflow: "hidden",
                                        borderRadius: 3,
                                        zIndex: 2,
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        paddingTop: 0
                                    }}>
                                        <CountrySvgImage width={35} code={item.code} styles={{
                                            zIndex: 1,
                                            marginTop: -3
                                        }} />
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </Box>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Gradient>
    );
};
export default Recepient;
const styles = StyleSheet.create({
    grad: {
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: width,
        height: "auto",
        paddingVertical: 10,
        paddingHorizontal: width * 0.05,
        flex: 1,
        borderRadius: 0
    },
    title: {
        color: "#fffb",
        fontFamily: "MontserratBold",
        fontSize: 19,
        marginVertical: 30
    },
    touch: {
        flexDirection: "row",
        width: width * 0.8,
        minHeight: 50,
        alignItems: "center",
        gap: 10,
        paddingVertical: 5,
    },
    bankTitle: {
        fontSize: 20,
        fontFamily: "MontserratMedium",
        color: "#FF7B01",
    },
    bankSubtitle: {
        width: width * 0.6,
        color: "#fff",
        fontSize: 10,
        fontFamily: "MontserratLight",
    },
    destination: {
        fontFamily: "MontserratLight",
        fontSize: 20,
        marginTop: 37,
        marginBottom: 24,
        color: "#fff",
    },
    couTouch: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
        alignItems: "center",
        paddingHorizontal: 10,
        marginVertical: 5,
        backgroundColor: "rgba(90, 85, 85, 0.25)",
        borderRadius: 10,
    },
});
