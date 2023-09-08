import React, { useState } from 'react';
import {
    Button,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const CustomStatusbar = () => {
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(
        TRANSITIONS[0],
    );

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setStatusBarStyle("dark-content");
        } else {
            setStatusBarStyle("light-content");
        }
    };

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    };

    return (
        <StatusBar
            animated={true}
            backgroundColor={"#457585"}
            barStyle={"light-content"}
            showHideTransition={"fade"}
            hidden={false}
        />

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
});

export default CustomStatusbar; 