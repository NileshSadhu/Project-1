import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import BouncyCheckBox from 'react-native-bouncy-checkbox';

export default function InputBox() {
    const [task, setTask] = useState('');
    const [saveTask, setSaveTask] = useState([]);

    const saveTaskData = () => {
        if (task.trim().length === 0) {
            Alert.alert("Please don't submit empty string.", "Try again...");
            return;
        }
        if (task.trim().length > 20) {
            Alert.alert("Maximum character allowed is 20", "Try again...");
            return;
        }
        const taskArray = [...saveTask, task];
        setSaveTask(taskArray);
        setTask('');
    };

    const clearTaskData = () => {
        setSaveTask([]);
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    onChangeText={(text) => setTask(text)}
                    placeholder='Enter your tasks...'
                    placeholderTextColor={'#000000'}
                    style={styles.input}
                    value={task}
                />
                <TouchableOpacity style={styles.submitBtn} onPress={saveTaskData}>
                    <Text style={{ color: '#FFFFFF' }}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 400 }}>
                <FlatList
                    data={saveTask}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <BouncyCheckBox
                            key={index}
                            size={25}
                            fillColor="green"
                            unFillColor="#FFFFFF"
                            text={item}
                            style={styles.checkBox}
                        />
                    )}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={clearTaskData}>
                    <Text style={styles.btnEmoji}>🗑️</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    input: {
        top: -10,
        width: 250,
        borderWidth: 1,
        borderRadius: 5,
        color: '#1A1A19',
        backgroundColor: '#F1FCFD',
        paddingHorizontal: 10,
    },
    submitBtn: {
        paddingVertical: 8,
        marginVertical: 6,
        alignItems: 'center',
        backgroundColor: '#1A1A19',
    },
    footer: {
        justifyContent: 'flex-end',
    },
    btnEmoji: {
        fontSize: 30,
    },
    checkBox: {
        borderWidth: 1,
        marginVertical: 5,
        width: 250,
        padding: 5,
    },
});
