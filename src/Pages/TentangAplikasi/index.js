import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class TentangAplikasi extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>Tentang Aplikasi Screen</Text>
            </View>
        );
    }
}

export default TentangAplikasi;

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 25,
    }

});