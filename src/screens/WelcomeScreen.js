import React from 'react';
import { AsyncStorage, Dimensions, Image, StyleSheet, Text, Vibration, View, YellowBox } from 'react-native';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import * as ThemeConstants from '../common/Themes';
import * as firebase from 'firebase';
import '@firebase/firestore';

import * as NotificationsText from '../common/NotificationsText';

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested',
    'Setting a timer for a long period of time', // TODO: Remove when fixed
]);

const TIMER = 3000;
const dimensions = Dimensions.get('window');
const ratio = dimensions.width/350*0.7;

let token = 0;

const firebaseConfig = {
    apiKey: "AIzaSyCQ52Og2LIRcpu42Rh9HSSjOqgXqz5-IkQ",
    authDomain: "healthy-habeats-v2.firebaseapp.com",
    databaseURL: "https://healthy-habeats-v2.firebaseio.com",
    storageBucket: "healthy-habeats-v2.appspot.com",
};

firebase.initializeApp(firebaseConfig);
const firebaseRef = firebase.database().ref();

_handleNotification = notification => {
	Vibration.vibrate();
};

saveExpoToken = async (token) => {
	try {
		await AsyncStorage.setItem('userID', token);
	} catch (error) {
		// Error retrieving data
		console.log(error.message);
	}
};

registerForPushNotificationsAsync = async () => {
	if (Constants.isDevice) {
		const { status: existingStatus } = await Permissions.getAsync(
			Permissions.NOTIFICATIONS
		);
		let finalStatus = existingStatus;

		if (existingStatus !== 'granted') {
			const { status } = await Permissions.askAsync(
				Permissions.NOTIFICATIONS
			);
			finalStatus = status;
		}

		if (finalStatus !== 'granted') {
			alert('Failed to get push token for push notification!');
			return;
		}
		token = await Notifications.getExpoPushTokenAsync();
		token = token.slice(18,40);
		saveExpoToken(token);
	} else {
		alert('Must use physical device for Push Notifications');
	}
}; 

	
export default class WelcomeScreen extends React.Component {
	saveUserToken = async (userToken) => {
		this.setState({ userToken });
		try {
			await AsyncStorage.setItem('userToken', userToken);
		} catch (error) {
			// Error retrieving data
			console.log(error.message);
		}
	};

	getUserToken = async () => {
		try {
			const userToken = await AsyncStorage.getItem('userToken') || 'firstTime'
			this.setState(state => {
				return {
					userToken
				};
			})

			return userToken;
		} catch (error) {
			// Error retrieving data
			console.log(error.message);
		}      
	}

	deleteUserToken = async () => {
		try {
			await AsyncStorage.removeItem('userToken');
			await AsyncStorage.removeItem('weight');
			await AsyncStorage.removeItem('height');
			await AsyncStorage.removeItem('activityLevel');
		} catch (error) {
			// Error retrieving data
			console.log(error.message);
		}
	}

	componentDidMount() {
		registerForPushNotificationsAsync();
		_notificationSubscription = Notifications.addListener(_handleNotification);
		//console.log('Notifications Scheduled successfully!');
		
		let currentDate = Date.now();
		currentDate = new Date(currentDate);
		// get the day, month and year from current date to create time to schedule
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		const current_date = currentDate.getDate();
		const tomorrow_date = currentDate.getDate() + 1;
		const hour = currentDate.getHours();
		let time1 = 0;
		let time2 = 0;
		let time3 = 0;
		let time4 = 0;
		let time5 = 0;
		//let time6 = 0;
		//let time7 = 0;
		//let temp_date1 = new Date();
		//let temp_date2 = new Date();
		//let temp_date3 = new Date();
		//temp_date1.setHours(14,30);
		//temp_date2.setHours(17,30);
		//temp_date3.setHours(20,30);

		//notif#1 check: current_hour > 7am, set notif for 7am tommorow 
		if(hour >= 7){
			time1 = new Date(year, month, tomorrow_date, 7); //7am tomorrow
			//console.log('tom');
		} else{
			time1 = new Date(year, month, current_date, 7); //7am today
		};

		if(hour >= 12){
			time2 = new Date(year, month, tomorrow_date, 12); //12nn
		} else{
			time2 = new Date(year, month, current_date, 12); //12nn
			//console.log('today');
		};

		if(hour >= 19){
			time3 = new Date(year, month, tomorrow_date, 19); //7pm
		} else{
			time3 = new Date(year, month, current_date, 19); //7pm
			//console.log('today');
		};

		//tips/notifs
		if(hour >= 10){
			time4 = new Date(year, month, tomorrow_date, 10); //10am
			//console.log('tom');
		} else{
			time4 = new Date(year, month, current_date, 10); //10am
		};

		if(hour >= 16){
			time5 = new Date(year, month, tomorrow_date, 16); //4pm
		} else{
			time5 = new Date(year, month, current_date, 16); //4pm
			//console.log('today');
		};

		time1 = Date.parse(time1);
		time2 = Date.parse(time2);
		time3 = Date.parse(time3);
		time4 = Date.parse(time4);
		time5 = Date.parse(time5);

		const schedulingOptions1 = { time: time1, repeat: 'day' };
		const schedulingOptions2 = { time: time2, repeat: 'day' };
		const schedulingOptions3 = { time: time3, repeat: 'day' };
		const schedulingOptions4 = { time: time4, repeat: 'day' };
		const schedulingOptions5 = { time: time5, repeat: 'day' };
		setTimeout(() => {			
			// USE TO RESET STORAGE
			// this.deleteUserToken().then(() => 
				this.getUserToken()

			// )
			.then((state) => {
				if(this.state.userToken === 'firstTime'){
					//B,L,D notifs
					Notifications.scheduleLocalNotificationAsync(NotificationsText.scheduledNotification10, schedulingOptions1);
					Notifications.scheduleLocalNotificationAsync(NotificationsText.scheduledNotification11, schedulingOptions2);
					Notifications.scheduleLocalNotificationAsync(NotificationsText.scheduledNotification6, schedulingOptions3);
					//4 healthy tips notif
					//Notifications.scheduleLocalNotificationAsync(NotificationsText.scheduledNotification4, schedulingOptions4);
					//Notifications.scheduleLocalNotificationAsync(NotificationsText.scheduledNotification11, schedulingOptions5);
					const currentDate = new Date();
					firebaseRef.child('Users').child(token).child('TIMESTAMP').set(currentDate);
					this.props.navigation.replace('Home');
					this.props.navigation.navigate('Tutorial1');
				} else {
					Notifications.cancelAllScheduledNotificationsAsync();
					Notifications.scheduleLocalNotificationAsync(NotificationsText.scheduledNotification10, schedulingOptions1);
					Notifications.scheduleLocalNotificationAsync(NotificationsText.scheduledNotification11, schedulingOptions2);
					Notifications.scheduleLocalNotificationAsync(NotificationsText.scheduledNotification6, schedulingOptions3);
					this.props.navigation.replace('Home');
				}
			})
		}, TIMER);
	}

	render() {
		return(
			<View style={styles.main}>
				<Image source={require('../../assets/logo.png')} style={styles.logo}/>
				<Text style={styles.version}>version 2.4.3</Text>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	logo: {
		height: ratio*380,
		width: ratio*350
	},
	main: {
		alignItems: 'center',
		backgroundColor: ThemeConstants.MAIN_BLUE,
		flex: 1,
		justifyContent: 'center'
	},
	version: {
		alignSelf: 'flex-end',
		bottom: 0,
		color: ThemeConstants.MAIN_WHITE,
		padding: ThemeConstants.CONTAINER_MARGIN/2,
		position: 'absolute',
	}
});