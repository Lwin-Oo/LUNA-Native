//spotifyAuth.js

const spotifyClientId = 'Client-Id';
const spotifyClientSecret = 'Client-Secret';
const spotifyRedirectUri = 'Redirect-Uri';
//Uri format: 'http://localhost:XXXX/--/spotify-auth-callback'

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
