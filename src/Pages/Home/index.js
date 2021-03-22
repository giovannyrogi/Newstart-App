import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // ? Fungsi untuk back button agar saat di tekan akan keluar dari app
    disableBackButton = () => {
        BackHandler.exitApp();
        return true;
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.disableBackButton);
    }
    componentWillUnMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.disableBackButton);
    }

    render() {
        return (
            <View>
                <Text style={styles.container}>Home Screen</Text>
            </View>
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        fontSize: 25
    }

});