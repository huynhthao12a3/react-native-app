import React, {useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import PRODUCTS from '../data/products'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useSelector} from 'react-redux';
//Functional Component

const FavoritesScreen = (props) => {
   useEffect(() => {
      props.navigation.setOptions({
         title: 'Sản Phẩm Yêu Thích', 
         headerTitleStyle: {marginLeft: 50, fontWeight:'bold'},      
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

   const favoritesProducts = useSelector(state => state.favProducts)

   // const favProducts = PRODUCTS.filter(item => item.isFav === true);
   if(favoritesProducts.length !== 0) {
      return(
         <FlatList style={styles.container}
            data={favoritesProducts}
            renderItem={({item}) => 
               <TouchableOpacity style={styles.view}
               onPress={() => props.navigation.navigate('DetailScreen', {productId: item.id, categoryId: item.categoryId})}
               >
                  <View style={styles.view}>
                     <Image style={styles.image} source={{uri: item.image}}/>
                     <Text style={styles.text}>{item.name}</Text>
                  </View>
               </TouchableOpacity>
            }
            keyExtractor= {item => item.name}
         />
      )
   }
   else
      return(
         <View style={[styles.view, {paddingTop:200}]}>
            <MaterialCommunityIcons name='heart-off-outline' color='black' size={50} />
            <Text style={[styles.text, {marginTop:20, fontSize:24}]}>Sản phẩm yêu thích trống</Text>
         </View>
      )
}
const styles = StyleSheet.create({
   container:{
      backgroundColor: '#ccc',
      padding: 5,
   },
   view:{
      flex: 1,
      padding: 10,
      borderWidth: 1,
      borderColor: '#fff',
      margin:4,
      backgroundColor: '#fff',
      alignItems: 'center', 
      borderRadius: 4
   },
   image: {
      height: 160,
      width: 160,
      resizeMode:'contain'
      
   },
   text: {
      width:'100%',
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 10,
   }
});

export default FavoritesScreen;