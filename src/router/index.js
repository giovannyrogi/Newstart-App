import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Welcome from '../Pages/Welcome';
import Login from '../Pages/Login';
import Splash from '../Pages/Splash';
import Register from '../Pages/Register';
import DataProfil from '../Pages/DataProfil';
import BottomNavigation from '../router/BottomNavigation';
import AkunSaya from '../Pages/AkunSaya';
import TentangAplikasi from '../Pages/TentangAplikasi';
import Nutrisi from '../Pages/NewstartTest/Nutrisi';
import Olahraga from '../Pages/NewstartTest/Olahraga';
import Air from '../Pages/NewstartTest/Air';
import SinarMatahari from '../Pages/NewstartTest/SinarMatahari';
import PengendalianDiri from '../Pages/NewstartTest/PengendalianDiri';
import UdaraSegar from '../Pages/NewstartTest/UdaraSegar';
import Tidur from '../Pages/NewstartTest/Tidur';
import HubunganDgnTuhan from '../Pages/NewstartTest/HubunganDgnTuhan';
import HatiSenang from '../Pages/NewstartTest/HatiSenang';



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

const myHeaderStyle = {
    headerTintColor: '#000',
    headerTitleAlign: 'center',
    headerStyle: {
        borderBottomWidth: 2,
        borderBottomColor: '#BBBBBB'
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
                <Stack.Screen
                    name="Akun Saya"
                    component={AkunSaya}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="TentangAplikasi"
                    component={TentangAplikasi}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="Nutrisi"
                    component={Nutrisi}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="Olahraga"
                    component={Olahraga}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="Air"
                    component={Air}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="SinarMatahari"
                    component={SinarMatahari}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="PengendalianDiri"
                    component={PengendalianDiri}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="Udara Segar"
                    component={UdaraSegar}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="Tidur"
                    component={Tidur}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="HubunganDgnTuhan"
                    component={HubunganDgnTuhan}
                    options={{ ...myHeaderStyle }}
                />
                <Stack.Screen
                    name="HatiSenang"
                    component={HatiSenang}
                    options={{ ...myHeaderStyle }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;