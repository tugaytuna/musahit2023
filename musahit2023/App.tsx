import React from 'react';
import {Text,  View,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/HomePage/Home';
import CreatePost from './src/pages/CreatePostPage/CreatePost';
import About from './src/pages/AboutPage/About';


function App(){
  
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
   <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="CreatePost" component={CreatePost} options={{headerShown: false}} />
      <Tab.Screen name="About" component={About} options={{headerShown: false}} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}



export default App;
