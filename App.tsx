import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SideBar from './component/sidebar'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MenuFeed from './screen/MenuFeed';
import PaymenStatus from './screen/PaymentStatus';
import Login from './screen/Login';
import AdminChat from './screen/AdminChat';
import AboutUs from './screen/AboutUs';
import Profile from './screen/Profile';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { StyleProvider } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';


// drawerContent={props => <SideBar {...props}/>}
const Drawer:any = createDrawerNavigator(
);

const Tab = createMaterialBottomTabNavigator();
function AppTabs() {
  return (
    <Tab.Navigator shifting={true} initialRouteName="Ayyam Ittu Unn" >
      <Tab.Screen name="Food Company" component={MenuFeed} options={{
          tabBarLabel: 'Food Company',
          tabBarColor: "rgb(63, 81, 181)",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-variant" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Payment Status" component={PaymenStatus} options={{
          tabBarLabel: 'Payment Status',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="paypal" color={color} size={26} />
          ),
          tabBarColor: "rgb(63, 81, 181)"
        }}/>
      <Tab.Screen name="Profile"  component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-edit" color={color} size={26} />
          ),
          tabBarColor: "rgb(63, 81, 181)"
        }}/>
    </Tab.Navigator>
  );
}

function AppDrawerNavigator() {
  return (<Drawer.Navigator initialRouteName='Menu' drawerContent={props => <SideBar {...props}/>}>
    <Drawer.Screen name="Menu" component = {AppTabs}></Drawer.Screen>
    <Drawer.Screen name="AdminChat" component = {AdminChat}></Drawer.Screen>
    <Drawer.Screen name="LogIn" component = {Login}></Drawer.Screen>
    <Drawer.Screen name="Notification" component = {AdminChat}></Drawer.Screen>
    <Drawer.Screen name="AboutUs" component={AboutUs} ></Drawer.Screen>
  </Drawer.Navigator>);
}

 const AppNavigator = createStackNavigator();



export default class AppContainer extends Component<{}, {isReady:boolean}> {
  
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render(){
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
       <NavigationContainer>
          {AppDrawerNavigator()}
        </NavigationContainer>
    );
  }
  
}
