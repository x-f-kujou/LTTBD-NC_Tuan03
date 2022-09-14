import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { Button } from "@react-native-material/core";


export default function App() {
    return (

        <
        View style = { styles.container } >
        <
        View style = { styles.above } >
        <
        Text > Above < /Text> <
        /View>

        <
        View style = { styles.center1 } >
        <
        Text > FORGET PASSWORD < /Text> <
        /View>

        <
        View style = { styles.center2 } >
        <
        Text > Provide your account 's email for which you want for reset your password</Text> <
        /View>

        <
        View style = { styles.below } >
        <
        Button title = 'NEXT' > < /Button> <
        /View> <
        /View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    center1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    center2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    center3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    below: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});