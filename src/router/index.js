import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Welcome from '../Pages/Welcome';
import Login from '../Pages/Login';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" l backgroundColor="#607D8B" />
                <View>
                    <Welcome />
                </View>
            </View>

        );
    }

}

export default Router;