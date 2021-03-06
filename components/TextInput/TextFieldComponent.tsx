import {
    StyleProp,
    StyleSheet,
    TextStyle,
    ViewStyle,
    TouchableOpacity,
    TextInput,
    View, Text
} from "react-native";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";



interface IProps {
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    value: string;
    placeholder?: string;
    onChange?: any;
    textType?: any;
    autofocus?: boolean;
    secureTextEntry?: boolean;
    textStyle?: StyleProp<TextStyle>;
    disabled?: Boolean;
    onTap?: () => void;
    iconLeftName?: any;
    iconRightName?: any;
    onPressRightIcon?: () => void;
    onPressLeftIcon?: () => void;
    onEndEditing?: () => void;
    iconVisible?: boolean;
    backspaceKey?: boolean;
    iconColor?: StyleProp<TextStyle>;
    textDisabled?: boolean;
    editable?: boolean;
    isMaxLength?: boolean;
    helpText?: string;
}

export default function TextFieldComponent(props: IProps) {
    return (
        <View style={styles.container} pointerEvents={props.disabled ? "none" : "auto"}>
            <View style={[styles.inputSection, props.style]}>
                {props.iconLeftName ? <Ionicons name={props.iconLeftName} size={20} style={[styles.iconStyle, { display: props.iconVisible ? "flex" : "none" }]} onPress={props.onPressLeftIcon} /> : null}

                <TextInput
                    style={[styles.textInput, props.textStyle]}
                    placeholder={props.placeholder}
                    autoFocus={props.autofocus}
                    value={props.value}
                    autoCapitalize={"none"}
                    autoCorrect={false}
                    textContentType={props.textType}
                    secureTextEntry={props.secureTextEntry}
                    onTouchStart={props.onTap}
                    onMagicTap={props.onTap}
                    onChangeText={props.onChange}
                    onEndEditing={props.onEndEditing}
                    maxLength={props.isMaxLength ? 30 : undefined}
                    textAlign={'left'}
                    textAlignVertical={'bottom'}
                />
                {props.iconRightName ? <Ionicons name={props.iconRightName} size={20} style={[styles.iconStyle, { display: props.iconVisible ? "flex" : "none" }]} onPress={props.onPressRightIcon} /> : null}
            </View>
            {props.helpText && (
                <Text
                    numberOfLines={4}
                    style={styles.helpText}
                >{props.helpText}</Text>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        textAlign: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        shadowColor: undefined,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
    },
    container: {
        flex: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'

    },
    inputSection: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
        color: "#fff",
        borderColor: "#F77750",
        borderWidth: 1,
        borderRadius: 8,
    },
    iconStyle: {
        alignSelf: 'center',
        paddingLeft: 2,
        color: "#262626",
    },
    text: {
        fontFamily: 'rubik-regular',
    },
    textInput: {
        paddingLeft: 10,
        flex: 1,
        textAlign: 'left',
        alignSelf: 'center',
        fontFamily: 'rubik-light',
        color: "#262626",
        paddingVertical: 0,
    },
    helpText: {
        fontFamily: 'poppins-light',
        color: '#878787',
        textAlign: 'justify',
        marginTop: 10
    }
});
