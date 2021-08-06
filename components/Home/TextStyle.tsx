import * as React from 'react';
import { StyleSheet, View, Text } from "react-native";

export const textStyles = StyleSheet.create({
    baseStyle: {
        fontSize: 15,
        color: '#262626',
        fontFamily: 'rubik-regular',
    },
    greetText: {
        fontSize: 25,
        fontFamily: 'rubik-semibold',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 3,
    }
});