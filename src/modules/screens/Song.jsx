import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Play, SkipBack, SkipForward, ChevronLeft, MoreHorizontal, Cast, Share } from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';

export default function MusicPlayerScreen() {
  const navigation = useNavigation(); // Hook para navegación

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.playlistText}>WEEKEND PLAYLIST</Text>
        <TouchableOpacity>
          <MoreHorizontal size={30} color="white" style={styles.moreIcon} />
        </TouchableOpacity>
      </View>

      {/* Imagen del álbum */}
      <Image source={require("../../../assets/re.png")} style={styles.albumImage} />

      {/* Información de la canción */}
      <View style={styles.songInfoContainer}>
        <Text style={styles.songTitle}>STARBOY</Text>
        <Text style={styles.artistName}>THE WEEKND</Text>
      </View>

      {/* Barra de progreso */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarWrapper}>
          <View style={styles.progressBar}></View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>0:52</Text>
          <Text style={styles.timeText}>2:59</Text>
        </View>
      </View>

      {/* Controles de reproducción */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <SkipBack size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <Play size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SkipForward size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Opciones inferiores */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Cast size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Share size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Sección de letra de canción */}
      <View style={styles.lyricsContainer}>
        <View style={styles.lyricsCard}>
          <Text style={styles.lyrics}>Lyrics</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  playlistText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  moreIcon: {
    transform: [{ rotate: '90deg' }], // Rota el ícono de más opciones
  },
  albumImage: {
    width: 320,
    height: 320,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#333",
  },
  songInfoContainer: {
    alignItems: "flex-start", 
    marginBottom: 20,
    width: "80%",
  },
  songTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  artistName: {
    color: "gray",
    fontSize: 18,
    marginBottom: 15,
  },
  progressContainer: {
    width: "80%",
    marginTop: 10,
  },
  progressBarWrapper: {
    height: 6,
    backgroundColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#1DB954",
    width: "30%",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  timeText: {
    color: "gray",
    fontSize: 12,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "70%",
    marginTop: 20,
  },
  playButton: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginTop: 20,
  },
  lyricsContainer: {
    marginTop: 30,
    width: "90%",
    alignItems: "center",
  },
  lyricsCard: {
    backgroundColor: "#375a7f", 
    padding: 20,
    borderRadius: 15,
    width: "100%",
    shadowColor: "#000", 
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  lyrics: {
    color: "white",
    fontSize: 18,
    fontWeight: "600", 
    textAlign: "left", 
    lineHeight: 26,
  },
});
