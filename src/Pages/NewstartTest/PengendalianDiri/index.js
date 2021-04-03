import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import { ButtonNext } from '../../../Components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import data from './data';



class PengendalianDiri extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            selectedData: []
        };
    }

    onChecked(id) {
        const data = this.state.data
        const index = data.findIndex(x => x.id === id);
        data[index].checked = !data[index].checked
        this.setState(data)
    }


    renderData() {
        return this.state.data.map((item, key) => {
            return (
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity key={key} onPress={() => { this.onChecked(item.id) }}>
                        <Text style={{ marginTop: 10, textAlign: 'center' }}>{item.key}</Text>
                        <CheckBox
                            value={item.checked}
                            onValueChange={() => { this.onChecked(item.id) }}
                            style={{ alignSelf: 'center' }}
                        />

                    </TouchableOpacity>
                </View>

            )
        })
    }

    getSelectedData() {
        var keys = this.state.data.map((t) => t.key)
        var checks = this.state.data.map((t) => t.checked)
        var values = this.state.data.map((t) => t.value)
        let Selected = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                Selected.push(values[i])
            }
        }
        alert(Selected)
    }


    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <Text style={styles.textStyle}>Apakah Anda mengkonsumsi beberapa pilihan dibawah ini ?</Text>
                <View style={{ flexDirection: 'row' }}>
                    {this.renderData()}
                </View>
                <TouchableOpacity onPress={() => { this.getSelectedData() }}>
                    <Text>Button</Text>
                </TouchableOpacity>

                <ButtonNext
                    title="Berikutnya"
                    onPress={() => this.props.navigation.navigate('Udara Segar')}
                    name="navigate-next"
                    size={22}
                />
            </SafeAreaView>
        );
    }
}

export default PengendalianDiri;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 25,
    },

    textStyle: {
        fontSize: 18,
        letterSpacing: 0.5,
    },

    checkboxStyle: {
    },

    checkBoxText: {
        marginRight: 10,
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 17,
    }
})