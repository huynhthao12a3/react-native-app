import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text,TouchableOpacity, Switch, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useDispatch} from 'react-redux';
//Functional Component


const FilterScreen = (props) => {

   const [isNewOn, setIsNewOn] = useState(false);
   const [isSaleOn, setIsSaleOn] = useState(false);

   const dispatch = useDispatch();

   const setFilter = () => {
      const filters = {
         isNewOn: isNewOn,
         isSaleOn: isSaleOn,
      };
      dispatch({ type: 'set_filter', filters: filters });
      props.navigation.navigate('HomeScreen')
   }

   useEffect(() => {
      props.navigation.setOptions({
         title: 'Lọc Sản Phẩm', 
         headerTitleStyle: {marginLeft: 50, fontWeight:'bold'},      
         headerLeft: () => (
            <View>
               <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                  <MaterialCommunityIcons name='microsoft-xbox-controller-menu' color='#fff' size={50} style={{marginRight:10}}/>
               </TouchableOpacity>
            </View>
         ),
         headerRight: () => (
            <View>
               <TouchableOpacity onPress={() => setFilter()}>
                  <MaterialCommunityIcons name='content-save-outline' color='#fff' size={50} style={{marginRight:10}}/>
               </TouchableOpacity>
            </View>
         )
      })
   },[props.navigation, isNewOn, isSaleOn]
   )

   

   return(
      <View style={styles.container}>
         <View style={styles.view}>
            <Text style={styles.text}>Hàng Mới: </Text>
            <Switch style={styles.switch}
               value={isNewOn}
               onValueChange={newValue => setIsNewOn(newValue)}
            />
         </View>
         <View style={styles.view}>
            <Text style={styles.text}>Khuyến Mãi: </Text>
            <Switch style={styles.switch}
               value={isSaleOn}
               onValueChange={newValue => setIsSaleOn(newValue)}
            />
         </View>

         <TouchableOpacity 
            onPress={() => (
               dispatch({ type: 'no_filter'}),
               props.navigation.navigate('HomeScreen')
            )}
            style={[styles.view,{backgroundColor: '#0673F6'}]}
         >
               <Text style={[styles.text,{width: '100%',textAlign: 'center',color:'#fff'}]}>Bỏ Lọc</Text>
         </TouchableOpacity>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      backgroundColor: '#ccc',
      width: '100%',
      height: '100%',
   },
   view:{
      margin:10,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: 8,
   },
   text: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 10,
      alignSelf:'center',
   },
   switch: {
      transform: [{scaleX: 1.3}, {scaleY: 1.3}],
      margin: 20,
      width:20,
      height:20,
   }
});

export default FilterScreen;