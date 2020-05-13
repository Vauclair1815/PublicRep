import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const Factorial = () => {
    const [value, setValue] = useState("");

    const pressHandler = () => {
        var result = 1;

        if (value.trim()) {

            if (value > 0 && value % 1 === 0) {
                for (var i = 1; i <= value; i++) {
                    result = result * i;
                }
                Alert.alert(`Факториал числа ${value} равен ${result}`);
            }
            else if (value == 0)
            {
                Alert.alert("Факториал числа 0 равен 1");
            }

            else {
                Alert.alert("Нужно ввести целое положительное число");
                setValue("");
            }

        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите число" />

            <Button
                title="Рассчитать"
                onPress={pressHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        justifyContent: 'space-between',
        marginTop: "75%"
    },
    input: {
        width: '100%',
        padding: 5,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        marginBottom: 20,
        color: 'white'
    }
});