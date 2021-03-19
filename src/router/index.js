import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../Pages/Welcome';
import Login from '../Pages/Login';
import Splash from '../Pages/Splash';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import BMI from '../Pages/BMI';

const Stack = createStackNavigator();



const Router = () => {
    return (

        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    initialRouteName="Login"
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BMI"
                    component={BMI}
                    options={{
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{

                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;



// import React, { Component } from 'react';
// import { View, Text, StatusBar } from 'react-native';
// import Welcome from '../Pages/Welcome';
// import Login from '../Pages/Login';

// class Router extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <StatusBar barStyle="light-content" l backgroundColor="#607D8B" />
//                 <View>
//                     <Welcome />
//                 </View>
//             </View>

//         );
//     }

// }

// export default Router;