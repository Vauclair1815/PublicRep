import React, { useState, Component } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

export const Factorial = () => {

    const pressHandler = () => {
        
    };

    return (
        <View style={styles.block}>
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
    }
});