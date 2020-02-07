import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import * as ThemeConstants from '../common/Themes';

const lowIntakeThreshold = 0.75;
const highIntakeThreshold = 1.0;

// const StatsDetail = ({ title, unit, valueTotal, valueCurrent }) => {
const StatsDetail = () => {
    const valueTotal = 2000;
    const valueCurrent = 1000;

    const progress = valueCurrent/valueTotal ? valueCurrent/valueTotal : null;

    const [color, setColor] = useState(ThemeConstants.MAIN_YELLOW);

    useEffect(() => {
        if(progress <= lowIntakeThreshold){
            setColor(ThemeConstants.MAIN_YELLOW);
        } else if (progress <= highIntakeThreshold){
            setColor(ThemeConstants.MAIN_GREEN);
        } else{
            setColor(ThemeConstants.MAIN_RED);
        }
    })

    return(
        <Image
            source={require('../../assets/icons/test/broccoli-black.png')}
            style={[styles.icon, { height: 150*progress }]}
        />
    );
};

const styles = StyleSheet.create({
    icon: {
        bottom: 0,
        width: 150,
        position: 'absolute',
        resizeMode: 'cover',
        resizeMethod: 'resize',
        borderColor: 'red',
        borderWidth: 1
    }
});

export default StatsDetail;