import '@firebase/firestore';

import { Feather } from '@expo/vector-icons';
import * as firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Keyboard, Platform, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import * as ThemeConstants from '../common/Themes';

// FOODARRAY: contains list of foods in a particular setting
// when pressed => FOODARRAY[INDEX] get the food object
// after deletion setFoodArray to

const IntakeFoodContainer = ({ food, mealTitle, onDeletion, onDeletion2, onDeletion3, onDeletion4, onDeletion5, foodArray1, setFoodArray1, token, setIsModified, navigation, category, currentStat, totalStat }) => {
    const firebaseRef = firebase.database().ref();
    const meal = onDeletion5;
    const foodArray = food;
    let x_date = foodArray;
    let temp = [];
    const [isDelete, setIsDelete] = useState();
    let counter = 0;
    const dateSelected = onDeletion4;

    const setFoodArray = onDeletion;
    const setIsDeleted = onDeletion2;
    const setTotalFoodArray = onDeletion3;

    let view_foods = x_date;

    const notifyMessage = (msg) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert(msg);
        }
    };

    useEffect( () => {
        console.log('Deleted');
        console.log(view_foods);
    }, [isDelete]); 

    return(
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.text_header}>{mealTitle}</Text>

                {x_date.length <= 0 ? <Text style={{ opacity: 0.35 }}>Log your food intake to fill this section.</Text> : null}

                <FlatList
                    data={view_foods}
                    keyExtractor = {(item) => (item.deleteID).toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item,index})=>{
                        return (
                            <TouchableOpacity style={styles.food}
                                onPress = { () => {
                                    navigation.navigate('EditServing',{
                                        foodArray: foodArray1,
                                        setFoodArray: setFoodArray1,
                                        foodItem: item,
                                        action: 'edit',
                                        mealTitle : mealTitle,
                                        userID: token,
                                        setIsModified: setIsModified
                                    });
                                }}
                            >
                                <View style={{flex: 9}}>
                                    <Text style={styles.text_regular}>{item.foodName}</Text>
                                    <Text style={styles.text_small}>
                                        Serving: {item.serving} • {category}:{' '}  

                                        {
                                            category === 'Energy' ? (item.calories*item.serving).toFixed(1) : 
                                            category === 'Carbs' ? (item.carbs*item.serving).toFixed(1) :
                                            category === 'Proteins' ? (item.proteins*item.serving).toFixed(1) :
                                            category === 'Fats' ? (item.fats*item.serving).toFixed(1) :
                                            null
                                        }
                                        
                                        {category === 'Energy' ? ' kcal ' : ' g '}
                                        (
                                        {
                                            category === 'Energy' ? (((item.calories*item.serving)/totalStat)*100).toFixed(1) : 
                                            category === 'Carbs' ? (((item.carbs*item.serving)/totalStat)*100).toFixed(1) :
                                            category === 'Proteins' ? (((item.proteins*item.serving)/totalStat)*100).toFixed(1) :
                                            category === 'Fats' ? (((item.fats*item.serving)/totalStat)*100).toFixed(1) :
                                            null
                                        }
                                        %) 
                                    </Text>
                                </View>

                                <View style={styles.button_delete}>
                                    <Feather
                                        name='x-circle'
                                        onPress={() => Alert.alert(
                                            'Are you sure?',
                                            'Remove ' + item.foodName + ' from ' + mealTitle + '?',
                                            [
                                                {
                                                    text: 'Cancel',
                                                    onPress: () => console.log('cancel pressed')
                                                },
                                                {
                                                    text: 'Remove',
                                                    onPress: () => {
                                                       

                                                        temp = [];
                                                        Keyboard.dismiss();
                                                        counter = 0;
                                                        let x = foodArray.filter(foodArray => (foodArray.foodName !== item.foodName) && (foodArray.deleteID !== item.deleteID));
                                                        let y = foodArray.filter(foodArray => (foodArray.foodName === item.foodName) && (foodArray.deleteID === item.deleteID));
                                                        let data = y[0].deleteID;
                                                        
                                                        for (let i = 0; i < meal.length; i++) {
                                                            if (meal[i].deleteID != data ){
                                                                counter = counter + 1;
                                                            }
                                                            else{
                                                                break;
                                                            }
                                                        }
                                                        
                                                        meal.splice(counter,1); // strip in total breakfast [1,2,3]
                                                        
                                                        if (x.length == 0){
                                                            setFoodArray([]);
                                                            view_foods = [];
                                                            console.log(view_foods);
                                                            setIsDeleted(Math.random());
                                                            setIsDelete(Math.random());
                                                            setIsModified(1);
                                                            
                                                        }
                                                        else{
                                                            view_foods = x;
                                                            console.log(view_foods);
                                                            setFoodArray(x); //current meal we are setting breakfast to contain
                                                            setTotalFoodArray(meal);
                                                            setIsDeleted(Math.random());
                                                            setIsDelete(Math.random());
                                                            setIsModified(1);
                                                        }
                                                        temp = meal;
                                                        firebaseRef.child('Users').child(token).child('Food Intakes').child(mealTitle).set(temp);

                                                        notifyMessage(`Removed ${item.foodName} successfully.`);
                                                        navigation.navigate('Home');
                                                    }
                                                }
                                            ]
                                        )}
                                        style={{fontSize: 25, color: ThemeConstants.FONT_GRAY}}
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    add: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: ThemeConstants.CONTAINER_MARGIN*2,
        paddingVertical: ThemeConstants.CONTAINER_MARGIN/2,
    },
    button_add: {
        backgroundColor: ThemeConstants.MAIN_YELLOW,
        borderRadius: ThemeConstants.CONTAINER_RADIUS,
        flex: 1,
        marginHorizontal: ThemeConstants.CONTAINER_MARGIN*2,
        marginVertical: ThemeConstants.CONTAINER_MARGIN/2
    },
    button_delete: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    container: {
        backgroundColor: ThemeConstants.MAIN_WHITE,
        marginBottom: ThemeConstants.CONTAINER_MARGIN*0.8
    },
    details: {
        marginHorizontal: ThemeConstants.CONTAINER_MARGIN*2
    },
    food: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: ThemeConstants.CONTAINER_MARGIN/2,
    },
    text_button: {
        alignContent: 'center',
        color: ThemeConstants.MAIN_WHITE,
        fontSize: ThemeConstants.FONT_SIZE_REGULAR,
        fontWeight: 'bold',
        marginVertical: ThemeConstants.CONTAINER_MARGIN/2,
        textAlign: 'center'
    },
    text_header: {
        fontSize: ThemeConstants.FONT_SIZE_HEADER,
        fontWeight: 'bold',
        paddingBottom: ThemeConstants.CONTAINER_MARGIN/3
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
    touchable: {
       backgroundColor: 'red' 
    }
});

export default withNavigation(IntakeFoodContainer);