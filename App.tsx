import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import InputBox from './components/InputBox';

const App = () => {
    const [bgColor, setBgColor] = useState('#F1FCFD');
    const [headColor, setheadColor] = useState('#4D6DE3');
    const [mode, setMode] = useState('🌑');

    function toogleMode() {
        setBgColor((prevColor) => (prevColor === '#F1FCFD' ? '#393737' : '#F1FCFD'));
        setheadColor((prevheadColor) => (prevheadColor === '#4D6DE3' ? '#1A1A19' : '#4D6DE3'));
        setMode((prevMode) => (prevMode === '🌑' ? '☀️' : '🌑'))
    }

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <View style={[styles.TopBox, {backgroundColor: headColor}]}>
                <View>
                    <Text style={[styles.h1, {color: '#FFFFFF'}]}>Add Tasks :</Text>
                    <Text style={[styles.h2, {color: '#FFFFFF'}]}>My first Project</Text>
                </View>
                <View>
                    <TouchableOpacity  style={styles.btn} onPress={toogleMode}>
                        <Text style={styles.emojiMode}>{mode}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <InputBox />
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    TopBox: {
        width: '100%',
        height: 150,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    h1: {
        fontSize: 26,
    },
    h2: {
        fontStyle: 'italic',
    },
    btn: {
        padding: 6,
        borderRadius: 10,
        backgroundColor: '#F1FCFD',
    },
    emojiMode: {
        fontSize: 24,
    }
})