import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useRouter, useNavigation } from '@react-navigation/native';
import { SvgFromXml } from 'react-native-svg';
import { backImage } from '../assets/icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const platform = Platform.OS
const GoBack = ({ name }) => {
    const router = useNavigation()
    return (
        <TouchableOpacity onPress={() => router.goBack(null)} style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5
        }}>
            {
                platform === "ios" ? <View style={{
                    flexDirection: "row",
                    gap: 5,
                    alignItems:"center"
                }}>
                    <FontAwesome5 name="chevron-left" size={24} color="#fff" />
                    <Text style={styles.text}>{name}</Text>
                </View> : <Ionicons name="arrow-back" size={24} color="#fff" />
            }
        </TouchableOpacity>
    )
}

export default GoBack


const Cancel = ({ name, pressed }) => {
    const router = useRouter()
    return (
        <TouchableOpacity onPress={() => pressed()} style={{
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Entypo name="chevron-small-left" size={24} color="#fff" />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}

export { Cancel }



const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontFamily: "MontserratMedium",
        fontSize: 18
    }
})