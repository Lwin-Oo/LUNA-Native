import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderWithMenu = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Songs')}>
        <Text>Songs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Analysis')}>
        <Text>Analysis</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Improve')}>
        <Text>Improve</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#add8e6',
    width: '100%',
  },
});

export default HeaderWithMenu;






