import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ViewWithLoading from '../../components/WithSafeAreaView';

export default function RegisterScreen() {

    return (
        <ViewWithLoading loading={false}>
            <View>
                <Text>
                    Register Screen
                </Text>
            </View>
        </ViewWithLoading>
    );
}