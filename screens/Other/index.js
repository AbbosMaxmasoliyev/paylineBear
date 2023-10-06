import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
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
import Recepient from './NewRecepient';
import AddCard from './AddCard';
import { NewCard, NewRecepientContext } from '../../Context/SendContext';
import { DARK, DARK_BLACK, GRAY } from '../../style/styles';
import ChechTransfer from './ChechTransfer';
import Request from './Request';



const Stack = createNativeStackNavigator();
const Index = () => {

    const navigation = useNavigation()
    const [newCard, setNewCard] = useState({
        formattedNumber: "",
        firstName: "",
        lastName: ""
    });

    return (
        <NewCard.Provider value={[newCard, setNewCard]}>
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
                        headerTitle: "",
                        headerTitleAlign: "center",
                        headerStyle: {

                            backgroundColor: DARK
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
                            backgroundColor: DARK_BLACK
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
                <Stack.Screen name="NewRecepient" component={Recepient} options={
                    {
                        headerShown: true,
                        headerTitle: "New Recepient",
                        headerStyle: {
                            backgroundColor: "#060606f9"
                        },
                        headerLeft: () => <GoBack name={"Back"} />,
                        headerTitleAlign: "center",
                        headerTintColor: "#fff",
                    }
                } />

                <Stack.Screen name="AddCard" component={AddCard} options={
                    {
                        headerShown: true,
                        headerTitle: "New Recepient",
                        headerStyle: {
                            backgroundColor: "#060606f9"
                        },
                        headerLeft: () => <GoBack name={"Back"} />,
                        headerTitleAlign: "center",
                        headerTintColor: "#fff",
                    }
                } />
                <Stack.Screen name="CheckTransfer" component={ChechTransfer} options={
                    {
                        headerShown: false,
                    }
                } />
                <Stack.Screen name="Request" component={Request} options={
                    {
                        headerShown: false,
                    }
                } />

            </Stack.Navigator>
        </NewCard.Provider>
    )
}

export default Index

const styles = StyleSheet.create({})