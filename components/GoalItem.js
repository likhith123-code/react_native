import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
const GoalItem = (props) =>{
    return(
        <TouchableOpacity activeOpacity={0.7} onPress={()=>props.ondelete(props.id)}>
            <View style={styles.dataList} >
            <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    dataList:{
        padding:5,
        margin:10,
        borderColor:'black',
        borderWidth:1,
        textAlign:'center',
        backgroundColor:'#ccc'
      }
})
export default GoalItem;