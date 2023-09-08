import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight, StatusBar } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from "./Loading"
import { MobileNumberContext } from './loginContext';
import Autorization from './Autorization';
import SignPhoneCode from './signPhone';
const Stack = createNativeStackNavigator();
import AsyncStorage from "@react-native-async-storage/async-storage"

const Index = () => {

    const navigation = useNavigation()
    const [mobileNumber, setMobileNumber] = useState("");
    useEffect(() => {


        const loadProfile = async () => {
            try {
                const profileData = await AsyncStorage.getItem('profile');
                if (profileData) {
                    navigation.navigate("Home")

                }
            } catch (error) {
                console.error('Profilni yuklashda xatolik yuz berdi:', error);
            }
        };

        loadProfile();


    }, [])
    return (
        <MobileNumberContext.Provider value={[mobileNumber, setMobileNumber]}>
            <StatusBar barStyle={"light-content"} />

            <Stack.Navigator initialRouteName='Loading' screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Loading" component={Loading} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Signphone" component={SignPhoneCode} options={{
                    headerTitleAlign:"center"
                }}/>
                <Stack.Screen name="Authentication" component={Autorization}  options={{
                    headerTitleAlign:"center"
                }}/>
            </Stack.Navigator>

        </MobileNumberContext.Provider>
        // <View style={{
        //     flex: 1,
        //     justifyContent: "center",
        //     alignItems: "center"
        // }}>
        //     <Text>Salom</Text>
        // </View>
    );
};


export default Index