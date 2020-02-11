import React, { useState, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import * as ThemeConstants from '../common/Themes';

const lowIntakeThreshold = 0.75;
const highIntakeThreshold = 1.0;

const iconHeight = 110;
const iconWidth = 110;
const iconOpacity = 0.65;


const StatsDetail = ({ valueTotal, valueCurrent }) => {
    const progress = valueCurrent/valueTotal ? valueCurrent/valueTotal : null;

    const [color, setColor] = useState(ThemeConstants.MAIN_YELLOW);

    useEffect(() => {
        if(progress <= lowIntakeThreshold){
            setColor(ThemeConstants.MAIN_YELLOW);
        } else if (progress <= highIntakeThreshold){
            setColor(ThemeConstants.HIGHLIGHT_GREEN);
        } else{
            setColor(ThemeConstants.MAIN_RED);
        }
    })

    return(
       <View style={styles.dimensions}>
            <Image
                source={require('../../assets/icons/test/broccoli-black.png')}
                style={[styles.dimensions, styles.position]}
            />
            <View style={styles.position}>
                <View style={[styles.progress, {height: iconHeight*progress}]}>
                    <Image
                        source={require('../../assets/icons/test/broccoli-black.png')}
                        style={[styles.dimensions, {tintColor: color}]}
                    />
                </View>
           </View>
       </View>
    );
};

const styles = StyleSheet.create({
    dimensions: {
        height: iconHeight,
        width: iconWidth
    },
    position: {
        bottom: 0,
        position: 'absolute'
    },
    progress: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        opacity: iconOpacity,
        overflow: 'hidden',
        width: iconWidth,
    }
});

export default StatsDetail;