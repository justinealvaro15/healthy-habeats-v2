import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import FoodResultsList from '../components/FoodResultsList';
import SearchBar from '../components/SearchBar';

import * as ThemeConstants from '../common/Themes';
import { DATABASE_LENGTH } from '../common/Constants';
import * as foodData from '../../assets/foodDatabase.json';





let current_energy = 0;
let current_carbs = 0;
let current_proteins = 0;
let current_fats = 0;
let total_energy = 0;
let total_carbs = 0;
let total_proteins = 0;
let total_fats = 0;

let foodArray=[];


// Store food item data
const data = [];
for (let i = 0; i < DATABASE_LENGTH; i++) {
    data.push(foodData[i]);
};


const filterResultsBySearch = (term) => {
    
    //console.log(term);
    if(!term.length){
        return { };
    } else {
        const string_to_check = term.toUpperCase();
        for (let i = 0; i < DATABASE_LENGTH; i++) {
            if(((data[i].foodName).toUpperCase()).includes(string_to_check)){
                const foodName = data[i].foodName;
                const id = (data[i].id).toString();
                const grams = data[i].grams;
                const calories = data[i].calories;
                const carbs = data[i].carbs;
                const fats = data[i].fats;
                const proteins = data[i].proteins;
                const dateConsumed = data[i].dateConsumed;
                const deleteID = data[i].deleteID;
                const serving = data[i].serving;
                const pieces = data[i].pieces;
                foodArray.push({id, foodName, grams, calories, carbs, fats, proteins, dateConsumed, deleteID, serving, pieces});
            }
        };
        sortFoodsHandler();
        
    }
};

const sortFoodsHandler = () => {
    //carbs is high
    let sortedFoodArray = [];
    if(current_fats >= total_fats * 0.55){
        sortedFoodArray = [...foodArray].sort( (a,b) => a.fats - b.fats );
    }
    else if(current_proteins >= total_proteins * 0.55){
        sortedFoodArray = [...foodArray].sort( (a,b) => a.proteins - b.proteins );
    }
    else if(current_carbs >= total_carbs * 0.55 ){
       sortedFoodArray = [...foodArray].sort( (a,b) => a.carbs - b.carbs );
    }
    else if(current_energy >= total_energy * 0.55){
        sortedFoodArray = [...foodArray].sort( (a,b) => a.calories - b.calories );
    }
    else{
        sortedFoodArray = foodArray;
    }
    return sortedFoodArray;
};

const SearchFoodScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    
    const temp_current_energy = navigation.getParam('current_energy');
    const temp_current_carbs = navigation.getParam('current_carbs');
    const temp_current_proteins = navigation.getParam('current_proteins');
    const temp_current_fats = navigation.getParam('current_fats');
    const temp_total_energy = navigation.getParam('total_energy');
    const temp_total_carbs = navigation.getParam('total_carbs');
    const temp_total_proteins = navigation.getParam('total_proteins');
    const temp_total_fats = navigation.getParam('total_fats');

    
    current_energy = temp_current_energy;
    current_carbs = temp_current_carbs;
    current_proteins = temp_current_proteins;
    current_fats = temp_current_fats;
    total_energy = temp_total_energy;
    total_carbs = temp_total_carbs;
    total_proteins = temp_total_proteins ;
    total_fats = temp_total_fats;



    useEffect( () => {
        console.log('sorting...');
    }, []);

    return (
        <View style={styles.main}>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={(word) => {
                }}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Home')} title='return'/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <FoodResultsList
                    foodArray={navigation.getParam('foodArray')}
                    setFoodArray={navigation.getParam('setFoodArray')}
                    currentDate={navigation.getParam('currentDate')}
                    deleteID = {navigation.getParam('deleteID')}
                    mealTitle = {navigation.getParam('mealTitle')}
                    userID = {navigation.getParam('userID')}
                    setIsModified = {navigation.getParam('setIsModified')}
                    results={filterResultsBySearch(term)}
                    
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: ThemeConstants.MAIN_WHITE,
        flex: 1
    }
});


export default withNavigation(SearchFoodScreen); 