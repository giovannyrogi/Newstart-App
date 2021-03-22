import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Welcome from '../Pages/Welcome';
import Login from '../Pages/Login';
import Splash from '../Pages/Splash';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import DataProfil from '../Pages/DataProfil';
import BottomNavigation from '../router/BottomNavigation';


const Stack = createStackNavigator();

const noBackArrow = {
    headerTintColor: '#000',
    headerTitleAlign: 'center',
    headerLeft: null,
    headerStyle: {
        borderBottomWidth: 2,
        borderBottomColor: '#BBBBBB',

    }

}

const noHeaderShown = {
    headerTintColor: '#000',
    headerTitleAlign: 'center',
    headerShown: false,

}

const Router = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ ...noHeaderShown }}
                />
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ ...noHeaderShown }}
                />
                <Stack.Screen
                    initialRouteName="Login"
                    name="Login"
                    component={Login}
                    options={{ ...noHeaderShown }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ ...noHeaderShown }}
                />
                <Stack.Screen
                    name="DataProfil"
                    component={DataProfil}
                    options={{
                        title: "Data Profil",
                        headerTintColor: '#000',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            borderBottomWidth: 2,
                            borderBottomColor: '#BBBBBB'
                        }
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={BottomNavigation}
                    options={{ ...noHeaderShown }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;



{/*  */ }