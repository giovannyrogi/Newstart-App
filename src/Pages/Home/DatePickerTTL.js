import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'



const DatePickerTTL = (props) => {

    const { defaultDate } = props;
    const dispatch = useDispatch()
    const [date, setDate] = useState(moment(defaultDate));
    const [show, setShow] = useState(false);


    const onChange = (e, selectedDate) => {
        setDate(moment(selectedDate));
        alert(selectedDate)
        dispatch({ type: 'SELECTED_DATE', value: date });
    }

    const onCancel = () => {
        setDate(moment(defaultDate));
        setShow(false);
    };

    const onDone = (date) => {
        setDate(moment(date));
        setShow(false);
    };

    return (
        <View style={styles.datePickerContainer}>
            <TouchableOpacity onPress={() => setShow(true)}>
                <Text style={styles.textStyle}>{date.format('DD/MMMM/YYYY')}</Text>
                <DateTimePickerModal
                    isVisible={show}
                    timeZoneOffsetInMinutes={0}
                    mode="date"
                    display='spinner'
                    minimumDate={new Date(moment().subtract(120, 'year').format('YYYY-MM-DD'))}
                    maximumDate={new Date(moment().format('YYYY-MM-DD'))}
                    onChange={onChange}
                    onConfirm={onDone}
                    onCancel={onCancel}
                />
            </TouchableOpacity>

        </View>
    );
};

DatePickerTTL.defaulProps = {
    defaultDate: moment(),
};


export default DatePickerTTL;

const styles = StyleSheet.create({
    datePickerContainer: {
        flex: 1,
        marginLeft: 15,
        marginRight: -15,
        paddingVertical: 15,

    },

    textStyle: {
        letterSpacing: 2,
        marginLeft: 5,
        color: '#fff',
        fontFamily: 'Roboto-Bold'
    }
})