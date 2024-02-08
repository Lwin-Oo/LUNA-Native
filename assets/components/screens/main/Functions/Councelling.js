import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from "../Header";

export default function Councelling(){
    return (
        <View style = {StyleSheet.container}>
            <Header/>
            <View style = {styles.content}>
                <Text>Improve Emotionally</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});