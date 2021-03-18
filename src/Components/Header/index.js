import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.headerstyle}>
                    <Text style={styles.textstyle}>Header</Text>
                </View>
            </View>
        );
    }

}

export default Header;

const styles = StyleSheet.create({
    headerstyle: {
        backgroundColor: "#673AB7",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        elevation: 50,
    },

    textstyle: {
        color: 'white',
        fontSize: 20,
    },
})