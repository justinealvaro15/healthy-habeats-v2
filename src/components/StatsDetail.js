import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import * as ThemeConstants from '../common/Themes';

const lowIntakeThreshold = 0.75;
const highIntakeThreshold = 1.0;

const iconHeight = 80;
const iconWidth = 80;


const StatsDetail = ({ imageUri, valueTotal, valueCurrent }) => {
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
       <View style={[styles.dimensions, styles.padding]}>
            <Image
                source={imageUri}
                style={[styles.dimensions, styles.inactive, styles.position]}
            />
            <View style={styles.position}>
                <View style={[styles.progress, {height: iconHeight*progress}]}>
                    <Image
                        source={imageUri}
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
    inactive: {
        tintColor: ThemeConstants.ICON_GRAY
    },
    padding: {
        marginBottom: ThemeConstants.CONTAINER_MARGIN/2,
        marginTop: ThemeConstants.CONTAINER_MARGIN/3
    },
    position: {
        bottom: 0,
        position: 'absolute'
    },
    progress: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        overflow: 'hidden',
        width: iconWidth,
    }
});

export default StatsDetail;