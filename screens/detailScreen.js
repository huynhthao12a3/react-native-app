import React, {useEffect} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import PRODUCTS from '../data/products'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useSelector, useDispatch} from 'react-redux'
//Functional Component

const DetailScreen = ({route, navigation}) => {
   const {productId} = route.params;
   const {categoryId} = route.params;

   const availableProducts = useSelector(state => state.filterProducts)

   // Tìm sản phẩm có Id là productId --> Error
   const product = PRODUCTS.find(item => item.id === productId)

   // Tìm sản phẩm có id là productId && categoryId là categoryId
   const productName = PRODUCTS.find(item => item.id === productId && item.categoryId === categoryId)
   
   const dispatch = useDispatch();

   const addToFav = () => {
      dispatch({type: 'add_to_fav', productId: productId, categoryId: categoryId})
   }

   const indexFav = useSelector(state => state.favProducts)
   const index = indexFav.some(item => item.id === productId && item.categoryId === categoryId);
   // console.log(index)

   useEffect(() => {
      navigation.setOptions({
         title: `${productName.name}`, // Hiển thị tên sản phẩm trên Header
         headerTitleStyle: {marginLeft: 50, fontWeight:'bold'},      
         headerRight: () => 
            <TouchableOpacity
               // Truyền Id và Loại
               onPress = {() => addToFav()}
            >
               {index == true ? <MaterialCommunityIcons name='cards-heart' color='#fff' size={40} style={{marginRight:10}}/> : <MaterialCommunityIcons name='heart-plus-outline' color='#fff' size={40} style={{marginRight:10}}/> }
            </TouchableOpacity>
      })
   },[productName.name]
   )
   return(
      <ScrollView style={styles.container}>
         <View style={styles.view}>
            <Image style={styles.image} source={{ uri: productName.image}}/>
            <Text style={styles.text}>{productName.name}</Text>
            <View style={styles.icon}>
               <FontAwesome name='star' color='#FB6E2E' size={20} style={{marginRight:4}}/>
               <FontAwesome name='star' color='#FB6E2E' size={20} style={{marginRight:4}}/>
               <FontAwesome name='star' color='#FB6E2E' size={20} style={{marginRight:4}}/>
               <FontAwesome name='star' color='#FB6E2E' size={20} style={{marginRight:4}}/>
               <FontAwesome name='star' color='#BDBDBD' size={20} style={{marginRight:4}}/>
            </View>

            {/* ----- Điện Thoại:  */}
            { productName.categoryId == 1 ? 
               <View style={styles.info}>
                  

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Chip:</Text>
                     <Text style={styles.textInfo2}>{productName.chip}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Ram:</Text>
                     <Text style={styles.textInfo2}>{productName.ram}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Camera Trước:</Text>
                     <Text style={styles.textInfo2}>{productName.cameraTruoc}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Camera Sau:</Text>
                     <Text style={styles.textInfo2}>{productName.cameraSau}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Pin:</Text>
                     <Text style={styles.textInfo2}>{productName.pin}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Sạc:</Text>
                     <Text style={styles.textInfo2}>{productName.sac}</Text>
                  </View>    

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Màn Hình:</Text>
                     <Text style={styles.textInfo2}>{productName.manHinh}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Hệ Điều Hành:</Text>
                     <Text style={styles.textInfo2}>{productName.heDieuHanh}</Text>
                  </View>    

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Bộ Nhớ Trong:</Text>
                     <Text style={styles.textInfo2}>{productName.boNhoTrong}</Text>
                  </View>    

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Giá Bán:</Text>
                     <Text style={[styles.textInfo2, {color:'red'}]}>{productName.gia}</Text>
                  </View>                    
               </View>
            : null}

            {/* ----- Laptop: */}
            { productName.categoryId == 2 ? 
               <View style={styles.info}>
                  <View style={styles.row}>
                     <Text style={styles.textInfo}>CPU:</Text>
                     <Text style={styles.textInfo2}>{productName.cpu}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Ram:</Text>
                     <Text style={styles.textInfo2}>{productName.ram}</Text>
                  </View>
                  
                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Ổ Cứng:</Text>
                     <Text style={styles.textInfo2}>{productName.oCung}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Màn Hình:</Text>
                     <Text style={styles.textInfo2}>{productName.manHinh}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Card Màn Hình:</Text>
                     <Text style={styles.textInfo2}>{productName.cardManHinh}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Cổng Kết Nối:</Text>
                     <Text style={styles.textInfo2}>{productName.congKetNoi}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Hệ Điều Hành:</Text>
                     <Text style={styles.textInfo2}>{productName.heDieuHanh}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Thời Gian Ra Mắt:</Text>
                     <Text style={styles.textInfo2}>{productName.timeRaMat}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Giá Bán:</Text>
                     <Text style={[styles.textInfo2, {color:'red'}]}>{productName.gia}</Text>
                  </View>  
               </View>
            : null}

            {/* ----- Tablet: */}
            { productName.categoryId == 3 ? 
               <View style={styles.info}>
                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Màn Hình:</Text>
                     <Text style={styles.textInfo2}>{productName.manHinh}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Độ Phân Giải:</Text>
                     <Text style={styles.textInfo2}>{productName.doPhanGiai}</Text>
                  </View>
                  
                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Hệ Điều Hành:</Text>
                     <Text style={styles.textInfo2}>{productName.heDieuHanh}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Chip:</Text>
                     <Text style={styles.textInfo2}>{productName.chip}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Ram:</Text>
                     <Text style={styles.textInfo2}>{productName.ram}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Bộ Nhớ Trong:</Text>
                     <Text style={styles.textInfo2}>{productName.boNhoTrong}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Kết Nối:</Text>
                     <Text style={styles.textInfo2}>{productName.ketNoi}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>SIM:</Text>
                     <Text style={styles.textInfo2}>{productName.sim}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Camera Trước:</Text>
                     <Text style={styles.textInfo2}>{productName.cameraTruoc}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Camera Sau:</Text>
                     <Text style={styles.textInfo2}>{productName.cameraSau}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Pin:</Text>
                     <Text style={styles.textInfo2}>{productName.pin}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Giá Bán:</Text>
                     <Text style={[styles.textInfo2, {color:'red'}]}>{productName.gia}</Text>
                  </View>  
               </View>
            : null}

            {/* ----- Đồng Hồ: */}
            { productName.categoryId == 4 ? 
               <View style={styles.info}>
                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Màn Hình:</Text>
                     <Text style={styles.textInfo2}>{productName.manHinh}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Thời Lượng Pin:</Text>
                     <Text style={styles.textInfo2}>{productName.pin}</Text>
                  </View>
                  
                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Kết Nối Với HĐH:</Text>
                     <Text style={styles.textInfo2}>{productName.ketNoi}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Mặt:</Text>
                     <Text style={styles.textInfo2}>{productName.mat}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Tính Năng:</Text>
                     <Text style={styles.textInfo2}>{productName.tinhNang}</Text>
                  </View>

                  <View style={styles.row1}>
                     <Text style={styles.textInfo}>Thông Báo:</Text>
                     <Text style={styles.textInfo2}>{productName.thongBao}</Text>
                  </View>

                  <View style={styles.row}>
                     <Text style={styles.textInfo}>Giá Bán:</Text>
                     <Text style={[styles.textInfo2, {color:'red'}]}>{productName.gia}</Text>
                  </View>  
               </View>
            : null}

            <TouchableOpacity 
               style={styles.btn}
               onPress={() => dispatch({type: 'add_to_cart', productId: productId, categoryId: categoryId})}
            >
               <MaterialCommunityIcons name='cart-plus' color='#fff' size={30} style={{marginRight:10}}/>
               <Text style={{fontSize:20,color:'#fff'}}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   )
}
const styles = StyleSheet.create({
   container:{
      backgroundColor: '#ccc',
   },
   view:{
      margin:10,
      padding: 10,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 4,

   },
   text: {
      fontSize: 30,
      marginTop: 20,

   },
   icon: {
      flexDirection: 'row', 
      margin: 10
   },
   image: {
      height: 300,
      width: 300,
      resizeMode:'contain',
   },
   info:{
      width: '80%',
   },
   row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:'#F5F5F5',
      padding:4,
   },
   row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:'#fff',
      padding:4,
   },
   textInfo: {
      fontSize: 18,
      fontWeight: 'bold',
   },
   textInfo2: {
      fontSize: 16,
   },
   btn: {
      marginTop: 20,
      backgroundColor: '#0673F6',
      borderRadius: 8,
      flexDirection: 'row',
      padding: 6,
      width:'80%',
      justifyContent: 'center'
   }

});

export default DetailScreen;