import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { borderColor, greenOpacity, red, redOpacity } from "../constants";
import { useCallback, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListVavigate } from "../types";
import { useTasks } from "../store";

export const AddNewTask = ({navigation}: NativeStackScreenProps<ParamListVavigate, "AddTask">) => {
    const [ text, setText ] = useState("");
    const { addTask } = useTasks();

    const onCancel = useCallback(()=>{
        navigation.navigate("Home");
    },[navigation]);

    const onSave = useCallback(()=>{
        addTask({text, status: "progress"})
        onCancel();
    },[text, addTask, onCancel]);

    return (
        <View>
            <TextInput
                style={styles.input}
                editable
                multiline
                numberOfLines={10}
                value={text}
                onChangeText={ (text)=>{setText(text)} }
            />
            <View style={styles.buttonsContainer}>
                <Pressable style={{...styles.btnCancel, ...styles.btn}} onPress={onCancel}>
                    <Text>Отменить</Text>
                </Pressable>
                <Pressable style={{...styles.btnOk, ...styles.btn}} onPress={onSave}>
                    <Text>Добавить</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: borderColor,
        borderRadius: 20,
        margin: 10,
        padding: 10
    },
    buttonsContainer: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch"
    },
    btnCancel:{
        backgroundColor: redOpacity,
        borderColor: red
    },
    btnOk: {
        backgroundColor: greenOpacity,
        borderColor: borderColor
    },
    btn: {
        width: "auto",
        margin: 7,
        padding: 10,
        borderWidth: 1,
        borderRadius: 20
    }
});