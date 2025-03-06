import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Play, SkipForward, Bluetooth, Share } from 'react-icons-kit/feather'; 

const Song = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bluetoothButton}>
        <Bluetooth size={30} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.playButton}>
        <Play size={40} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.skipButton}>
        <SkipForward size={30} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.shareButton}>
        <Share size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  bluetoothButton: {
    marginLeft: 20,
  },
  playButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  skipButton: {
    marginRight: 20,
  },
  shareButton: {
    marginRight: 20,
  }
});

export default Song;
