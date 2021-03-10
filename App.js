import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, TextInput, TextView, View,Text, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
// using class 
// class App extends React.Component{
//   state={
//     message:"Click on the button"
//   }
//   clickedButton=(msg)=>{
//     this.setState({
//       message:msg
//     })
//   }
//   render(){
//     return (
//       <View style={styles.container}>
//         <Text>{this.state.message}</Text>
//         <Button title="Press Me!" onPress={()=>this.clickedButton("Clicked the button")}/>
//        </View>
//     )
//   }
// }


export default function App() {
  {/* 1st param is current state value and 2nd is to update the state */}
  const [currgoals,totalGoals] = useState([]);
  const [message,setMessage] = useState(["Tasks Not Yet Added"]);
  const [visibleVal,changeVal] = useState(false);
  const addtoList = (addedone) =>{
    {/* Without the function we cannot guarentee 100% update may happen in the currgoals   */}
    {/* Store in form of objects to use in flatlist  */}
    totalGoals(currgoals => [...currgoals,{key:Math.random().toString(),value:addedone}]);
    changeVal(false);
  }
  const deleteHandler=goalid=>{
    totalGoals(currgoals=>{
      return currgoals.filter((goal)=> goal.key!==goalid);
    });
  }
 return(
    // <ScrollView> // we can added this for scroll view but flatlist is recommnended
    <View style={styles.screen}> 
    <Button title="Start Adding Tasks" onPress={()=>changeVal(true)}/>
    <View style={styles.style1}> 
      <Text>{message}</Text>
    </View>
    {/* padding if for proper layout and making the text input visible  */}
    {/* align items is along vertical axis (cross axis) , flex direction is row wise*/}
    {/* justify content is for main axis, cross axis means opp to main axis*/}
      <View>
        <GoalInput visible={visibleVal} allList={()=>changeVal(false)} onAdded={addtoList}/>
      </View>
      <View style={{padding:20}}>
        <FlatList data={currgoals} renderItem=
          {itemData => <GoalItem id={itemData.item.key} ondelete={deleteHandler} title={itemData.item.value}/>}/>
      </View>
    </View>
    // </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen:{padding:40},
  input:{
    width:200,
    borderColor:'black',
    borderWidth:1,
    padding:10
  },
  style1:{
    padding:10,
    alignItems:'center'
  }
})


