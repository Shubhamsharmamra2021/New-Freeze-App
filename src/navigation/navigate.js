import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../container/RegistrationScreen";
import OtpScreen from "../container/OtpScreen";
import DashboardScreen from "../container/DashboardScreen";

const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export const AuthStackNavigation = (props) => {

    return (
        <LoginStack.Navigator >
            <LoginStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} />
            <LoginStack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
            {/* After login this part of Dashboard Screen part of home Stack */}
            <LoginStack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} />
        </LoginStack.Navigator>
    );

};

export const HomeStackNavigation = (props) => {

    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
};

