import React, {useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PRODUCTS from '../data/products'
import {useSelector, useDispatch} from 'react-redux'

const ShowAllProduct = (props) => {

   useEffect(() => {
      props.navigation.setOptions({
         title: 'Tất Cả Sản Phẩm', 
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

   //const products = PRODUCTS.filter(item => item)
     // Lọc ra sản phẩm có id là categoryId
   const availableProducts = useSelector(state => state.filterProducts)
   const products = availableProducts.filter(item => item);
   return(
      <View style={styles.container}>
         <FlatList 
         data={products}
         numColumns={2}
         renderItem={({item}) =>
         <TouchableOpacity style={styles.view}
         onPress={() => props.navigation.navigate('DetailScreen', {productId: item.id, categoryId: item.categoryId})}
         >
               <View >
                  <Image style={styles.image} source={{ uri: item.image}}/>
                  <Text style={styles.text}>{item.name}</Text>
               </View>
         </TouchableOpacity>
         }
         keyExtractor= {item => item.name}
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

export default ShowAllProduct;