import * as React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native';


interface IProps {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    customPadding?: boolean;
}


export default function ButtonComponent(props: IProps) {

    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={props.style}>
            <View style={[
                styles.button, props.buttonStyle,

                { paddingVertical: props.customPadding ? 0 : 10 }
            ]}>
                <Text style={[
                    styles.text,
                    props.textStyle
                ]}
                    allowFontScaling
                    adjustsFontSizeToFit
                    numberOfLines={1}
                >{props.title}</Text>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "stretch",
        borderRadius: 10,
        backgroundColor: '#F77750'
    },
    text: {
        textAlign: "center",
        fontFamily: 'rubik-light',
        paddingHorizontal: 10
    },
});