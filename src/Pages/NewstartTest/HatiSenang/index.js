import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { ButtonSelesai } from '../../../Components';



class HatiSenang extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ textAlign: 'center', fontSize: 25 }} >HatiSenang Screen</Text>
                <ButtonSelesai
                    title="Selesai"
                    onPress={() => this.props.navigation.replace('Home')}
                    name="checkmark-done"
                    size={22}
                />
            </SafeAreaView>
        );
    }
}

export default HatiSenang;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})