import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Heart, Play, Clock, MoreVertical } from "lucide-react-native";

const songs = [
  { id: "1", title: "Starboy", artist: "The Weeknd", duration: "3:50", image: require("../../../assets/s.png") },
  { id: "2", title: "A Lonely Night", artist: "The Weeknd", duration: "3:40", image: require("../../../assets/a.png") },
  { id: "3", title: "Reminder", artist: "The Weeknd", duration: "3:38", image: require("../../../assets/r.png") },
  { id: "4", title: "False Alarm", artist: "The Weeknd", duration: "3:40", image: require("../../../assets/fa.png") },
  { id: "5", title: "Blinding Lights", artist: "The Weeknd", duration: "3:40", image: require("../../../assets/b.png") },
];

export default function PlaylistScreen() {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState({});

  // Ocultar Status Bar al montar el componente
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <View style={styles.container}>
      {/* Íconos superiores */}
      <View style={styles.topBar}>
        <Heart size={22} color="white" />
        <MoreVertical size={22} color="white" />
      </View>

      {/* Imagen de portada */}
      <Image source={require("../../../assets/aa.png")} style={styles.mainImage} />

      {/* Información del playlist */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>WEEKEND PLAYLIST</Text>
          <View style={styles.info}>
            <View style={styles.likes}>
              <Heart size={18} color="gray" />
              <Text style={styles.likesText}>25,000</Text>
            </View>
            <View style={styles.duration}>
              <Clock size={18} color="gray" />
              <Text style={styles.durationText}>2h 25 min</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Play size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Lista de canciones */}
      <ScrollView>
        {songs.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate("Player", { song: item })}
          >
            <Image source={item.image} style={styles.songImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.artistName}>{item.artist}</Text>
            </View>
            <Text style={styles.songDuration}>{item.duration}</Text>
            <TouchableOpacity onPress={() => setFavorites({ ...favorites, [item.id]: !favorites[item.id] })}>
              <Heart size={24} color={favorites[item.id] ? "green" : "gray"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MoreVertical size={20} color="gray" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },

  topBar: { 
    position: "absolute", top: 20, right: 20, zIndex: 2, flexDirection: "row", gap: 15 
  },

  mainImage: { 
    width: "100%", height: 360, marginBottom: -50 
  },

  header: { 
    flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 16 
  },

  title: { 
    fontSize: 24, fontWeight: "bold", color: "white" 
  },

  info: { 
    flexDirection: "row", alignItems: "center", marginTop: 4 
  },

  likes: { 
    flexDirection: "row", alignItems: "center", marginRight: 16 
  },

  likesText: { 
    fontSize: 14, color: "gray", marginLeft: 6 
  },

  duration: { 
    flexDirection: "row", alignItems: "center" 
  },

  durationText: { 
    fontSize: 14, color: "gray", marginLeft: 6 
  },

  playButton: { 
    backgroundColor: "#1DB954", padding: 12, borderRadius: 50, marginRight: 16 
  },

  card: { 
    flexDirection: "row", alignItems: "center", padding: 16, backgroundColor: "#222", margin: 8, borderRadius: 12 
  },

  songImage: { 
    width: 64, height: 64, borderRadius: 8 
  },

  infoContainer: { 
    flex: 1, marginLeft: 16 
  },

  songTitle: { 
    fontSize: 18, fontWeight: "bold", color: "white" 
  },

  artistName: { 
    fontSize: 14, color: "gray" 
  },

  songDuration: { 
    fontSize: 14, color: "gray", marginRight: 16 
  },
});

