import React, {Component} from 'react';
import {StatusBar, Image} from 'react-native';
// import {Router, Stack, Scene} from 'react-native-router-flux';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'


import Home from './screens/home'
import Login from './screens/login'
import Register from './screens/register'
import AfterLogin from './screens/afterLoginScreen'
import buyfuel from './screens/buyFuel'
import profile from './screens/profile'
import Tab1 from './screens/tab1'
import Tab2 from './screens/pumpDisplay'
import FeedBack from './screens/feeBack'
import transactions from './screens/transactions'

export default APP = () => {
    return (
      <HomeScreen/>
    );
}

const authStack = createStackNavigator({
  landingScreen: {screen: Home},
  loginScreen: {screen: Login},
  registerScreen: {screen: Register},
},{headerMode: "none"})


const tabNav = createBottomTabNavigator({

    afterlogin: {
      screen: AfterLogin,
      navigationOptions: ()=>({
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={40} color = {tintColor} />
        )
      })
    },
    
    tab2: {
      screen: Tab2,
      navigationOptions: ()=>({
        tabBarIcon: ({tintColor}) => (
          <Icon name="local-gas-station" size={40} color = {tintColor} />
        )
      })
    },
    
    tab3: {
      screen: profile,
      navigationOptions: ()=>({
        tabBarIcon: ({tintColor}) => (
          <Icon name="person" size={40} color = {tintColor} />
        )
      })
    }
  },
  {tabBarOptions: {
    activeTintColor: '#d94b05',
    inactiveTintColor: 'rgba(246, 132, 0, 0.7)', 
    style: {
      backgroundColor: 'white',
    },
    showIcon: true,
    showLabel: false
  }}
)

const innerPages= createSwitchNavigator({
    Buy_Fuel: {screen: buyfuel},
    Feedback: {screen: FeedBack},
    Transactions: {screen: transactions}
},{headerMode: "none"})

const homeStack = createStackNavigator({
    TabScreen: {
      screen: tabNav,
      navigationOptions: (navigation) => ({
        // headerLeft: (<Icon name="menu" size={30} style={{paddingLeft:10, color: 'rgba(255,255,255,1)'}}/>),
        headerTitle: (<Image source={require('./assets/logo.png')} style={{height: 40, width: 150, resizeMode: 'stretch'}}/>),
        headerStyle: {
          backgroundColor: '#f07400',
        }
      }) 
    },
    Tab2Screen: innerPages  
  },{
      headerLayoutPreset: 'center',
      defaultNavigationOptions: ({navigation}) => {
        const {routeName} = navigation.state.routes[navigation.state.index]
       return{ 
          headerTitle: routeName,
          headerStyle: {
            backgroundColor: '#f07400',
          },
          headerTintColor: 'white'
        }  
      }  
    }
)


const createSwitchNavigation = createSwitchNavigator({
  landingNav : { screen: authStack },
  homeScreen: { screen : homeStack}   
})


const HomeScreen = createAppContainer(createSwitchNavigation)
