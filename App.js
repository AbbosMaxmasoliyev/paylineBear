import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile/Profile';
import Login from './screens/Login/index';
import Home from './screens/Home/index';
import Other from './screens/Other/index';
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Font from "expo-font";
import TransactionHistory from './screens/Other/TransactionHistory';



const Stack = createNativeStackNavigator();



function App() {
  const [font, setFont] = useState(false)
  const [initialRoute, setInitialRoute] = useState()

  useEffect(() => {

    function fonts() {
      Font.loadAsync({
        MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
        MontserratLight: require("./assets/fonts/Montserrat-Light.ttf"),
        MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
        Montserrat: require("./assets/fonts/MontserratRegular.ttf"),
        // Aquire: require("./assets/fonts/aquire/AquireBold-8Ma60.otf"),
      }).then(() => setFont(true));
      console.log(font);
    }
    fonts()

    const loadProfile = async () => {
      try {
        const profileData = await AsyncStorage.getItem('profile');
        if (!profileData) {
          setInitialRoute("Login")

        }
      } catch (error) {
        console.error('Profilni yuklashda xatolik yuz berdi:', error);
      }
    };

    loadProfile();



  }, [])
  if (!font) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>Loading....</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Home" component={Home} options={
          {
            headerShown: false
          }
        } />
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Other" component={Other} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
