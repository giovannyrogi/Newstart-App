import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import firebase from '../../Config/Firebase';
import Modal from 'react-native-modal';
import ArrowButtonNext from 'react-native-vector-icons/MaterialIcons';
import { GantiEmail } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';

const AkunSaya = () => {

    const userId = useSelector(state => state.uid)
    const [userInfo, setUserInfo] = useState('')


    // const [isModalVisible, setModalVisible] = useState(false);

    // const showModal = () => {
    //     setModalVisible(true);
    // };

    // const hideModal = () => {
    //     setModalVisible(false);
    // };

    useEffect(() => {
        // mengambil data kalori dan bmi
        firebase.database().ref('users/' + userId + '/userInfo/').get().then((snapshot) => {
            if (snapshot.exists()) {
                setUserInfo(snapshot.val())
                console.log(snapshot)
            }

        })
    }, [])

    // useEffect(() => {
    //     return () => {
    //         firebase.database().ref('users/' + userId + '/userInfo/').get().then((snapshot) => {
    //             if (snapshot.exists()) {
    //                 setUserInfo(snapshot.val())
    //                 console.log(snapshot)
    //             }
    //         }).catch(function (error) {
    //             console.log('Error : ' + error.message);
    //             throw error;
    //         });
    //     }
    // }, [])

    const renderDataEmail = () => {
        return (
            <View>
                <View style={styles.dataEmailContainer}>
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Text style={styles.textStyle}>Email </Text>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.DataStyle}>{userInfo.email} </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const renderDataUsername = () => {
        return (
            <View>
                <View style={styles.dataEmailContainer}>
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Text style={styles.textStyle}>Username </Text>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.DataStyle}>{userInfo.username} </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const renderPassword = () => {
        return (
            <View>
                <View style={styles.dataEmailContainer}>
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Text style={styles.textStyle}>Password </Text>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.DataStyle}></Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const renderDataUmur = () => {
        return (
            <View>
                <View style={styles.dataEmailContainer}>
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Text style={styles.textStyle}>Umur </Text>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.DataStyle}>{userInfo.umur}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const renderDataGender = () => {
        return (
            <View>
                <View style={styles.dataEmailContainer}>
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Text style={styles.textStyle}>Jenis kelamin </Text>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.DataStyle}>{userInfo.gender}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const renderDataTinggi = () => {
        return (
            <View>
                <View style={styles.dataEmailContainer}>
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Text style={styles.textStyle}>Tinggi badan </Text>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.DataStyle}>{userInfo.tinggi}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const renderDataBerat = () => {
        return (
            <View>
                <View style={styles.dataEmailContainer}>
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <Text style={styles.textStyle}>Berat badan </Text>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.DataStyle}>{userInfo.berat}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <ArrowButtonNext
                                name="navigate-next"
                                size={35}
                                style={styles.arrowButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.Maincontainer}>
            <View style={styles.subContainer1}>
                <Text style={{ fontSize: 30 }}>Foto</Text>
            </View>
            <View style={styles.subContainer2}>
                <View style={styles.dataContainer}>
                    {renderDataEmail()}
                </View>
                <View style={styles.dataContainer}>
                    {renderDataUsername()}
                </View>
                <View style={styles.dataContainer}>
                    {renderPassword()}
                </View>
                <View style={styles.dataContainer}>
                    {renderDataUmur()}
                </View>
                <View style={styles.dataContainer}>
                    {renderDataGender()}
                </View>
                <View style={styles.dataContainer}>
                    {renderDataTinggi()}
                </View>
                <View style={styles.dataContainer}>
                    {renderDataBerat()}
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

    dataEmailContainer: {
        flexDirection: 'row',
        marginLeft: 22,
        marginRight: 14,
        marginVertical: 3,
    },

    DataStyle: {
        fontSize: 14,
        letterSpacing: 1,
        fontFamily: 'Roboto-Regular',
    },

    userInfoContainer: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    iconContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {
        fontSize: 16,
        letterSpacing: 0.7,
        fontFamily: 'Roboto-Regular',
    },

    arrowButtonStyle: {
        color: '#9B51E0',
    },

});