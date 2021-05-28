import React, {useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ScrollView} from 'react-native';
import PRODUCTS from '../data/products'
import CATEGORIES from '../data/categories'

import {useSelector, useDispatch} from 'react-redux'
//Functional Component

const ProductsScreen = (props) => {
   const {categoryId} = props.route.params; // Lấy tham số truyền sang từ HomeScreen

   // Lấy ra danh sách sản phẩm
   const availableProducts = useSelector(state => state.filterProducts)
   // console.log(availableProducts)
   
   // Lọc ra sản phẩm có id là categoryId
   const products = availableProducts.filter(item => item.categoryId === categoryId);

   // Hiển thị tên danh mục và sản phẩm theo từng danh mục
   const product = CATEGORIES.find(item => item.id === categoryId)

   const dispatch = useDispatch();

   useEffect(() => {
      props.navigation.setOptions({
         title: `${product.name}`,
         headerTitleStyle: {marginLeft: 90, fontWeight:'bold'},
      })
   },[props.navigation]
   )

   return(
      <View style={styles.container}>
         <FlatList 
         data={products}
         numColumns={2}
         renderItem={({item}) =>
         <TouchableOpacity style={styles.view}
         onPress={() => (
            dispatch({type: 'add_to_history', productid: item.id, categoryid: item.categoryId}),
            props.navigation.navigate('DetailScreen', {productId: item.id, categoryId: item.categoryId})

         )}
         >
               <View >
                  <Image style={styles.image} source={{ uri: item.image}}/>
                  <Text style={styles.text}>{item.name}</Text>
               </View>
         </TouchableOpacity>
         }
         />
      </View>
   )
}
const styles = StyleSheet.create({
   container:{
      backgroundColor: '#ccc',
      padding: 5,
      flex:1
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
      fontSize: 16,
      paddingTop: 10,
   }
});

export default ProductsScreen;