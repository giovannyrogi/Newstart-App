import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AkunSaya extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Text style={styles.container}>Akun Saya</Text>
            </View>
        );
    }
}

export default AkunSaya;

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        fontSize: 30,

    }

});