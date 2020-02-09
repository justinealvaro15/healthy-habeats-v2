import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { withNavigation,} from 'react-navigation';
import StatsDetail from './StatsDetail';
import * as ThemeConstants from '../common/Themes';

const StatsContainer = ({ valuesTotal, valuesCurrent, variables, navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableHighlight
                    style={styles.details}
                    onPress={ () => {
                        
                        navigation.navigate('FoodList', {
                            current_breakfast: variables.current_breakfast,
                            current_lunch: variables.current_lunch,
                            current_dinner: variables.current_dinner,
                            current_snacks: variables.current_snacks,
                            current_energy: variables.current_energy, 
                            current_carbs: variables.current_carbs, 
                            current_proteins: variables.current_proteins, 
                            current_fats: variables.current_fats, 
                            total_energy: variables.total_energy,
                            total_carbs: variables.total_carbs,
                            total_proteins: variables.total_proteins,
                            total_fats: variables.total_fats,
                            breakfast: variables.breakfast,
                            lunch: variables.lunch,
                            dinner: variables.dinner,
                            snacks: variables.snacks,
                            setBreakfast: variables.setBreakfast,
                            setLunch: variables.setLunch,
                            setDinner: variables.setDinner,
                            setSnacks: variables.setSnacks,
                            setCurrentBreakfast: variables.setCurrentBreakfast,
                            setCurrentLunch: variables.setCurrentLunch,
                            setCurrentDinner: variables.setCurrentDinner,
                            setCurrentSnacks: variables.setCurrentSnacks,
                            dateSelected: variables.dateSelected,
                            dateMoment: variables.dateMoment,
                            token: variables.token,
                            setIsModified: variables.setIsModified,
                            setIsDeleted: variables.setIsDeleted,
                            category: 'Energy'
                        });
                        }
                    }
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
                    onPress={ () => {
                        
                        navigation.navigate('FoodList', {
                            current_breakfast: variables.current_breakfast,
                            current_lunch: variables.current_lunch,
                            current_dinner: variables.current_dinner,
                            current_snacks: variables.current_snacks,
                            current_energy: variables.current_energy, 
                            current_carbs: variables.current_carbs, 
                            current_proteins: variables.current_proteins, 
                            current_fats: variables.current_fats, 
                            total_energy: variables.total_energy,
                            total_carbs: variables.total_carbs,
                            total_proteins: variables.total_proteins,
                            total_fats: variables.total_fats,
                            breakfast: variables.breakfast,
                            lunch: variables.lunch,
                            dinner: variables.dinner,
                            snacks: variables.snacks,
                            setBreakfast: variables.setBreakfast,
                            setLunch: variables.setLunch,
                            setDinner: variables.setDinner,
                            setSnacks: variables.setSnacks,
                            setCurrentBreakfast: variables.setCurrentBreakfast,
                            setCurrentLunch: variables.setCurrentLunch,
                            setCurrentDinner: variables.setCurrentDinner,
                            setCurrentSnacks: variables.setCurrentSnacks,
                            dateSelected: variables.dateSelected,
                            dateMoment: variables.dateMoment,
                            token: variables.token,
                            setIsModified: variables.setIsModified,
                            setIsDeleted: variables.setIsDeleted,
                            category: 'Carbs'
                        });
                        }
                    }
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
                    onPress={ () => {
                        
                        navigation.navigate('FoodList', {
                            current_breakfast: variables.current_breakfast,
                            current_lunch: variables.current_lunch,
                            current_dinner: variables.current_dinner,
                            current_snacks: variables.current_snacks,
                            current_energy: variables.current_energy, 
                            current_carbs: variables.current_carbs, 
                            current_proteins: variables.current_proteins, 
                            current_fats: variables.current_fats, 
                            total_energy: variables.total_energy,
                            total_carbs: variables.total_carbs,
                            total_proteins: variables.total_proteins,
                            total_fats: variables.total_fats,
                            breakfast: variables.breakfast,
                            lunch: variables.lunch,
                            dinner: variables.dinner,
                            snacks: variables.snacks,
                            setBreakfast: variables.setBreakfast,
                            setLunch: variables.setLunch,
                            setDinner: variables.setDinner,
                            setSnacks: variables.setSnacks,
                            setCurrentBreakfast: variables.setCurrentBreakfast,
                            setCurrentLunch: variables.setCurrentLunch,
                            setCurrentDinner: variables.setCurrentDinner,
                            setCurrentSnacks: variables.setCurrentSnacks,
                            dateSelected: variables.dateSelected,
                            dateMoment: variables.dateMoment,
                            token: variables.token,
                            setIsModified: variables.setIsModified,
                            setIsDeleted: variables.setIsDeleted,
                            category: 'Proteins'
                        });
                        }
                    }
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
                    onPress={ () => {
                        
                        navigation.navigate('FoodList', {
                            current_breakfast: variables.current_breakfast,
                            current_lunch: variables.current_lunch,
                            current_dinner: variables.current_dinner,
                            current_snacks: variables.current_snacks,
                            current_energy: variables.current_energy, 
                            current_carbs: variables.current_carbs, 
                            current_proteins: variables.current_proteins, 
                            current_fats: variables.current_fats, 
                            total_energy: variables.total_energy,
                            total_carbs: variables.total_carbs,
                            total_proteins: variables.total_proteins,
                            total_fats: variables.total_fats,
                            breakfast: variables.breakfast,
                            lunch: variables.lunch,
                            dinner: variables.dinner,
                            snacks: variables.snacks,
                            setBreakfast: variables.setBreakfast,
                            setLunch: variables.setLunch,
                            setDinner: variables.setDinner,
                            setSnacks: variables.setSnacks,
                            setCurrentBreakfast: variables.setCurrentBreakfast,
                            setCurrentLunch: variables.setCurrentLunch,
                            setCurrentDinner: variables.setCurrentDinner,
                            setCurrentSnacks: variables.setCurrentSnacks,
                            dateSelected: variables.dateSelected,
                            dateMoment: variables.dateMoment,
                            token: variables.token,
                            setIsModified: variables.setIsModified,
                            setIsDeleted: variables.setIsDeleted,
                            category: 'Fats'
                        });
                        }
                    }
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

export default withNavigation(StatsContainer);