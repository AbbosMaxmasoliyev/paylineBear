import { Image, StyleSheet, Text, View, Keyboard } from "react-native";
import Box from "./Box";
import { Pressable } from "react-native";
import CustomKeyboard from "./KeyboardNumber";
import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons';


const { width, height } = Dimensions.get("screen")

const Information = ({ info, title, subtitle, keyPress, not }) => {

  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={{ ...styles.subtitle, flexWrap: "wrap" }}>
        {subtitle}
        {"\n"}
        <Text style={{ textDecorationLine: "line-through", textDecorationStyle: "solid", textDecorationColor: "#fff", width: "100%", }}>{not}</Text>
      </Text>
      {info ? (
        <Pressable onPress={() => keyPress}>
          <Text>Info</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const SendCalculator = () => {
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
  return (
    <View style={{ marginTop: 80, height: "75%", paddingHorizontal: "5%" }}>
      <Box style={{ paddingVertical: 10, alignItems: "center" }}>
        <View style={styles.moneyContainer}>
          <View style={styles.moneyStyle}>
            <Text style={styles.pay}>You Pay</Text>
            <Text style={styles.money}>{sendTranfer}</Text>
            <Pressable style={styles.pres}>
              <Text style={styles.prestext}>{currency.name}</Text>

            </Pressable>
          </View>
          <View style={styles.moneyStyle}>
            <Text style={styles.pay}>You Pay</Text>
            <Text style={styles.money}>{getMoney.amount}</Text>
            <Pressable style={styles.pres}>
              <Text style={styles.prestext}>PLN</Text>
              <Entypo name="chevron-thin-down" size={24} color="#fff" />
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

        <View style={{ height: "55%", alignItems: "center" }}>
          <CustomKeyboard
            dot={true}
            deleteLet={() => setsendTranfer((prev) => prev.slice(0, -1))}
            onKeyPress={(e) => setsendTranfer((prev) => prev + e)}
          />
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("Home_Send_SelectCard")}>
            <Text style={styles.touchText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Box>
    </View>
  );
};
export default SendCalculator;
const styles = StyleSheet.create({
  moneyContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
  },
  money: {
    flexDirection: "column",
    alignItems: "center",
    gap: 11,
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


    textAlign: "center",
    fontFamily: "MontserratMedium",
    fontSize: 20,
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
    fontFamily: "MonstserratLight",
    fontSize: 18
  },
  info: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    borderBottomColor: "#DA630E",
    borderBottomWidth: 2,
    borderTopColor: "#DA630E",
    borderTopWidth: 2,
    paddingVertical: 9,
  },
  box: {
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    height: 70,
  },
  title: {
    height: "40%",
    width: "80%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 15,
    color: "#fff",
    fontFamily: "MonstserratLight",
    fontSize: width / 35
  },
  subtitle: {
    height: "60%",
    width: "80%",
    textAlign: "center",
    fontFamily: "MontserratMedium",
    color: "#fff",
    fontSize: width / 40,

  },
  touch: {
    paddingVertical: 8,
    paddingHorizontal: 45,


    marginTop: -35,
    minWidth: "90%",
    backgroundColor: "#FF6B01",
    borderRadius: 20,

  },
  touchText: {
    color: "#fff",
    fontFamily: "MontserratMedium",
    fontSize: 20,
    textAlign: "center",
  }
});
