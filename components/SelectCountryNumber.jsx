import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Stack } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import { Svg, SvgFromUri, SvgFromXml, SvgXml } from 'react-native-svg'
import Gradient from "./Gradient"
import country from "../resource/country"
import icons from "../resource/flags"
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { router, useNavigation } from '@react-navigation/native';


const CountryItem = React.memo(({ countryCode, image, phoneCode, countryName, pressed }) => {
    const [svgContent, setSvgContent] = useState('');



    return (
        <TouchableOpacity style={styles.btn} onPress={() => pressed({ countryCode, image, phoneCode, countryName, })}>

            <SvgXml xml={image} height={35} width={35} style={{
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
            }}
                stroke={1} />

            <Text style={styles.name}>{countryName}</Text>
            <Text style={styles.code}>+{phoneCode}</Text>
        </TouchableOpacity>
    )
})

const SelectCountryNumber = () => {
    const navigation = useNavigation()
    const [countries, setCountries] = useState(Object.keys(country))
    return (
        <Gradient style={styles.selectCountry}>

            <View style={{
                backgroundColor: "#fff1",
                padding: 5,
                paddingHorizontal: 15,
                flexDirection: "row",
                alignItems: "center",
                flexGrow: 9,
                width: "95%",
                borderRadius: 8,
                alignSelf: "center"
            }}>
                <Ionicons name="search-outline" size={24} color="#fff" style={{
                    flex: 0.6
                }} />
                <TextInput style={styles.search} placeholder='Search Country' placeholderTextColor={"#fffa"} keyboardType='ascii-capable' />
            </View>
            <ScrollView contentContainerStyle={{
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                gap: 7,
                paddingVertical: 20
            }}>
                {
                    countries.map((countryItem, index) => (
                        <CountryItem  key={index} phoneCode={country[countryItem].phoneCode} countryName={country[countryItem].countryName} image={country[countryItem].image} pressed={(option) => {
                            router.push("login", { option })
                        }} />
                    ))
                }

            </ScrollView>

        </Gradient>
    )
}

export default SelectCountryNumber

const styles = StyleSheet.create({

    selectCountry: {
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 3
    },
    btn:
    {
        flexGrow: 8,
        flexDirection: "row",
        alignItems: "center",
        width: "95%",
        gap: 7,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#0009"
    },
    name: {
        color: "#fff",
        flex: 4,
        fontFamily: "MontserratRegular",
        fontSize: 20
    },
    code: {
        flex: 1,
        textAlign: "right",
        color: "#fff",
        fontFamily: "MontserratLight",
        fontSize: 17
    },
    search: {
        height: 40,
        flex: 6.5,
        color: "#fff",
        fontSize: 18,
        fontFamily: "MontserratRegular"
    }
})