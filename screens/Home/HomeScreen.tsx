import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GreetComponent, TopBlogComponent, CategoryComponent } from '../../components/Home';
import ViewWithLoading from '../../components/WithSafeAreaView';


export default function HomeScreen() {

    return (
        <ViewWithLoading loading={false}>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, marginBottom: 40 }}
                >
                    <GreetComponent />
                    <TopBlogComponent />
                    <CategoryComponent />
                    <TopBlogComponent />
                    <View style={{ marginBottom: 100 }}></View>
                </ScrollView>
            </View>
        </ViewWithLoading>
    );
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingLeft: 35,
    },
});