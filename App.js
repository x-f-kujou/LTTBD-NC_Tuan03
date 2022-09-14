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
        Text > Above < /Text>  <
        /View>

        <
        View style = { styles.center0 } >
        <
        Image source = { require('. /images/circle.PNG') } > < /Image> </View >

        <
        View style = { styles.center1 } >
        <
        Text > GROW YOUR BUSINESS < /Text>  <
        /View>

        <
        View style = { styles.center2 } >
        <
        Text > We will help you to grow your business using online server < /Text> <
        /View>

        <
        View style = { styles.center3 } >
        <
        Button title = 'LOGIN' > < /Button> <
        Button title = 'SIGNUP' > < /Button>  <
        /View>

        <
        View style = { styles.below } >
        <
        Text > HOW WE WORK ? < /Text> <
        /View>  <
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