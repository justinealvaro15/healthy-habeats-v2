import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PhoneCase from './PhoneCase';
import StatsDetail from '../StatsDetail';
import * as ThemeConstants from '../../common/Themes';

const StatsContainer = () => {
    const render_inside = () => {
        return(
            <View style={styles.container}>
                <View style={styles.details}>
                    <View style={styles.bar}>
                        <View style={{ alignItems: 'center' }}>
                            <StatsDetail
                                imageUri={require('../../../assets/icons/energy.png')}
                                valueTotal={2375}
                                valueCurrent={1500}
                            />
                            <Text style={styles.text_header}>Energy</Text>
                            <Text style={styles.text_regular}>1500/2375 kcal</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <StatsDetail
                                imageUri={require('../../../assets/icons/carbs.png')}
                                valueTotal={380}
                                valueCurrent={355}
                            />
                            <Text style={styles.text_header}>Carbs</Text>
                            <Text style={styles.text_regular}>355/380 g</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return(
        <PhoneCase render_content={render_inside()}/>
    );
};

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        backgroundColor: ThemeConstants.MAIN_WHITE,
        justifyContent: 'center',
        marginHorizontal: ThemeConstants.CONTAINER_MARGIN*0.5,
        marginTop: ThemeConstants.CONTAINER_MARGIN*1.75,
        paddingTop: ThemeConstants.CONTAINER_MARGIN*0.2
    },
    details: {
        margin: ThemeConstants.CONTAINER_MARGIN*0.8,
    },
    text_header: {
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    text_regular: {
        alignSelf: 'center'
    }
});

export default StatsContainer;