import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import firebase from '../../../Config/Firebase';
import ActionIcon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';


const Data = ({ data }) => {

    const userId = useSelector(state => state.uid);

    const handleDelete = () => {
        const dataRef = firebase.database().ref('users/' + userId + '/userHistory/').child(data.id);
        dataRef.remove();
    }

    return (
        <View style={{ flexDirection: 'row', marginVertical: 5, borderBottomWidth: 0.5, borderTopWidth: 0.5, paddingVertical: 5, marginBottom: 5 }}>
            <View style={{ flex: 1.2, alignItems: 'center', }}>
                <Text style={{ fontSize: 12 }}> {data.Date} </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
                <Text style={{ fontSize: 12 }}> {data.Time} </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
                <Text style={{ fontSize: 12 }}> {data.newstartResult} </Text>
            </View>
            <View style={{ flex: 1.4, alignItems: 'center', }}>
                <Text style={{ fontSize: 12 }}> {data.interpretasiResult} </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
                <TouchableOpacity onPress={handleDelete}>
                    <ActionIcon
                        name='delete'
                        size={16}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Data;

const styles = StyleSheet.create({})
