import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArtikelIcon from 'react-native-vector-icons/MaterialIcons';
import AkunIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Artikel from '../Pages/Artikel';
import AkunSaya from '../Pages/AkunSaya';
import Home from '../Pages/Home';
import { SafeAreaView } from 'react-native';



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

const HomeStack = createStackNavigator();
const HomeScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Beranda"
                component={Home}
                options={{ ...noBackArrow }}

            />
        </HomeStack.Navigator>
    )
}


const ArtikelStack = createStackNavigator();
const ArtikelScreen = () => {
    return (
        <ArtikelStack.Navigator>
            <ArtikelStack.Screen
                name="Artikel"
                component={Artikel}
                options={{ ...noBackArrow }}

            />
        </ArtikelStack.Navigator>

    )
}

const AkunSayaStack = createStackNavigator();
const AkunSayaScreen = () => {
    return (
        <AkunSayaStack.Navigator>
            <AkunSayaStack.Screen
                name="Akun Saya"
                component={AkunSaya}
                options={{ ...noBackArrow }}
            />
        </AkunSayaStack.Navigator>
    )
}

const Tabs = createBottomTabNavigator();
const BottomNavigation = () => {
    return (
        <SafeAreaView style={{ flex: 1, }} >
            <Tabs.Navigator
                tabBarOptions={{
                    activeTintColor: '#9B51E0',
                    inActiveTintColor: '#000',
                    labelStyle: {
                        fontSize: 14,
                    }
                }

                }


            >

                <Tabs.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Beranda',
                        tabBarIcon: ({ focused, size, color }) => {
                            size = focused ? 35 : 30;
                            // color = focused ? '#9B51E0' : '#000';
                            return (
                                <HomeIcon
                                    name='home-outline'
                                    color={color}
                                    size={size}
                                />
                            )
                        }

                    }
                    }

                />
                <Tabs.Screen
                    name="Artikel"
                    component={ArtikelScreen}
                    options={{
                        tabBarLabel: 'Artikel',
                        tabBarIcon: ({ focused, size, color }) => {
                            size = focused ? 35 : 30;
                            // color = focused ? '#9B51E0' : '#000';
                            return (
                                <ArtikelIcon
                                    name='article'
                                    color={color}
                                    size={size}
                                />
                            )
                        }

                    }}
                />
                <Tabs.Screen
                    name="Akunsaya"
                    component={AkunSayaScreen}
                    options={{
                        tabBarLabel: 'Akun Saya',
                        tabBarIcon: ({ focused, size, color }) => {
                            size = focused ? 35 : 30;
                            // color = focused ? '#9B51E0' : '#000';
                            return (
                                <AkunIcon
                                    name='account-box-outline'
                                    color={color}
                                    size={size}
                                />
                            )
                        }

                    }}
                />
            </Tabs.Navigator>
        </SafeAreaView >
    );

}

export default BottomNavigation;
