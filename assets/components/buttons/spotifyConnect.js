import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as AuthSession from 'expo-auth-session';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import spotifyAuth from '../../../constants/spotifyAuth';

const SpotifyButton = () => {
  const navigation = useNavigation();
  const [showButton, setShowButton] = useState(true);

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      issuer: 'https://accounts.spotify.com',
      clientId: '13b956cafe6b48a28c60a787add394fa',
      scopes: [
        'user-read-email',
        'user-library-read',
        'user-read-recently-played',
        'user-top-read',
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public', // or 'playlist-modify-private'
      ],
      redirectUri: 'http://localhost:8081/--/spotify-auth-callback',
    },
    { authorizationEndpoint: 'https://accounts.spotify.com/authorize' }
  );

  const handleSpotifyAuth = async () => {
    try {
      console.log('Entering handleSpotifyAuth');

      const result = await promptAsync();
      console.log('Spotify Authentication Result:', result);

      if (result.type === 'success' && result.params.access_token) {
        console.log('Authentication was successful');

        const expirationDate = new Date(result.accessTokenExpirationDate).getTime();
        await AsyncStorage.setItem('token', result.params.access_token);
        await AsyncStorage.setItem('expirationDate', expirationDate.toString());

        console.log('Token and expiration date stored in AsyncStorage');

        // Navigate to 'Main' screen directly
        navigation.replace('Main');
      } else {
        // Authentication failed or was canceled
        console.log('Authentication failed or was canceled');
      }
    } catch (error) {
      console.error('Spotify Authentication Error:', error);
      // Handle the authentication error
    }
  };

  useEffect(() => {
    // Fetch Spotify API credentials
    const { clientId, clientSecret, redirectUri } = spotifyAuth;

    // Check if credentials are available
    if (!clientId || !clientSecret || !redirectUri) {
      console.error('Spotify API credentials are missing.....');
    } else {
      // Log the credentials for demonstration purposes
      console.log('Spotify API Credentials:', { clientId, clientSecret, redirectUri });
    }
  }, []);

  return (
    <SafeAreaView>
      {showButton && (
        <TouchableOpacity onPress={handleSpotifyAuth}>
          <View style={styles.buttonContainer}>
            <FontAwesome name="spotify" size={24} color="green" />
            <Text style={styles.buttonText}>Connect with Spotify</Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6', // Baby blue
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#3498db',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    elevation: 3,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20, 
    height: 20, 
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    marginLeft: 8,
  },
});


export default SpotifyButton;





