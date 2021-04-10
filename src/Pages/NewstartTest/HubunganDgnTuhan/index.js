import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { ButtonNext } from '../../../Components';
import CheckBox from '@react-native-community/checkbox';

import ButtonIconSelesai from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';

const HubunganDgnTuhan = ({ navigation }) => {

    const hasiltHubDgnTuhan = useSelector(state => state.resultHubunganDgnTuhan)
    const dispatch = useDispatch()
    const [optHubunganDgnTuhan, setoptHubunganDgnTuhan] = useState([
        {
            id: 1,
            nama: 'None',
            value: 0
        },
        {
            id: 2,
            nama: 'Berbuat baik',
            value: 50
        },
        {
            id: 3,
            nama: 'Beribadah/Berdoa',
            value: 50
        },
    ])


    const renderData = () => {
        return optHubunganDgnTuhan.map((item, id) => {
            return (
                <View key={id} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { onChecked(item.id) }}>
                        <Text style={{ marginTop: 5, left: 6, textAlign: 'center' }}>{item.nama}</Text>
                        <CheckBox
                            value={item.checked}
                            onValueChange={() => { onChecked(item.id) }}
                            style={{ alignSelf: 'center', left: 6 }}
                        />
                    </TouchableOpacity>
                </View>

            )
        })
    }



    const onChecked = (id) => {
        const data = [...optHubunganDgnTuhan]
        const index = data.findIndex(x => x.id === id);
        data[index].checked = !data[index].checked
        setoptHubunganDgnTuhan(data);

    }

    const getSelectedData = (sum, hasil) => {
        var nama = optHubunganDgnTuhan.map((t) => t.nama)
        var checks = optHubunganDgnTuhan.map((t) => t.checked)
        var values = optHubunganDgnTuhan.map((t) => t.value)
        const selected = []

        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                selected.push(values[i])
                sum = selected.reduce((a, c) => {
                    return a + c
                }, 0);

            }
            if (sum == null) {
                sum = 0
            }

        }


        dispatch({ type: 'RESULT_HUB_DGN_TUHAN', value: sum });
        navigation.navigate('Hati Senang')
    }

    return (
        <View style={styles.mainContainer}>
            <Text>Nilai Global : {hasiltHubDgnTuhan}</Text>
            <Text style={styles.textStyle}>Apakah Anda sudah menjalin hubungan dengan Tuhan ?</Text>
            <View style={{ flexDirection: 'row' }}>
                {renderData()}
            </View>

            <ButtonNext
                title="Berikutnya"
                onPress={() => getSelectedData()}
                name="navigate-next"
                size={22}
            />
        </View>
    )
}

export default HubunganDgnTuhan;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 25,
    },

    textStyle: {
        fontSize: 16,
        letterSpacing: 0.5,
        fontFamily: 'Poppins-Regular'
    },

})