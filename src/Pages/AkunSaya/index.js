import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ArrowButtonNext from 'react-native-vector-icons/MaterialIcons';
import firebase from '../../Config/Firebase';
import GantiEmail from './GantiEmail'
import GantiPassword from './GantiPassword'
import GantiUmur from './GantiUmur'
import GantiGender from './GantiGender'
import GantiTinggi from './GantiTinggi'
import GantiBerat from './GantiBerat'


const AkunSaya = () => {

    const userId = useSelector(state => state.uid)

    const [userInfo, setUserInfo] = useState('')

    useEffect(() => {
        // mengambil data user
        firebase.database().ref('users/' + userId + '/userInfo/').get().then((snapshot) => {
            if (snapshot.exists()) {
                setUserInfo(snapshot.val())
                console.log(snapshot)
            }

        })
    }, [])

    return (
        <View style={styles.Maincontainer}>
            <View style={styles.subContainer1}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ left: 30 }}>
                        <Text style={styles.fotoStyle}>Foto</Text>
                    </View>
                    <View style={{ left: 50, alignItems: 'center', justifyContent: 'center', }}>
                        <TouchableOpacity>
                            <Text style={{ color: 'dodgerblue' }}>Ganti Foto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.DataStyle}>{userInfo.username} </Text>
            </View>
            <View style={styles.subContainer2}>
                <View style={styles.dataContainer}>
                    <GantiEmail />
                </View>
                <View style={styles.dataContainer}>
                    <GantiPassword />
                </View>
                <View style={styles.dataContainer}>
                    <GantiUmur />
                </View>
                <View style={styles.dataContainer}>
                    <GantiGender />
                </View>
                <View style={styles.dataContainer}>
                    <GantiTinggi />
                </View>
                <View style={styles.dataContainer}>
                    <GantiBerat />
                </View>
            </View>
        </View >
    );



}

export default AkunSaya;

const styles = StyleSheet.create({

    Maincontainer: {
        flex: 1,
    },

    subContainer1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderColor: '#BDBDBD',
    },

    subContainer2: {
        flex: 2,
    },

    dataContainer: {
        borderBottomWidth: 1,
        borderColor: '#BDBDBD',
    },

    fotoStyle: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 30,
    },

    DataStyle: {
        fontSize: 14,
        letterSpacing: 1,
        fontFamily: 'Roboto-Regular',
        marginTop: 10
    },

});