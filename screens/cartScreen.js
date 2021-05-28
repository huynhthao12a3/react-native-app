import React, {useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PRODUCTS from '../data/products'
import {useSelector, useDispatch} from 'react-redux'

const CartScreen = (props) => {

   const dispatch = useDispatch();
   useEffect(() => {
      props.navigation.setOptions({
         title: 'Giỏ Hàng', 
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

   const cartProducts = useSelector(state => state.cartProducts)

   // const favProducts = PRODUCTS.filter(item => item.isFav === true);
   if(cartProducts.length !== 0) {
      return(
         <FlatList style={styles.container}
            data={cartProducts}
            renderItem={({item}) => 
            <View style={{flexDirection:'row'}}>

               <TouchableOpacity style={styles.view}
               onPress={() => props.navigation.navigate('DetailScreen', {productId: item.id, categoryId: item.categoryId})}
               >
                  <View style={styles.view}>
                     <Image style={styles.image} source={{uri: item.image}}/>
                     <Text style={styles.text}>{item.name}</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.btn}
                  onPress={() =>  dispatch({type: 'remove_to_cart', productId: item.id, categoryId: item.categoryId})}
               >
                  <MaterialCommunityIcons name='cart-remove' color='#fff' size={30}/>
               </TouchableOpacity>
            </View>
            }
         keyExtractor= {item => item.name}

         />
      )
   }
   else
      return(
         <View style={[styles.view, {paddingTop:200}]}>
            <MaterialCommunityIcons name='cart-off' color='black' size={50} />
            <Text style={[styles.text, {marginTop:20, fontSize:24}]}>Giỏ hàng trống</Text>
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
   },
   btn: {
      backgroundColor:'rgba(6, 115, 246,0.5)',
      marginTop:4,
      marginBottom:4,
      borderRadius: 4,
      justifyContent: 'center',
   }
});
export default CartScreen;