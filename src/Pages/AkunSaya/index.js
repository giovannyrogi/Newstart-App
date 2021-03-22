import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AkunSaya extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.textStyle}>Foto</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.textStyle}>Data Akun</Text>
                </View>
            </SafeAreaView>

        );
    }
}

export default AkunSaya;

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'crimson',
    },

    container3: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },

    textStyle: {
        textAlign: 'center',
        fontSize: 30,
    },

});