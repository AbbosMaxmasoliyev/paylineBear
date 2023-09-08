import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import TransactionHistory from './TransactionHistory'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native"
import SendCalculator from './SendCalculator';
import { Entypo } from '@expo/vector-icons';
import SelectCard from './SelectCard';
import { SvgFromXml } from 'react-native-svg';
import { chevronLeft } from '../../resource/icons';
import { headerLeft } from '../../components/headerLeft';
import GoBack from '../../components/goBack';



const Stack = createNativeStackNavigator();
const Index = () => {

    const navigation = useNavigation()


    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }} >

            <Stack.Screen name="TransactionHistory" component={TransactionHistory} options={
                {
                    headerShown: false
                }
            }
                initialParams={{ name: "salom" }}
            />
            <Stack.Screen name="SendCalculator" component={SendCalculator} options={
                {
                    headerShown: true,
                    headerTitle: "Send Calculator",
                    headerTitleAlign: "center",
                    headerStyle: {

                        backgroundColor: "#060606f9"
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontSize: 18,
                        fontFamily: "MontserratBold"
                    },
                    headerBackTitleStyle: {
                        color: "#fff",
                        fontFamily: "MontserratMedium",
                        fontSize: 18
                    },
                    headerLeft: () => <GoBack name={"Back"} />
                }
            }
                initialParams={{ name: "salom" }}
            />

            <Stack.Screen name="SelectCard" component={SelectCard} options={
                {
                    headerShown: true,
                    headerTitle: "Select Card",
                    headerStyle: {
                        backgroundColor: "#060606f9"
                    },
                    headerTintColor: "#fff",
                    headerBackTitle: "Back",
                    headerBackTitleStyle: {
                        fontSize: 18,
                        fontFamily: "MontserratMedium",
                        color: "#fff"
                    },
                    headerTitleStyle: {
                        fontSize: 18,
                        fontFamily: "MontserratBold"
                    },

                }
            }
                initialParams={{ name: "salom" }}
            />

        </Stack.Navigator>
    )
}

export default Index

const styles = StyleSheet.create({})