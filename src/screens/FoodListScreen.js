import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';

import * as ThemeConstants from '../common/Themes';

import IntakeFoodContainer from '../components/IntakeFoodContainer';



const FoodListScreen = ({navigation}) => {


    const current_breakfast = navigation.getParam('current_breakfast');
    const current_lunch = navigation.getParam('current_lunch');
    const current_dinner = navigation.getParam('current_dinner');
    const current_snacks = navigation.getParam('current_snacks');
    const current_energy = navigation.getParam('current_energy');
    const current_carbs = navigation.getParam('current_carbs');
    const current_proteins = navigation.getParam('current_proteins');
    const current_fats = navigation.getParam('current_fats');
    const total_energy = navigation.getParam('total_energy');
    const total_carbs = navigation.getParam('total_carbs');
    const total_proteins = navigation.getParam('total_proteins');
    const total_fats = navigation.getParam('total_fats');
    const breakfast = navigation.getParam('breakfast');
    const lunch = navigation.getParam('lunch');
    const dinner = navigation.getParam('dinner');
    const snacks = navigation.getParam('snacks');
    const setBreakfast = navigation.getParam('setBreakfast');
    const setLunch = navigation.getParam('setLunch');
    const setDinner = navigation.getParam('setDinner');
    const setSnacks = navigation.getParam('setSnacks');
    const setCurrentBreakfast = navigation.getParam('setCurrentBreakfast');
    const setCurrentLunch = navigation.getParam('setCurrentLunch');
    const setCurrentDinner = navigation.getParam('setCurrentDinner');
    const setCurrentSnacks = navigation.getParam('setCurrentSnacks');
    const dateSelected = navigation.getParam('dateSelected');
    const dateMoment = navigation.getParam('dateMoment');
    const token = navigation.getParam('token');
    const setIsModified = navigation.getParam('setIsModified');
    const setIsDeleted = navigation.getParam('setIsDeleted');
    const category = navigation.getParam('category');

    return(
        <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>

            <View>
                <Text>FOOD LIST PAGE</Text>
                <Text>
                    {category + ': '}
                    {category === 'Energy' ? current_energy : 
                     category === 'Carbs' ? current_carbs :
                     category === 'Proteins' ? current_proteins :
                     category === 'Fats' ? current_fats :
                     null
                    }
                    {'/'}
                    {category === 'Energy' ? total_energy : 
                     category === 'Carbs' ? total_carbs :
                     category === 'Proteins' ? total_proteins :
                     category === 'Fats' ? total_fats :
                     null
                    }
                </Text>
            </View>


            <IntakeFoodContainer
                food={current_breakfast}
                mealTitle='Breakfast'
                navigateToSearchFood={() => navigation.navigate('SearchFood', {
                    foodArray: breakfast,
                    setFoodArray: setBreakfast,
                    currentDate: dateMoment,
                    deleteID: 0,
                    mealTitle: 'Breakfast',
                    userID: token,
                    setIsModified: setIsModified
                })}
                onDeletion={setCurrentBreakfast}
                onDeletion2={setIsDeleted}
                onDeletion3={setBreakfast}
                onDeletion4={dateSelected}
                onDeletion5={breakfast}
                foodArray1 = {breakfast}
                setFoodArray1 = {setBreakfast}
                token = {token}
                setIsModified = {setIsModified}
                category = {category}
                current_energy = {current_energy}
                current_carbs = {current_carbs}
                current_proteins = {current_proteins}
                current_fats = {current_fats}
            />

            <IntakeFoodContainer
                food={current_lunch}
                mealTitle='Lunch'
                navigateToSearchFood={() => navigation.navigate('SearchFood', {
                    foodArray: lunch,
                    setFoodArray: setLunch,
                    currentDate: dateMoment,
                    deleteID: 0,
                    mealTitle: 'Lunch',
                    userID: token,
                    setIsModified: setIsModified
                })}
                onDeletion={setCurrentLunch}
                onDeletion2={setIsDeleted}
                onDeletion3={setLunch}
                onDeletion4={dateSelected}
                onDeletion5={lunch}
                foodArray1 = {lunch}
                setFoodArray1 = {setLunch}
                token = {token}
                setIsModified = {setIsModified}
                category = {category}
                current_energy = {current_energy}
                current_carbs = {current_carbs}
                current_proteins = {current_proteins}
                current_fats = {current_fats}
            />

            <IntakeFoodContainer
                food={current_dinner}
                mealTitle='Dinner'
                navigateToSearchFood={() => navigation.navigate('SearchFood', {
                    foodArray: dinner,
                    setFoodArray: setDinner,
                    currentDate: dateMoment,
                    deleteID: 0,
                    mealTitle: 'Dinner',
                    userID: token,
                    setIsModified: setIsModified
                })}
                onDeletion={setCurrentDinner}
                onDeletion2={setIsDeleted}
                onDeletion3={setDinner}
                onDeletion4={dateSelected}
                onDeletion5={dinner}
                foodArray1 = {dinner}
                setFoodArray1 = {setDinner}
                token = {token}
                setIsModified = {setIsModified}
                category = {category}
                current_energy = {current_energy}
                current_carbs = {current_carbs}
                current_proteins = {current_proteins}
                current_fats = {current_fats}
            />

            <IntakeFoodContainer
                food={current_snacks}
                mealTitle='Snacks'
                navigateToSearchFood={() => navigation.navigate('SearchFood', {
                    foodArray: snacks,
                    setFoodArray: setSnacks,
                    currentDate: dateMoment,
                    deleteID: 0,
                    mealTitle: 'Snacks',
                    userID: token,
                    setIsModified: setIsModified
                })}
                onDeletion={setCurrentSnacks}
                onDeletion2={setIsDeleted}
                onDeletion3={setSnacks}
                onDeletion4={dateSelected}
                onDeletion5={snacks}
                foodArray1 = {snacks}
                setFoodArray1 = {setSnacks}
                token = {token}
                setIsModified = {setIsModified}
                category = {category}
                current_energy = {current_energy}
                current_carbs = {current_carbs}
                current_proteins = {current_proteins}
                current_fats = {current_fats}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    calendar: {
        height: 100,
        paddingTop: 15,
        paddingHorizontal: 15
    },
    main: {
        backgroundColor: ThemeConstants.MAIN_WHITE,
        flex: 1
    },
    padding: {
        backgroundColor: ThemeConstants.MAIN_BLUE,
        height: 100,
        position: 'absolute',
        left: 0,
        right: 0
    },
    stats: {
        position: 'relative',
    }
});

export default withNavigation(FoodListScreen);