import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Artikel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Text style={styles.container}>Artikel Screen</Text>
            </View>
        );
    }
}

export default Artikel;

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        fontSize: 30,

    }

});