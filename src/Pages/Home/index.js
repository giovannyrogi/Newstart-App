import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Text style={styles.container}>Home Screen</Text>
            </View>
        );
    }
}

export default index;
const styles = StyleSheet.create({
    container: {
        textAlign: 'center',

    }

});
