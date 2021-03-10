import React,{useState} from 'react';
import {StyleSheet,TextInput,View,Button, Modal} from 'react-native';
import GoalItem from './GoalItem';

const GoalInput = props =>{
    const [enteredGoal,goalsList] = useState('');
    const changeHandler = (enteredGoal) =>{
        goalsList(enteredGoal);
      }
    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.view1}>
            <TextInput placeholder="Enter the task name" 
            style={styles.input}
            onChangeText={changeHandler}
        />
        <Button style={styles.view2} title="Add Task" onPress={()=>props.onAdded(enteredGoal)}/>
        <View style={styles.view1}>
          <Button title="View Added Tasks" onPress={props.allList} />
        </View>
       
      </View>
      </Modal>
    )
}
const styles= StyleSheet.create(
    {
    input:{
    width:200,
    borderColor:'black',
    marginBottom:10,
    borderWidth:1,
    padding:10
   },
   view1:{
     marginBottom:10,
     padding:10,
    justifyContent:'center',
    alignItems:'center'
  },
  view2:{
      marginBottom:15,
      alignItems:'center'
  }
    }
)
export default GoalInput;