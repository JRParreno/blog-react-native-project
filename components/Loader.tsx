import * as React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Loader() {
    return (
        <View style={styles.fullScreen}>
            <View style={styles.container}>
                <LottieView style={{ flex: 1, marginBottom: 10 }} source={require("../assets/lottiefiles/9619-loading-dots-in-yellow.json")} autoPlay loop />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fullScreen: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    container: {
        height: 160,
        width: 160,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 24,
        opacity: 0.8,
    },
});