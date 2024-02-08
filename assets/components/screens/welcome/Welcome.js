// WelcomeScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SpotifyButton from '../../buttons/spotifyConnect';
export default function WelcomeScreen({ navigation }) {
    const [showMainButton, setShowMainButton] = useState(false);

    const handleStartPress = () => {
        
        // Pass a callback to update state when Spotify authentication is successful
        navigation.navigate("Main", { onShowMainButton: () => setShowMainButton(true) });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to LUNA</Text>
            <Button
                title="Enter"
                onPress={handleStartPress}
            />

            <View style={styles.space}/>

            <SpotifyButton onLogin={() => setShowMainButton(true)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#add8e6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    space:{
        marginVertical: 20,
    }
});

