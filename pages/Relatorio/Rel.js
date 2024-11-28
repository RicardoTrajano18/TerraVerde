import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

export default function ReportPage() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Carrega os marcadores salvos do AsyncStorage
    const loadMarkers = async () => {
      try {
        const storedMarkers = await AsyncStorage.getItem("markers");
        if (storedMarkers) {
          setMarkers(JSON.parse(storedMarkers));
        }
      } catch (error) {
        console.error("Erro ao carregar marcadores:", error);
      }
    };

    loadMarkers();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Relatório de Avaliações</Text>
      {markers.length > 0 ? (
        markers.map((marker, index) => (
          <View key={index} style={styles.markerContainer}>
            <Text
              style={[
                styles.markerText,
                {
                  paddingBottom: 7,
                  borderBottomWidth: 1,
                  fontWeight: "heavy",
                  fontStyle: "italic",
                  textAlign: "center",
                },
              ]}
            >
              Local {index + 1}
            </Text>
            {marker.image && (
              <Image
                source={{ uri: marker.image }}
                style={styles.markerImage}
              />
            )}
            <Text style={[styles.markerText, { marginTop: 10 }]}>
              Avaliação: {marker.comment ? marker.comment : "Sem avaliação"}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>Nenhuma avaliação disponível</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  markerContainer: {
    backgroundColor: "#B2F252",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  markerText: {
    fontSize: 16,
    marginBottom: 5,
  },
  markerImage: {
    width: "100%",
    height: height * 0.3,
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
  },
  noDataText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});
