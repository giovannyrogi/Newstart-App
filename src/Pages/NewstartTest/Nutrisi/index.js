import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { ButtonNext } from '../../../Components/';
import IconPlus from 'react-native-vector-icons/Entypo';

import MakanPagi from './MakanPagi';
import MakanSiang from './MakanSiang';
import MakanMalam from './MakanMalam';
import IsiPiringkuTest from './IsiPiringkuTest/';


class Nutrisi extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (

            <View style={styles.maincontainer}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* instruksi */}
                    <View style={styles.textNoteContainer}>
                        <Text style={{ fontSize: 15 }}>Silahkan tekan</Text>
                        <IconPlus
                            name='circle-with-plus'
                            size={25}
                            style={styles.plusIconStyle}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 10 }}>untuk menambahkan makanan</Text>

                    </View>

                    {/* Makan pagi, makan siang dan makan malam */}
                    <View>
                        <MakanPagi />
                        <MakanSiang />
                        <MakanMalam />
                    </View>

                    {/* Isi Piringku */}
                    <IsiPiringkuTest />

                    <ButtonNext
                        title="Berikutnya"
                        onPress={() => this.props.navigation.navigate('Olahraga')}
                        name="navigate-next"
                        size={22}

                    />
                </ScrollView>
            </View>

        );
    }
}

export default Nutrisi;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        marginHorizontal: 25,
        marginTop: 20,
    },



    textNoteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    plusIconStyle: {
        color: '#9B51E0',
        marginLeft: 10
    },


})
