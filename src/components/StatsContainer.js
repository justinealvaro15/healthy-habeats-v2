import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import StatsDetail from './StatsDetail';
import * as ThemeConstants from '../common/Themes';

const StatsContainer = ({ valuesTotal, valuesCurrent, navigateToEnergy }) => {
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableHighlight
                    style={styles.details}
                    onPress={() => {
                        console.log('navigate to energy');
                        navigateToEnergy;
                    }}
                    underlayColor={ThemeConstants.HIGHLIGHT_GREEN}
                >
                    <View>
                        <StatsDetail style={styles.details} valueTotal={valuesTotal.calories} valueCurrent={valuesCurrent.current_calories}/>
                        <Text style={styles.text_header}>Energy</Text>
                        <Text style={styles.text_regular}>{Math.round(valuesCurrent.current_calories*100)/100}/{Math.round(valuesTotal.calories*100)/100} kcal</Text>
                    </View>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.details}
                    onPress={() => console.log('navigate to carbs')}
                    underlayColor={ThemeConstants.HIGHLIGHT_GREEN}
                >
                    <View>
                        <StatsDetail style={styles.details} valueTotal={valuesTotal.calories} valueCurrent={valuesCurrent.current_calories}/>
                        <Text style={styles.text_header}>Carbs</Text>
                        <Text style={styles.text_regular}>{Math.round(valuesCurrent.current_carbs*100)/100}/{Math.round(valuesTotal.carbs*100)/100} g</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.row}>
                <TouchableHighlight
                    style={styles.details}
                    onPress={() => console.log('navigate to protein')}
                    underlayColor={ThemeConstants.HIGHLIGHT_GREEN}
                >
                    <View>
                        <StatsDetail style={styles.details} valueTotal={valuesTotal.calories} valueCurrent={valuesCurrent.current_calories}/>
                        <Text style={styles.text_header}>Protein</Text>
                        <Text style={styles.text_regular}>{Math.round(valuesCurrent.current_proteins*100)/100}/{Math.round(valuesTotal.proteins*100)/100} g</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.details}
                    onPress={() => console.log('navigate to fats')}
                    underlayColor={ThemeConstants.HIGHLIGHT_GREEN}
                >
                    <View>
                        <StatsDetail style={styles.details} valueTotal={valuesTotal.calories} valueCurrent={valuesCurrent.current_calories}/>
                        <Text style={styles.text_header}>Fat</Text>
                        <Text style={styles.text_regular}>{Math.round(valuesCurrent.current_fats*100)/100}/{Math.round(valuesTotal.fats*100)/100} g</Text>
                    </View>
                </TouchableHighlight>
                {/* <StatsDetail style={styles.details} title='Fat' unit='g' valueTotal = {valuesTotal.fats} valueCurrent = {valuesCurrent.current_fats} /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        backgroundColor: ThemeConstants.MAIN_WHITE,
        borderRadius: ThemeConstants.CONTAINER_RADIUS,
        marginHorizontal: ThemeConstants.CONTAINER_MARGIN,
        marginVertical: ThemeConstants.CONTAINER_MARGIN/2,
        paddingBottom: 18
    },
    details: {
        alignItems: 'center',
        borderRadius: ThemeConstants.CONTAINER_RADIUS,
        flex: 1,
        paddingVertical: ThemeConstants.CONTAINER_MARGIN/2
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