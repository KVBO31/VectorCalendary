//
// Основной файл разработки и запуска приложения
//

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CalendaryScreen } from "./pages/CalendaryPage";
import { RatingScreen } from "./pages/RatingPage";
import { TasksScreen } from "./pages/TasksPage";
import { HomeScreen } from "./pages/HomePage";
import { AuthScreen } from "./pages/AuthPage";
import { RegScreen } from "./pages/RegPage";

import { CONFIG, ICONS } from "./config";

// создаем экземпляр объекта навигатора состояний
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
	return (
		<Tab.Navigator
			initialRouteName="Tasks"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					let iconName;

					if (route.name === "Home") {
						iconName = ICONS.tasks;
					} else if (route.name === "Rating") {
						iconName = ICONS.rating;
					} else if (route.name === "Calendary") {
						iconName = ICONS.calendary;
					}

					return (
						<MaterialIcons
							name={iconName}
							size={CONFIG.iconSize}
							color={color}
						/>
					);
				},
				// tabBarActiveTintColor: COLORS.home.activeIconColor,
				// tabBarInactiveTintColor: COLORS.home.disactiveIconColor,
				headerTitleAlign: "center",
			})}
		>
			<Tab.Screen name="Rating" component={RatingScreen} 
			tabBarIcon: ({ colorr, size }) => (
            <Icon name="checklist" color={color} size={size} /> ) />
			<Tab.Screen name="Tasks" component={TasksScreen} />
			<Tab.Screen name="Calendary" component={CalendaryScreen} />
		</Tab.Navigator>
	);
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Auth"
				screenOptions={{
					headerStyle: {
						backgroundColor: "#f0f0f0",
					},
				}}
			>
				<Stack.Screen
					name="Auth"
					component={AuthScreen}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name="Reg"
					component={RegScreen}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen name="Main" component={MainStack} />

				{/* <Stack.Screen name="Home" component={HomeScreen} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
