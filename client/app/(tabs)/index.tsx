import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("http://192.168.133.65:3000/api/joke");
      const data = await response.json();
      setJoke(data.content);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke. Try again!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tap for a Joke!</Text>
      <View style={styles.card}>
        <Text style={styles.joke}>{joke || "Press the button below."}</Text>
      </View>
      <Button title="Show me a joke" onPress={fetchJoke} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: { fontSize: 24, marginBottom: 20, fontWeight: "bold" },
  card: {
    width: "100%",
    padding: 20,
    backgroundColor: "#e0ffe0",
    borderRadius: 10,
    marginBottom: 20,
    minHeight: 100,
    justifyContent: "center",
  },
  joke: { fontSize: 18, textAlign: "center" },
});
