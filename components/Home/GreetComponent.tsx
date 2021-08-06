import * as React from 'react';
import { StyleSheet, View, Text, Image, PixelRatio } from "react-native";
import { textStyles } from './TextStyle';

interface IProps {
    // blank
}

export default function GreetComponent() {

    const imageSize = (value: number) => {

        return PixelRatio.getPixelSizeForLayoutSize(value);
    }

    return (
        <View style={styles.greetContainer}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                    <Image
                        source={require('../../assets/images/profile.png')}
                        style={{ flex: 0, height: imageSize(30), width: imageSize(30), resizeMode: 'contain' }}
                    />
                </View>
            </View>
            <View style={styles.textContainer}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <Text style={[textStyles.baseStyle, textStyles.greetText]}>Good Morning</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={[textStyles.baseStyle,
                    { color: '#878787', fontSize: 20, fontFamily: 'rubik-semibold' }]}
                    >Jheave</Text>
                </View>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    greetContainer: {
        flex: 0,
        flexDirection: 'row',
        borderColor: 'red',
    },
    avatarContainer: {
        flex: 0.30,
        paddingVertical: 20,
        paddingRight: 10
    },
    textContainer: {
        flex: 0.70,
        paddingHorizontal: 10,
        paddingVertical: 35
    },
    avatar: {
        flex: 1,
        overflow: 'hidden'
    }
});