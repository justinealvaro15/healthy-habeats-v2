import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import moment from "moment";

import * as ThemeConstants from '../common/Themes';
import { DATABASE_LENGTH } from '../common/Constants';
import * as foodData from '../../assets/foodDatabase.json';


let sortedFoodArray = [];
let signal = 5;

const FoodResultsList = ({ foodArray, setFoodArray, navigation, mealTitle ,results, currentDate, deleteID, userID, setIsModified, current_energy, total_energy, current_carbs, total_carbs, current_proteins, total_proteins, current_fats, total_fats}) => {
    // results === [Food Items]; 
    //      used for filtering search
    // foodArray === [Food Items]; 
    //      passed from Breakfast, Lunch, etc.,
    //      used for adding Food Items at HomeScreen
    
    const sortFoodsHandler = (food) => {
        //carbs is high
        
        if(current_fats >= total_fats * 0.55){
            sortedFoodArray = [...food].sort( (a,b) => a.fats - b.fats );
            signal = 1;
        }
        else if(current_proteins >= total_proteins * 0.55){
            sortedFoodArray = [...food].sort( (a,b) => a.proteins - b.proteins );
            signal = 2;
        }
        else if(current_carbs >= total_carbs * 0.55 ){
           sortedFoodArray = [...food].sort( (a,b) => a.carbs - b.carbs );
           signal = 3;
        }
        else if(current_energy >= total_energy * 0.55){
            sortedFoodArray = [...food].sort( (a,b) => a.calories - b.calories );
            signal = 4;
        }
        else{
            sortedFoodArray = food;
            signal = 5;
        }
        return sortedFoodArray;
    };
    
    // food array
    if(!results.length){
        const data = [];
        const foodItems =[];
        
        // store in array
        for (let i = 0; i < DATABASE_LENGTH; i++) {
            data.push(foodData[i]);

            const foodName = data[i].foodName;
            const id = (data[i].id).toString();;
            const grams = data[i].grams;
            const calories = data[i].calories;
            const carbs = data[i].carbs;
            const fats = data[i].fats;
            const proteins = data[i].proteins;
            const dateConsumed = data[i].dateConsumed;
            const deleteID = data[i].deleteID;
            const serving = data[i].serving;
            const pieces = data[i].pieces;
            foodItems.push({id, foodName, grams, calories, carbs, fats, proteins, dateConsumed, deleteID, serving, pieces});
        }       
        //results = foodItems;
        sortedFoodArray = sortFoodsHandler(foodItems);
    }
    else{
        //results=results;
        sortedFoodArray = sortFoodsHandler(results);
    }
    


    
    
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <FlatList
                    data={sortedFoodArray}
                    keyExtractor = {(sortedFoodArray) => sortedFoodArray.id}
                    renderItem={({item})=>{
                        return (
                            <TouchableOpacity 
                                style={styles.food}
                                onPress={() => {
                                    item.dateConsumed = moment(currentDate).format('MMMM DD YYYY');
                                    item.deleteID = Math.floor(Math.random() * 99999);
                                    //setFoodArray([...foodArray, item])
                                    navigation.navigate('EditServing',{
                                        foodArray: foodArray,
                                        setFoodArray: setFoodArray,
                                        foodItem: item,
                                        action: 'add',
                                        mealTitle: mealTitle,
                                        userID: userID,
                                        setIsModified: setIsModified
                                    });
                                    
                                }}
                            >
                                <View>
                                    <Text style={styles.text_regular}>{item.foodName}</Text>
                                    <Text style={styles.text_small}>
                                        Weight: {item.grams} g  •  
                                        {
                                            signal == 1 ? " Fats: " + item.fats + " g" :
                                            signal == 2 ? " Proteins: " + item.proteins + " g" :
                                            signal == 3 ? " Carbs: " + item.carbs + " g" :
                                            signal == 4 ? " Energy: " + item.calories + " kcal" :
                                            signal == 5 ? " Energy: " + item.calories + " kcal" :
                                            null
                                            }
                                    </Text>
                                    
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: ThemeConstants.CONTAINER_MARGIN,
        marginHorizontal: ThemeConstants.CONTAINER_MARGIN*2
    },
    food: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: ThemeConstants.CONTAINER_MARGIN/2,
    },
    main: {
        backgroundColor: ThemeConstants.MAIN_WHITE
    },
    text_regular: {
        fontSize: ThemeConstants.FONT_SIZE_REGULAR,
        fontWeight: '400',
        paddingBottom: 4
    },
    text_small: {
        color: ThemeConstants.FONT_GRAY,
        fontSize: ThemeConstants.FONT_SIZE_SMALL
    },
});

export default withNavigation(FoodResultsList);