import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});