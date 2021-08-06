import * as React from 'react';
import { StyleSheet, View, Text, Image, PixelRatio, ImageBackground } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { textStyles } from './TextStyle';

interface IProps {
    // blank
}

export default function CategoryComponent() {

    const imageSize = (value: number) => {

        return PixelRatio.getPixelSizeForLayoutSize(value);
    }

    return (
        <View style={styles.categoryContainer}>

            <ScrollView
                horizontal={true}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View style={[styles.container, { marginLeft: 0 }]}>
                    <ImageBackground
                        source={require('../../assets/images/top-blog.png')}
                        style={styles.imageContainer}
                    />
                    <View style={[styles.textContainer, textStyles.shadow, {
                        transform: [{ rotate: "90deg" }]
                    }]}>
                        <Text>Marketing</Text>
                    </View>
                </View>
                <View style={[styles.container, {}]}>
                    <ImageBackground
                        source={require('../../assets/images/top-blog.png')}
                        style={styles.imageContainer}
                    />
                    <View style={[styles.textContainer, textStyles.shadow, {
                        transform: [{ rotate: "90deg" }]
                    }]}>
                        <Text>Marketing</Text>
                    </View>
                </View>
                <View style={[styles.container, {}]}>
                    <ImageBackground
                        source={require('../../assets/images/top-blog.png')}
                        style={styles.imageContainer}
                    />
                    <View style={[styles.textContainer, textStyles.shadow, {
                        transform: [{ rotate: "90deg" }]
                    }]}>
                        <Text>Marketing</Text>
                    </View>
                </View>
                <View style={[styles.container, {}]}>
                    <ImageBackground
                        source={require('../../assets/images/top-blog.png')}
                        style={styles.imageContainer}
                    />
                    <View style={[styles.textContainer, textStyles.shadow, {
                        transform: [{ rotate: "90deg" }]
                    }]}>
                        <Text>Marketing</Text>
                    </View>
                </View>
                <View style={[styles.container, {}]}>
                    <ImageBackground
                        source={require('../../assets/images/top-blog.png')}
                        style={styles.imageContainer}
                    />
                    <View style={[styles.textContainer, textStyles.shadow, {
                        transform: [{ rotate: "90deg" }]
                    }]}>
                        <Text>Marketing</Text>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}


const styles = StyleSheet.create({
    categoryContainer: {
        flex: 0,
    },
    container: {
        flexDirection: 'column',
        height: 140,
        width: 110,
        paddingVertical: 10,
        paddingRight: 20,
        position: 'relative',
        marginHorizontal: 10
    },
    imageContainer: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    textContainer: {
        flex: 0.30,
        zIndex: 1,
        position: 'absolute',
        top: 50,
        left: 68,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 5,
        backgroundColor: 'white'
    }
});