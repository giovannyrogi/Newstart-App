import React, { useState } from 'react';
import { View, TouchableOpacity, Platform, StyleSheet, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment'



const DatePickerTTL = (props) => {
    const { defaultDate } = props;
    const [date, setDate] = useState(moment(defaultDate));
    const [show, setShow] = useState(false);


    const onChange = (e, selectedDate) => {
        //setDate(moment(selectedDate));

        if (selectedDate) {
            setDate(moment(selectedDate));
        }
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
                <Text style={styles.textStyle}>{date.format('MMMM Do, YYYY')}</Text>
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
    defaultDate: moment()
};
//     const DatePickerTTL = (props) => {
//     const [date, setDate] = useState(new Date());
// const [mode, setMode] = useState('date');
// const [show, setShow] = useState(false);

//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setShow(Platform.OS === 'ios');
//         setDate(currentDate);
//         console.log(date)
//     };

//     const showMode = (currentMode) => {
//         setShow(true);
//         setMode(currentMode);
//     };

//     const showDatepicker = () => {
//         showMode('date');
//     };

//     const onDonePress = () => {
//         props.onDataChange(date)
//     }

//     return (
//         <View>
//             <View>
//                 <TouchableOpacity onPress={showDatepicker}>
//                     <Text>{date}</Text>
//                 </TouchableOpacity>
//             </View>
//             {show && (
//                 <DateTimePicker
//                     testID="dateTimePicker"
//                     value={date}
//                     mode={mode}
//                     is24Hour={true}
//                     display="default"
//                     onChange={onChange}
//                     neutralButtonLabel="batal"
//                 />
//             )}
//         </View>
//     );
// };





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
    }
})