import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';

import * as ThemeConstants from '../common/Themes';

import IntakeFoodContainer from '../components/IntakeFoodContainer';


const FoodListScreen = ({ navigation }) => {
    const current_breakfast = navigation.getParam('current_breakfast');
    const current_lunch = navigation.getParam('current_lunch');
    const current_dinner = navigation.getParam('current_dinner');
    const current_snacks = navigation.getParam('current_snacks');

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
    const currentStat = navigation.getParam('currentStat');
    const totalStat = navigation.getParam('totalStat');
    const imageUri = navigation.getParam('imageUri');

    return(
        <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={imageUri} style={styles.icon}/>
                
                <View>
                    <Text style={styles.text_header}>{category}</Text>
                    <Text style={styles.text_regular}>
                        {currentStat}/{totalStat} {category === 'Energy' ? 'kcal' : 'g'}
                    </Text>
                    <Text style={styles.text_fulfilled}>{((currentStat/totalStat)*100).toFixed(1)}% fulfilled</Text>
                </View>
            </View>

            <View style={styles.intake}>
                <IntakeFoodContainer
                    food={current_breakfast}
                    mealTitle='Breakfast'
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
                    currentStat = {currentStat}
                    totalStat = {totalStat}
                />

                <IntakeFoodContainer
                    food={current_lunch}
                    mealTitle='Lunch'
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
                    currentStat = {currentStat}
                    totalStat = {totalStat}
                />

                <IntakeFoodContainer
                    food={current_dinner}
                    mealTitle='Dinner'
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
                    currentStat = {currentStat}
                    totalStat = {totalStat}
                />

                <IntakeFoodContainer
                    food={current_snacks}
                    mealTitle='Snacks'
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
                    currentStat = {currentStat}
                    totalStat = {totalStat}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: ThemeConstants.MAIN_BLUE,
        flexDirection: 'row',
        marginBottom: ThemeConstants.CONTAINER_MARGIN*1.5,
        paddingHorizontal: ThemeConstants.CONTAINER_MARGIN*2,
        paddingVertical: ThemeConstants.CONTAINER_MARGIN
    },
    icon: {
        height: 80,
        marginRight: ThemeConstants.CONTAINER_MARGIN,
        tintColor: ThemeConstants.MAIN_WHITE,
        width: 80,
    },
    text_fulfilled: {
        color: ThemeConstants.MAIN_WHITE,
        fontSize: ThemeConstants.FONT_SIZE_SMALL,
        fontStyle: 'italic',
        opacity: 0.65
    },
    text_header: {
        color: ThemeConstants.MAIN_WHITE,
        fontSize: ThemeConstants.FONT_SIZE_MEDIUM,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    text_regular: {
        borderColor: ThemeConstants.MAIN_WHITE,
        borderBottomWidth: 1,
        color: ThemeConstants.MAIN_WHITE,
        fontSize: ThemeConstants.FONT_SIZE_REGULAR,
        paddingBottom: 5,
        paddingRight: 10,
        marginBottom: 5
    }
});

export default withNavigation(FoodListScreen);