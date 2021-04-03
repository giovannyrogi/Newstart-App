import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ButtonNext, JenisOlahraga } from '../../../Components';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import RadioForm from 'react-native-simple-radio-button';



const Olahraga = ({ navigation }) => {

    const [pickerValue, setPickerValue] = useState()
    const [isModalVisible, setModalVisible] = useState(false);

    var optOlahraga = [
        { label: "None", value: 0 },
        { label: "30 menit", value: 100 },
        { label: "<30 menit", value: 50 },
        { label: ">30 menit", value: 50 },
    ];

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.textStyle} >Silahkan pilih jenis olahraga yang dilakukan.</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.pickerContainer}>
                    <Picker
                        onValueChange={(value) => setPickerValue(value)}
                        selectedValue={pickerValue}
                    >
                        <Picker.Item label="Aerobik" value="Aerobik" />
                        <Picker.Item label="Keterampilan" value="Keterampilan" />
                        <Picker.Item label="Non Aerobik" value="Non Aerobik" />
                    </Picker>
                </View>
                <View>
                    <TouchableOpacity onPress={showModal}>
                        <Text style={styles.buttonStyle}>Jenis Olahraga</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationIn='fadeInDown'
                    animationInTiming={1000}
                    animationOut='slideOutDown'
                    animationOutTiming={1000}
                    isVisible={isModalVisible}
                    hasBackdrop={true}
                    onBackdropPress={hideModal}
                    style={styles.modalContainer}
                >
                    <SafeAreaView>
                        <ScrollView>
                            <Text style={styles.judulStyle}>Jenis Olahraga</Text>
                            <JenisOlahraga />
                            <View style={styles.buttonContainer}>

                                <TouchableOpacity
                                    onPress={hideModal}
                                    style={styles.buttonBackStyle}
                                >
                                    <Text style={styles.buttonTextStyle}>Kembali</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </Modal>
            </View>

            <Text style={styles.textStyle}>Berapa lama Anda berolahraga?</Text>
            <View style={styles.radioFormContainer}>
                <RadioForm
                    radio_props={optOlahraga}
                    initial={-1}
                    onPress={(value) => alert('Nilai ' + value)}
                    labelHorizontal={true}
                    selectedButtonColor={'#9B51E0'}
                    selectedLabelColor={'#9B51E0'}
                    buttonColor={'#757575'}
                    buttonSize={12}
                    labelStyle={styles.radioLabelStyle}
                />
            </View>


            <ButtonNext
                title="Berikutnya"
                onPress={() => navigation.navigate('Air')}
                name="navigate-next"
                size={22}
            />
        </SafeAreaView>
    )
}


export default Olahraga;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 25,
    },

    modalContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#757575',
    },

    buttonContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9B51E0',
        marginHorizontal: 135,
        marginVertical: 25
    },

    buttonBackStyle: {
        padding: 5
    },

    buttonTextStyle: {
        color: '#9B51E0',
        fontSize: 16,
    },

    textStyle: {
        fontSize: 18,

    },

    pickerContainer: {
        flex: 1,
        marginTop: 15,
        marginBottom: 20,
        borderWidth: 0.7,
    },

    buttonStyle: {
        marginRight: 50,
        marginLeft: 20,
        marginTop: 28,
        fontSize: 16,
        color: '#2250F2',
        textDecorationLine: 'underline',
        letterSpacing: 0.6
    },

    judulStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: 'dodgerblue',
        marginVertical: 10
    },

    radioFormContainer: {
        marginTop: 11,
    },

    radioLabelStyle: {
        fontSize: 15,
        letterSpacing: 0.3,
        marginRight: 35,
    },
})