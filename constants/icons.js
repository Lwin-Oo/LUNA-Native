// icons.js

import React from 'react';
import { Image } from 'react-native';
import spotifyIcon from '../assets/icons/spotify.png';

const SpotifyIcon = (props) => {
  return <Image source={spotifyIcon} {...props} />;
};

export default {
  spotify: SpotifyIcon,
  
  // other icons will come here
};
