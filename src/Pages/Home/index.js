import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler, SafeAreaView, TouchableOpacity } from 'react-native';

import { ButtonNext } from '../../Components';


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
            <SafeAreaView style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.textStyle}>Hasil</Text>
                </View>
                <View style={styles.container3}>
                    <ButtonNext
                        title="Newstart Test"
                        onPress={() => this.props.navigation.navigate('Nutrisi')}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container3: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        textAlign: 'center',
        fontSize: 30,
    },

});