import { useState, useEffect } from "react"
import { StyleSheet, Text, View, Dimensions, Pressable, TouchableOpacity, StatusBar } from 'react-native'
import Gradient from '../../components/Gradient'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo, Feather } from '@expo/vector-icons';
import Box from "../../components/Box";
import CustomKeyboard from "../../components/KeyboardNumber";
import GoBack from "../../components/goBack";
import { headerLeft } from "../../components/headerLeft";


const { width, height } = Dimensions.get("screen")



const Information = ({ info, title, subtitle, keyPress, not }) => {

    return (
        <View style={styles.box}>
            <View style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{
                flex: 2.3,
                alignItems: "center"
            }}>
                <Text style={{ ...styles.subtitle, }}>
                    {subtitle}
                    {"\n"}
                    <Text style={{ textDecorationLine: "line-through", textDecorationStyle: "solid", textDecorationColor: "#fff", width: "100%", }}>{not}</Text>
                </Text>
                {info ? (
                    <Pressable onPress={() => keyPress}>
                        <Feather name="info" size={18} color="#fff" />
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
};

const SendMoneyCalculator = () => {
    const router = useRoute()


    const navigation = useNavigation()
    const [sendTranfer, setsendTranfer] = useState(1);
    const [currency, setCurrency] = useState({ name: "UZS", amount: 2801 });
    const [getMoney, setGetMoney] = useState({
        name: "UZS",
        amount: currency.amount * sendTranfer,
    });

    useEffect(() => {
        setGetMoney({ name: "UZS", amount: currency.amount * sendTranfer });



    }, [sendTranfer]);
    useEffect(() => {
      
    }, [])


    const route = useRoute()
    return (
        <Gradient style={{ flexDirection: "column", justifyContent: "center", flexShrink: 7 }}>
            <StatusBar barStyle={"light-content"} />
            {/* <HeaderBackButton label="Hello" onPress={() => console.log('back pressed')} /> */}


            <View style={styles.moneyContainer}>
                <View style={styles.moneyStyle}>
                    <Text style={styles.pay}>You Pay</Text>
                    <Text style={styles.money}>{sendTranfer ? sendTranfer : 0}</Text>
                    <Pressable style={styles.pres}>
                        <Text style={styles.prestext}>{currency.name}</Text>
                        <Entypo name="chevron-small-down" size={24} color="#fff" />
                    </Pressable>
                </View>
                <View style={styles.moneyStyle}>
                    <Text style={styles.pay}>You Pay</Text>
                    <Text style={styles.money}>{getMoney.amount}</Text>
                    <Pressable style={styles.pres}>
                        <Text style={styles.prestext}>PLN</Text>
                        <Entypo name="chevron-small-down" size={24} color="#fff" />
                    </Pressable>
                </View>
            </View>
            <View style={styles.info}>
                <Information title={"Fee"} subtitle={"No Comission"} not={"4 PLN"} />
                <Information
                    title={"Today’s rate"}
                    subtitle={"1 PLN = 2.810 UZS"}
                    info={true}
                />
                <Information
                    title={"Should arrive"}
                    subtitle={"In a few minutes"}
                    info={true}
                />
            </View>

            <View style={{ alignItems: "center", flex: 3, paddingVertical: 30, backgroundColor: "#06060655", flexShrink: 5 }}>
                <CustomKeyboard
                    style={{
                        flex: 4
                    }}
                    dot={true}
                    deleteLet={() => setsendTranfer((prev) => prev.slice(0, -1))}
                    onKeyPress={(e) => setsendTranfer((prev) => prev + e)}
                />
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Other", {
                        screen: "SelectCard"
                    })}>
                        <Text style={styles.touchText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Gradient>
    )
}
export default SendMoneyCalculator



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#457585",
    },
    moneyContainer: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        flex: 2
    },

    pres: {
        borderColor: "#DA630E",
        borderWidth: 1,
        width: 77,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23
    },
    prestext: {
        color: "#fff",
        fontSize: 12,
        textAlign: "center",
        width: "60%",
        paddingVertical: 5,
    },
    money: {

        flexDirection: "column",
        alignItems: "center",
        gap: 11,
        textAlign: "center",
        fontFamily: "MontserratMedium",
        fontSize: width / 10,
        marginVertical: 10,
        color: "#DA630E"
    },
    moneyStyle: {
        width: "50%",
        alignItems: "center",
    },
    pay: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "MontserratBold",
        fontSize: 25
    },
    info: {
        width: "100%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
        borderBottomColor: "#DA630E",
        borderBottomWidth: 0.3,
        borderTopColor: "#DA630E",
        borderTopWidth: 0.3,
        paddingVertical: 5,
        height: 110,
        flex: 0.9
    },
    box: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 5
    },
    title: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "MontserratLight",
        fontSize: width / 25,
    },
    subtitle: {
        textAlign: "center",
        fontFamily: "MontserratMedium",
        color: "#fff",
        fontSize: width / 30,

    },
    touch: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        backgroundColor: "#FF6B01",
        borderRadius: 20,

    },
    touchText: {
        color: "#fff",
        fontFamily: "MontserratMedium",
        fontSize: width / 15,
        textAlign: "center",
    }
});