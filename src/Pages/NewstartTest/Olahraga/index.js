import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { ButtonNext } from '../../../Components';

class Olahraga extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ textAlign: 'center', fontSize: 25 }} >Olahraga Screen</Text>
                <ButtonNext
                    title="Berikutnya"
                    onPress={() => this.props.navigation.navigate('Air')}
                    name="navigate-next"
                    size={22}
                />
            </SafeAreaView>
        );
    }
}

export default Olahraga;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})