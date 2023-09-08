import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Main from '../../MultiScreens/HomeScreens/Main'
import Send from '../../MultiScreens/HomeScreens/Send'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { headerLeft } from '../../components/headerLeft';

const Stack = createNativeStackNavigator();
const Index = () => {
    const navigation = useNavigation()
    const goBack = () => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Entypo name="chevron-small-left" size={30} color="#fff" />
            </TouchableOpacity>)
    }
    return (
        <Stack.Navigator initialRouteName={"Main"}>
            <Stack.Screen name="Main" component={Main} options={
                {
                    headerShown: false,
                    headerTitleAlign: "center"
                }
            } />
            <Stack.Screen name="Send" component={Send} options={
                {
                    headerShown: true,

                    headerStyle: {
                        backgroundColor: "#060606f9"
                    },
                    headerTitleAlign: "center",
                    headerTintColor: "#fff",
                    headerBackTitle: "Back"
                }
            } />



        </Stack.Navigator>
    )
}

export default Index

const styles = StyleSheet.create({})