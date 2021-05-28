import React, {useEffect} from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import CATEGORIES from '../data/categories'
import CONTENT from '../data/content'

// Icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Screen } from 'react-native-screens';
//Functional Component

const HomeScreen = (props) => {
   Screen
   useEffect(() => {
      props.navigation.setOptions({
         title: 'Tiki', 
         headerTitleStyle: {fontSize:40,marginLeft: 100, fontWeight:'bold'},      
         headerLeft: () => (
            <View>
               <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                  <MaterialCommunityIcons name='microsoft-xbox-controller-menu' color='#fff' size={50} style={{marginRight:10}}/>
               </TouchableOpacity>
            </View>
         )
      })
   },[props.navigation]
   )
   return(
      
      <View style={styles.container}>

         {/* Image header */}
         <View style={styles.image}>
            <Image style={{borderRadius:8,height:'100%', width:'100%'}}
            source={{ uri: 'https://www.tiendauroi.com/wp-content/uploads/2020/03/a62c8f108676ca324196a2cf5e27f2f81.jpg'}}/>
         </View>

         {/* CONTENT */}
         <View style={styles.content}>
         <FlatList 
            data={CONTENT}
            horizontal={true}
            renderItem={({item}) => 
               <View style={styles.content_img}>
                  <Image style={styles.img}
                     source={{ uri: item.link}}
                  />
                  <Text style={{textAlign:'center'}}>{item.name}</Text>
               </View>   
            }
            keyExtractor={item => item.id}
            />
         </View>

            

         {/* Flat List */}
         <View style={styles.flatlist}>
            <FlatList 
            data={CATEGORIES}
            numColumns={2}
            renderItem={({item}) => 
            <TouchableOpacity 
            style={styles.btn}
            onPress={() => props.navigation.navigate('ProductsScreen', {categoryId: item.id})}
            >
               <View style={styles.view}>
                  <View style={[styles.icon, {backgroundColor: item.color}]}>
                     {item.id == 1 ? <MaterialCommunityIcons name='cellphone-iphone' color='black' size={50}/> : null}
                     {item.id == 2 ? <FontAwesome5 name='laptop' color='black' size={50}/> : null}
                     {item.id == 3 ? <MaterialIcons name='tablet' color='black' size={50}/> : null}
                     {item.id == 4 ? <Octicons name='watch' color='black' size={50}/> : null}
                  </View>               
                  <Text style={styles.text}>{item.name}</Text>
               </View>
            </TouchableOpacity>
            }
            keyExtractor={item => item.id}
            />
         </View>
         {/* ATM */}
         {/* <View style={styles.atm}>
            <View style={styles.atm_item}>
               <Image style={styles.atm_img}
                  source= {{uri: 'https://salt.tikicdn.com/cache/w295/ts/banner/43/5e/e1/23707f490874ca64ef753a299d8c9f83.png.jpg'}}
               />
            </View>
            <View style={styles.atm_item}>
               <Image style={styles.atm_img}
                  source= {{uri: 'https://salt.tikicdn.com/cache/w295/ts/banner/1c/f3/38/100d4159809331ba21d382884e9a8689.png.jpg'}}
               />
            </View>
         </View> */}
      </View>
   )
}
const styles = StyleSheet.create({
   container:{
      width: '100%',
      height: '100%',
      backgroundColor:'#ccc',
      flex:1
   },
   image:{
      width: '100%',
      height:190,
   },

   // content
   content:{
      backgroundColor:'#fff',
      marginTop:2,
      marginBottom:2,
      flexDirection:'row'
   },
   content_img: {
      width: 100,
      height: 100,
      alignItems: 'center',
      padding:10
   },
   img:{
      width:50,
      height:50
   },

   // Atm
   atm: {
      width:'100%',
      height:105,
      flexDirection:'row',
   },
   atm_item:{
      flex:1,
      padding:4,

   },
   atm_img: {
      width:'100%',
      height:'100%',
      borderRadius:4,
      resizeMode:'contain'
   },
   // Flat List
   flatlist:{
      flex:1,
   },
   btn: {
      flex: 1,
      width: 200,
      height:150,
      padding: 4,
      borderWidth: 1,
      borderColor: '#fff',
      margin:2,
      backgroundColor: '#fff',
      alignItems: 'center', 
   },
   view: {
      paddingTop: 4,
      borderRadius:8,
      flex:1,
   
   },
   icon: {
      justifyContent: 'center',
      backgroundColor: '#ccc',
      alignSelf: 'center',
      width:100, 
      height:100,
      alignItems: 'center',
      borderRadius: 60,
   },
   text :{
      width:'100%',
      fontSize: 24,
      alignSelf:'center',
      flex:1
   }
});

export default HomeScreen;