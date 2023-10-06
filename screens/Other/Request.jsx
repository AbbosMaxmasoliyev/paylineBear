import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import { getCountryWithPhoneCode } from '../../resource/country';

export default function App() {
    const [mobileContacts, setMobilaeContacts] = useState([])
    useEffect(() => {
        getCountryWithPhoneCode()
        console.log("salom");
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    setMobilaeContacts(prev => prev = data)

                }
            }
        })();
    }, []);
    console.log(mobileContacts[0]);
    return (
        <View style={styles.container}>
            <Text>Contacts Module Example</Text>
            {
                mobileContacts.map((contactItem, index) => (
                    contactItem.phoneNumbers.map((mobileNumberObj, index) => (
                        <View key={index}>
                            <Text >{contactItem.firstName}</Text>
                            <Text >{mobileNumberObj.number}</Text>
                        </View>
                    ))
                ))
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
}); 