import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground, PixelRatio } from "react-native";
import { textStyles } from './TextStyle';
import { Ionicons } from '@expo/vector-icons';

interface IProps {
    // blank
    uri: string;
    blog: string;
}

export default function TopBlogComponent() {

    const imageSize = (value: number) => {

        return PixelRatio.getPixelSizeForLayoutSize(value);
    }

    return (
        <View style={styles.topBlogContainer}>
            <ImageBackground
                source={require('../../assets/images/top-blog.png')}
                style={styles.imageContainer}
                resizeMode='cover'
            />
            <View style={[styles.captionContainer, textStyles.shadow]}>
                <Text style={[textStyles.baseStyle, { alignSelf: 'center', fontSize: 20 }]}>Top Blogs</Text>
                <Ionicons name={'arrow-forward-sharp'} style={{ alignSelf: 'center' }} size={30} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    topBlogContainer: {
        flex: 0,
        paddingRight: 30,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    imageContainer: {
        height: 250,
        width: "100%",
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    captionContainer: {
        height: 75,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 30,
        zIndex: 1,
        top: 165,
        bottom: 50,
        left: 30,
        right: 0,
        position: 'absolute',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    }

});