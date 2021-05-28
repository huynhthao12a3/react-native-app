import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView,
   DrawerItemList,
   DrawerItem,  } from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/homeScreen'
import ProductsScreen from '../screens/productsScreen'
import DetailScreen from '../screens/detailScreen'
import FavoritesScreen from '../screens/favoritesScreen'
import FilterScreen from '../screens/filterScreen'
import ShowAllProduct from '../screens/showAllProduct'
import CartScreen from '../screens/cartScreen'
import InfoScreen from '../screens/infoScreen'
import HistoryScreen from '../screens/historyScreen'
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const mainStack = () => {
   return (
      <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} 
            options={{
               headerStyle: {
                  backgroundColor: '#0673F6'
               } ,
               headerTintColor: '#fff',
            }}/>
            <Stack.Screen name="ProductsScreen" component={ProductsScreen}
            options={{
               headerStyle: {
                  backgroundColor: '#0673F6'
               } ,
               headerTintColor: '#fff',
            }}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen}
            options={{
               headerStyle: {
                  backgroundColor: '#0673F6'
               } ,
               headerTintColor: '#fff',
            }}/>
            <Stack.Screen name="HistoryScreen" component={HistoryScreen}
            options={{
               headerStyle: {
                  backgroundColor: '#0673F6'
               } ,
               headerTintColor: '#fff',
            }}/>
      </Stack.Navigator>
   )
}

const favStack = () => {
   return(
      <Stack.Navigator>
         <Stack.Screen name="FavoritesScreen" component={FavoritesScreen}
         options={{
            headerStyle: {
               backgroundColor: '#0673F6'
            } ,
            headerTintColor: '#fff',
         }}/>
      </Stack.Navigator>
   )
}

const cardStack = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="CartScreen" component={CartScreen}
         options={{
            headerStyle: {
               backgroundColor: '#0673F6'
            } ,
            headerTintColor: '#fff',
         }}/>
      </Stack.Navigator>
   )
}


const mainTab= () => {
   const fav = useSelector(state => state.favProducts)
   const cart = useSelector(state => state.cartProducts)
   
   return (
      <Tab.Navigator 
      
      screenOptions={({route}) => ({
         tabBarIcon: ({focused, color, size}) => {
               let iconName;
               if(route.name === "Trang Chủ") {
                  iconName = focused ? 'home' : 'home-outline';
               }
               if(route.name === "Yêu Thích") {
                  iconName = focused ? 'heart' : 'heart-outline';
               }
               if(route.name === "Giỏ Hàng") {
                  iconName = focused ? 'cart' : 'cart-outline';
               }
               if(route.name === "Cá Nhân") {
                  iconName = focused ? 'information' : 'information-outline';
               }
               
               return <MaterialCommunityIcons name={iconName} size={30} color={color}/>
            },
            
         })}
      tabBarOptions={{
         activeTintColor: '#0673F6',
         inactiveTintColor: '#403d3d',
         labelStyle: {
            fontSize: 14,
         },
      }}
         
         >
         <Tab.Screen name="Trang Chủ" component={mainStack}/>
         <Tab.Screen name="Yêu Thích" component={favStack}
            options={{ 
               tabBarBadge: fav.length == 0 ? null :  fav.length
            }}
         />
         <Tab.Screen name="Giỏ Hàng" component={cardStack}
            options={{ 
               tabBarBadge: cart.length == 0 ? null :  cart.length
            }}
         />
         <Tab.Screen name="Cá Nhân" component={infoStack} 
            
         />
      </Tab.Navigator>
   )
}

const filterStack= () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Filter Screen" component={FilterScreen}
         options={{
            headerStyle: {
               backgroundColor: '#0673F6'
            } ,
            headerTintColor: '#fff',
         }}/>
      </Stack.Navigator>
   )
}

const showAllStack= () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="All Product" component={ShowAllProduct}
         options={{
            headerStyle: {
               backgroundColor: '#0673F6'
            } ,
            headerTintColor: '#fff',
         }}/>
      </Stack.Navigator>
   )
}

const infoStack = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name = "InfoScreen" component={InfoScreen}
         options={{
            headerStyle: {
               backgroundColor: '#0673F6'
            } ,
            headerTintColor: '#fff',
         }}/>
      </Stack.Navigator>
   )
}

const CustomSidebarMenu = (props) => {
 
   return (
     <View style={{flex: 1}}>
       {/*Top Large Image */}
       <Image
       source={{uri: 'https://magiamgiafree.com/wp-content/uploads/2017/05/magiamgiafree-tiki.png'}}
         style={styles.sideMenuProfileIcon}
       />
       <DrawerContentScrollView {...props}>
         <DrawerItemList {...props} />
         
       </DrawerContentScrollView>
       <Text
         style={{
           fontSize: 20,
           textAlign: 'center',
           color: '#403d3d'
         }}>
         Văn Thảo - Tiến Quân
       </Text>
     </View>
   );
      };


const Navigation = () => {
   return(
      <NavigationContainer>
         <Drawer.Navigator 
         drawerContent={(props) => <CustomSidebarMenu {...props} />}
         drawerContentOptions={{
            labelStyle:{
               fontSize:18
            },
         }}
         style={styles.container}>
            <Drawer.Screen name="Màn Hình Chính" component={mainTab}
            options={{
               
               drawerIcon: 
                  config => <AntDesign size={30} name='home'/>
            }}
            />
            <Drawer.Screen name="Lọc Sản Phẩm" component={filterStack}
            options={{
               drawerIcon: 
                  config => <MaterialCommunityIcons size={30} name='filter-menu-outline'/>
            }}
            />
            <Drawer.Screen name="Tất Cả Sản Phẩm" component={showAllStack}
            options={{
               drawerIcon: 
                  config => <MaterialCommunityIcons size={30} name='menu-open'/>
            }}
            />
         </Drawer.Navigator>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   sideMenuProfileIcon: {
      resizeMode: 'contain',
      width: 300,
      height: 200,
      alignSelf: 'center',
    },
    iconStyle: {
      width: 15,
      height: 15,
      marginHorizontal: 5,
    },
    customItem: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
   container: {
      
   },
   view:{
      position: 'relative',
   },
   tab:{
      position: 'absolute',
      bottom:0,
      color: '#0673F6'
   }
});

export default Navigation;