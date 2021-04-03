import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ArtikelIcon from 'react-native-vector-icons/MaterialIcons';
import PengaturanIcon from 'react-native-vector-icons/Ionicons';

import Artikel from '../Pages/Artikel';
import Pengaturan from '../Pages/Pengaturan';
import Home from '../Pages/Home';
import { SafeAreaView } from 'react-native';



const noBackArrow = {
    headerTintColor: '#000',
    headerTitleAlign: 'center',
    headerLeft: null,
    headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#BBBBBB',
    },

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

const PengaturanStack = createStackNavigator();
const PengaturanScreen = () => {
    return (
        <PengaturanStack.Navigator>
            <PengaturanStack.Screen
                name="Pengaturan"
                component={Pengaturan}
                options={{ ...noBackArrow }}
            />
        </PengaturanStack.Navigator>
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
                        paddingBottom: 5
                    },
                    style: {
                        flex: 0.1,
                        paddingVertical: 2
                    },
                }

                }


            >

                <Tabs.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Beranda',
                        tabBarIcon: ({ focused, size, color }) => {
                            size = focused ? 38 : 34;
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
                            size = focused ? 33 : 30;
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
                    name="Pengaturan"
                    component={PengaturanScreen}
                    options={{
                        tabBarLabel: 'Pengaturan',
                        tabBarIcon: ({ focused, size, color }) => {
                            size = focused ? 32 : 28;
                            // color = focused ? '#9B51E0' : '#000';
                            return (
                                <PengaturanIcon
                                    name='settings-outline'
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
