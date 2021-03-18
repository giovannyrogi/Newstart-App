import React from 'react';
import { Button } from '../../Components/';

const ActionButton = ({ title, onPress }) => {
    return (
        <Button title={title} onPress={onPress} />
    )
}

export default ActionButton;