import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import { useTasks } from "../store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListVavigate } from "../types";
import { useCallback } from "react";
import { borderColor, red } from "../constants";
import { MaterialIcons } from '@expo/vector-icons';

export const Home = ({navigation}: NativeStackScreenProps<ParamListVavigate, "Home">) => {
    const { tasks, setTasks } = useTasks();

    const onPress = useCallback(()=>{
        navigation.navigate('AddTask')
    }, [navigation]);

    const onDoneTask = useCallback((indexTask: number)=>{
        setTasks(tasks.map((item, index)=>{
            if(index === indexTask){
                return {...item, status: "done"}
            }
            return item;
        }))
    },[tasks, setTasks])

    const onCancelDoneTask = useCallback((indexTask: number)=>{
        setTasks(tasks.map((item, index)=>{
            if(index === indexTask){
                return {...item, status: "progress"}
            }
            return item;
        }))
    },[tasks, setTasks])

    const onDeleteTask = useCallback((indexTask: number)=>{
        setTasks(tasks.filter((item, index)=>index !== indexTask));
    },[tasks, setTasks]);

    return(
        <View style={styles.container}>
            <Pressable style={styles.btnAddTask} onPress={onPress}>
                <Text style={styles.textBtn}>Добавить задачу</Text>
            </Pressable>
            <ScrollView>
            {
                tasks.map((item, index)=> 
                    <View style={styles.taskContainer}>
                        <Text style={styles.text}>{item.text}</Text>
                        <View style={styles.btnTaskContainer}>
                            {
                                item.status === "done" ?
                                    <Pressable style={styles.btn} onPress={()=>{onCancelDoneTask(index)} }> 
                                        <MaterialIcons name="done-all" size={25} color={borderColor} />
                                    </Pressable>
                                    
                                    : <Pressable style={styles.btn} onPress={()=>{onDoneTask(index)} }> 
                                        <MaterialIcons name="done"  size={25} color="#808080"/> 
                                    </Pressable>
                            }
                            <Pressable style={styles.btn} onPress={()=>{onDeleteTask(index)} }> 
                                <MaterialIcons name="delete" size={25} color={red}/> 
                            </Pressable>
                        </View>
                        
                    </View>
                )
            }
            </ScrollView>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    btnAddTask: {
        alignItems:"center",
        justifyContent: "center",
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: "rgba(50, 168, 82, 0.2)",
        padding: 10,
        margin: 10
    },
    textBtn: {

    },
    taskContainer: {
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        padding: 10,
        borderBottomColor: borderColor,
        borderBottomWidth: 1
    },
    text: {
        flex: 1,
        paddingRight: 10
    },
    btn: {
        marginHorizontal: 10
    },
    btnTaskContainer:{
        flexDirection: "row"
    }
  });