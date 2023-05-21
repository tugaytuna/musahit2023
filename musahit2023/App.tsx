import React from 'react';
import {Text,  View,} from 'react-native';
import FlashMessage from "react-native-flash-message";


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/pages/HomePage/Home';
import CreatePost from './src/pages/CreatePostPage/CreatePost';
import About from './src/pages/AboutPage/About';
import colors from './src/styles/colors';


function App(){
  
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
   <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: "Anasayfa" ,headerShown: false, tabBarIcon: () => (<Icon name="home" size={25} color={colors.backgroundColor} />)}} />
      <Tab.Screen name="CreatePost" component={CreatePost} options={{tabBarLabel: "Kayıt" ,headerShown: false, tabBarIcon: () => (<Icon name="plus-circle" size={25} color={colors.backgroundColor} />)}} />
      <Tab.Screen name="About" component={About} options={{tabBarLabel: "Hakkımda",headerShown: false, tabBarIcon: () => (<Icon name="info" size={25} color={colors.backgroundColor} />)}} />
    </Tab.Navigator>
  <FlashMessage position="top" /> 
  </NavigationContainer>
  );
}



export default App;
