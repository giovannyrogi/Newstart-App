import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { ButtonNext } from '../../../Components';

class SinarMatahari extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ textAlign: 'center', fontSize: 25 }} >SinarMatahari Screen</Text>
                <ButtonNext
                    title="Berikutnya"
                    onPress={() => this.props.navigation.navigate('PengendalianDiri')}
                    name="navigate-next"
                    size={22}
                />
            </SafeAreaView>
        );
    }
}

export default SinarMatahari;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})