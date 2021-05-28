import React, {useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const InfoScreen = (props) => {

   useEffect(() => {
      props.navigation.setOptions({
         title: 'Cá Nhân', 
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

   return(
      <View style={styles.container}>

         <View style={styles.header}>
            <View style={styles.header_icon}>
               <FontAwesome name='user-circle' size={60} color='#ccc' style={{margin:10}}/>
            </View>
            <View style={styles.header_text}>
               <Text style={styles.text}>Văn Thảo - Tiến Quân</Text>
               <View style={styles.header_item}>
                  <Text>Người theo 0</Text>
                  <Text>Đang theo dõi 11</Text>
               </View>
            </View>
         </View>

         <View style={styles.view}>
            <TouchableOpacity 
            onPress={() => props.navigation.navigate('Yêu Thích')}
            style={styles.item}>
               <View style={styles.item_icon}>
                  <View style={{width:60}}>
                     <AntDesign name='hearto' size={40} color='#ED401E' style={{margin:10}}/>
                  </View>
                  <Text style={styles.text}>Đã thích</Text>
               </View>
               <View style={{flexDirection:'row'}}>
                  
                  <MaterialIcons name='keyboard-arrow-right' size={40} color='#666A7F' style={{margin:10}}/>
               </View>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => props.navigation.navigate('HistoryScreen')}
            style={styles.item}>
               <View style={styles.item_icon}>
                  <View style={{width:60}}>
                     <Ionicons name='time-outline' size={40} color='blue' style={{margin:10}}/>
                  </View>
                  <Text style={styles.text}>Mới xem</Text>
               </View>
               <MaterialIcons name='keyboard-arrow-right' size={40} color='#666A7F' style={{margin:10}}/>
            </TouchableOpacity>

            <View style={styles.item}>
               <View style={styles.item_icon}>
                  <View style={{width:60}}>
                     <Foundation name='paypal' size={40} color='#0C8EFC' style={{margin:10}}/>
                  </View>
                  <Text style={styles.text}>Ví Paypal</Text>
               </View>
               <MaterialIcons name='keyboard-arrow-right' size={40} color='#666A7F' style={{margin:10}}/>
            </View>

            <View style={styles.item}>
               <View style={styles.item_icon}>
                  <View style={{width:60}}>
                     <AntDesign name='wallet' size={40} color='#FE6032' style={{margin:10}}/>
                  </View>
                  <Text style={styles.text}>Ví Tiki</Text>
               </View>
               <MaterialIcons name='keyboard-arrow-right' size={40} color='#666A7F' style={{margin:10}}/>
            </View>

            <View style={styles.item}>
               <View style={styles.item_icon}>
                  <View style={{width:60}}>
                     <MaterialCommunityIcons name='email-send-outline' size={40} color='#5C89C3' style={{margin:10}}/>
                  </View>
                  <Text style={styles.text}>Giới thiệu bạn bè</Text>
               </View>
               <MaterialIcons name='keyboard-arrow-right' size={40} color='#666A7F' style={{margin:10}}/>
            </View>

            <View style={styles.item}>
               <View style={styles.item_icon}>
                  <View style={{width:60}}>
                     <MaterialCommunityIcons name='bitcoin' size={40} color='#EBAC3F' style={{margin:10}}/>
                  </View>
                  <Text style={styles.text}>Tiki Xu</Text>
               </View>
               <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:16, marginTop:20}}>1.000.000 Coins</Text>
                  <MaterialIcons name='keyboard-arrow-right' size={40} color='#666A7F' style={{margin:10}}/>
               </View>
            </View>

            <View style={styles.item}>
               <View style={styles.item_icon}>
                  <View style={{width:60}}>
                     <Ionicons name='md-star-outline' size={40} color='#5ABDB1' style={{margin:10}}/>
                  </View>
                  <Text style={styles.text}>Đánh giá</Text>
               </View>
                  <MaterialIcons name='keyboard-arrow-right' size={40} color='#666A7F' style={{margin:10}}/>
            </View>
         </View>
      </View>
   )
}
const styles = StyleSheet.create({
container:{
   backgroundColor: '#EFEFEF',
   paddingTop: 6,
   flex:1
},
header: {
   flexDirection: 'row',
   backgroundColor:'#fff',
   marginBottom: 16,
   padding:10
},
header_icon: {
   justifyContent:'center'
},
header_text:{
   flexDirection:'column',
},
header_item: {
   flexDirection: 'row',
   justifyContent:'space-evenly',
   paddingTop:4,
   paddingBottom:20
},
view:{
},
item: {
   marginBottom:4,
   backgroundColor:'#fff',
   flexDirection: 'row',
   justifyContent:'space-between',
},
item_icon: {
   flexDirection:'row',
},
text: {
   fontSize: 22,
   margin:15
}

});

export default InfoScreen;