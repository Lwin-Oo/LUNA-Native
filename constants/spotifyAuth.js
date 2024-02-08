//spotifyAuth.js

const spotifyClientId = '13b956cafe6b48a28c60a787add394fa';
const spotifyClientSecret = '8cf32fc5baf94a60b15f826e23f23aee';
const spotifyRedirectUri = 'http://localhost:8081/--/spotify-auth-callback';

console.log('Spotify Auth:', {
  clientId: spotifyClientId,
  clientSecret: spotifyClientSecret,
  redirectUri: spotifyRedirectUri,
});

module.exports = {
  clientId: spotifyClientId,
  clientSecret: spotifyClientSecret,
  redirectUri: spotifyRedirectUri,
};
