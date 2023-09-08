import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'

export default function Profile({ navigation }) {
    useEffect(() => {
        ;
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <Button title="to home feed" onPress={() => navigation.navigate('Home', { screen: 'Feed' })} />
        </View>
    );
}

const styles = StyleSheet.create({})