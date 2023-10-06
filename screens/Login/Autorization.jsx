import { StatusBar, Platform, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import OTPInput from "../../components/OTPInput";
// import { getHash, startOtpListener, removeListener } from 'react-native-otp-verify';
import { useState, useEffect, useContext } from "react";
import { MobileNumberContext } from "./loginContext";
import { behavior } from "../../utils/platform";
import { GlobalStyle } from "../../style/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



const platform = Platform.OS



export default function Autorization() {

    const navigation = useNavigation()
    const [mobile, setMobile] = useContext(MobileNumberContext)

    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);


    const maximumCodeLength = 5;

    function getOtp(message) {
        console.log(message);
        setOTPCode(prev => prev = message)
    }



    const [seconds, setSeconds] = useState(60);
    const [isResending, setIsResending] = useState(true);
    // useEffect(() => {
    //     if (platform === "android") {
    //         getHash().then(hash => console.log(hash))
    //         startOtpListener((message) => getOtp(message))

    //         return () => removeListener()
    //     }
    //     navigation.setOptions({
    //         headerShown: true,
    //         headerTitle: "Verification",

    //         headerStyle: {
    //             backgroundColor: '#060606',
    //         },
    //         headerTitleStyle: {
    //             color: "#fff",
    //             fontFamily: "MontserratBold"
    //         },
    //         headerLeft: () => {
    //             if (platform === "ios") {
    //                 return (
    //                     <TouchableOpacity onPress={() => {
    //                         navigation.goBack()
    //                     }}>
    //                         <Ionicons name="ios-chevron-back" size={24} color="#fff" />
    //                     </TouchableOpacity>
    //                 )
    //             } else {
    //                 return null
    //             }
    //         }
    //     })





    // }, [])



    useEffect(() => {
        let timer;

        if (isResending) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {
                        clearInterval(timer);
                        setIsResending(false);
                        return 60;
                    } else {
                        return prevSeconds - 1;
                    }
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer); // Timer tugaganida uni to'xtatish
        };
    }, [isResending]);

    const handleResend = () => {
        if (!isResending) {
            setIsResending(true);
            // sendResendSMS(); // SMS qayta jo'natish funktsiyasini chaqiring
        }
    };

    const verification = () => {
        const saveProfile = async () => {

            try {
                await AsyncStorage.setItem('profile', mobile);
                console.log('Profil saqlandi');
            } catch (error) {
                console.error('Profilni saqlashda xatolik yuz berdi:', error);
            }
        };
        if (otpCode === "12345") {
            saveProfile()
            navigation.navigate('Home', {
                screen: 'Menu',
            })
        }
    }
    return (
        <KeyboardAvoidingView behavior={behavior()} style={{
            flex: 1
        }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View style={styles.container}>
                    <StatusBar barStyle={"light-content"} />
                    <View style={styles.top}>
                        <Text style={styles.title}>We send verify one time password to your phone number: {mobile}</Text>
                    </View>
                    <View style={{
                        flex: 1.5
                    }}>
                        <OTPInput
                            code={otpCode}
                            setCode={setOTPCode}
                            maximumLength={maximumCodeLength}
                            setIsPinReady={setIsPinReady}
                        />
                        <TouchableOpacity style={{
                            paddingHorizontal: 25,
                            paddingVertical: 15,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                            onPress={handleResend}
                        >
                            <Text style={{
                                color: "#fff"
                            }}> Resend Code {seconds}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>

                        <TouchableOpacity style={{
                            paddingHorizontal: 25,
                            paddingVertical: 8,
                            ...GlobalStyle.btn,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                            onPress={verification}
                        >
                            <Text style={GlobalStyle.btnText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 9,
        flexDirection: "column",
        gap: 20
    },
    title: {
        fontFamily: "Montserrat",
        fontSize: 20,
        color: "#FFB332",
        textAlign: "center"
    },
    subtitle: {
        color: "#fff8",
        textAlign: "center"
    },
    top: {
        flex: 3,
        justifyContent: "flex-end"
    },
    bottom: {
        flex: 4
    }
});