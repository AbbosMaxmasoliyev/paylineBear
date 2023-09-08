import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from "react-native"
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import { MaterialIcons, SimpleLineIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


import { MobileNumberContext } from '../Login/loginContext';
import { SvgFromXml } from 'react-native-svg';
import { limits } from '../../assets/icons';
const Tab = createBottomTabNavigator();

const Index = () => {
    const [mobileNumber, setMobileNumber] = useState("")
    return (
        <MobileNumberContext.Provider value={[mobileNumber, setMobileNumber]}>

            <Tab.Navigator

                screenOptions={({ route }) => ({

                    tabBarIcon: ({ color, size }) => {
                        let icon

                        if (route.name === 'Home') {
                            icon = <Ionicons name="grid-outline" size={25} color={color} />
                        }
                        else if (route.name === 'Limits') {
                            icon = <SvgFromXml xml={limits(color, 25)} size={25} color={color} />
                        } else if (route.name === 'Help') {
                            icon = <Ionicons name="help-circle-outline" size={28} color={color} />
                        }


                        return icon;
                    },
                })

                }

                tabBarOptions={{
                    activeTintColor: '#fff', // Aktiv tabni rangi
                    inactiveTintColor: '#FF6B01', // Aktiv bo'lmagan tablar rangi

                }}


            >
                <Tab.Screen name="Home" component={Home}
                    options={{
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: "#282828",

                        },
                        tabBarLabel: 'Home',
                        tabBarLabelStyle: { fontSize: 10, }, // Ekran sarlavhasi stilini o'zlashtirish

                    }}
                />
                <Tab.Screen name="Limits" component={Home}
                    options={{
                        headerShown: false,
                        tabBarLabelStyle: { fontSize: 10, },
                        tabBarStyle: {
                            backgroundColor: "#282828",

                        },
                    }}
                />
                <Tab.Screen name="Help" component={Home}
                    options={{
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: "#282828",

                        },
                        tabBarLabelStyle: { fontSize: 10, },
                    }}
                />
            </Tab.Navigator>

        </MobileNumberContext.Provider>
    );
};


export default Index