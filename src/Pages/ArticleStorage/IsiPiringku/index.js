import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import Modal from 'react-native-modal';

class IsiPiringku extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={{ flex: 1, textAlign: 'center' }}>Isi Piringku</Text>
            </SafeAreaView>
        );
    }
}

export default IsiPiringku;