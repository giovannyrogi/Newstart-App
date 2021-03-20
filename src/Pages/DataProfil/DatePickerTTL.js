import React, { useState } from "react";
import { StyleSheet, View, Text, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePickerTTL = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = () => {
        hideDatePicker();
    };

    return (
        <View style={styles.datePickerContainer}>
            <TouchableOpacity onPress={showDatePicker}>
                <Text> Pilih Tanggal </Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DatePickerTTL;

const styles = StyleSheet.create({
    datePickerContainer: {
        flex: 1,
        marginLeft: 15,
        marginRight: -15,
        paddingVertical: 15,
    }
})