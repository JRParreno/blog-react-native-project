import * as React from 'react';
import { StyleSheet, View, Text, PixelRatio, Alert } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import ButtonComponent from '../../components/Button/ButtonComponent';
import ViewWithLoading from '../../components/WithSafeAreaView';
import LottieView from 'lottie-react-native';
import TextFieldComponent from '../../components/TextInput/TextFieldComponent';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";


export default function LoginScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [show, setshow] = useState(true);
    const toggleShow = () => setshow(previousState => !previousState);

    const handleLogin = () => {
        let testUser = 'jrparreno';
        let testPassowrd = '2020test';

        if (username.length > 0 && password.length > 0) {
            if (testUser === username && testPassowrd === password) {
                Alert.alert('successfully login');
                navigation.navigate('Registration');
            } else {
                Alert.alert('invalid credentials');
            }
        } else {
            // error
            Alert.alert('Error login')
        }

    }

    return (
        <ViewWithLoading loading={false}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.animateContainer}>
                    <LottieView style={{ flex: 1 }} source={require('../../assets/lottiefiles/38435-register (1).json')} autoPlay loop />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.textHeader}>Login</Text>
                    </View>
                    <TextFieldComponent
                        value={username}
                        onChange={setUsername}
                        textType={'text'}
                        placeholder={'Username'}
                        iconLeftName={'person-circle-outline'}
                        iconVisible={true}
                        style={{ paddingVertical: 10, marginBottom: 15, paddingHorizontal: 15 }}
                        iconRightName={username.length > 0 ? 'close-circle-outline' : undefined}
                        onPressRightIcon={() => {
                            setUsername('');
                        }}
                    />
                    <TextFieldComponent
                        value={password}
                        onChange={setPassword}
                        textType={'password'}
                        placeholder={'Password'}
                        iconLeftName={'lock-closed-outline'}
                        iconVisible={true}
                        style={{ paddingVertical: 10, marginBottom: 15, paddingHorizontal: 15 }}
                        secureTextEntry={show}
                        iconRightName={show ? 'eye-outline' : 'eye-off-outline'}
                        onPressRightIcon={toggleShow}

                    />
                    <View style={styles.forgotPasswordContainer}>
                        <Text style={styles.textStyle}>Forgot password</Text>
                    </View>

                    <ButtonComponent
                        onPress={handleLogin}
                        title={'Login'}
                        buttonStyle={{
                            paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(10),
                            paddingVertical: PixelRatio.getPixelSizeForLayoutSize(20)
                        }}
                        textStyle={{ color: 'white', fontSize: 20 }}
                    />

                    <View style={styles.createAccountContainer}>
                        <Text style={[styles.textStyle, { fontSize: 20, fontFamily: 'rubik-light', color: '#F77750' }]}>Create Account</Text>
                    </View>
                </View>
            </ScrollView>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    animateContainer: {
        flex: 3.5,
    },
    formContainer: {
        flex: 2,
        alignItems: 'center',
        paddingHorizontal: 40
    },
    headerContainer: {
        flex: 0,

    },
    forgotPasswordContainer: {
        flex: 0,
        alignSelf: 'flex-end',
        marginBottom: 20
    },
    textHeader: {
        fontFamily: 'rubik-semibold',
        fontSize: 25,
        marginVertical: 30
    },
    createAccountContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20

    },
    textStyle: {
        fontFamily: 'rubik-regular',
        color: '#878787'
    }
});