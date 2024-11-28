import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TextInput,
  Alert,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import MapView, { PROVIDER_DEFAULT, UrlTile, Marker } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

import { Rating } from "../../components/Rate/Rating";
import { Button } from "../../components/Button/ButtonMaps";

const { height, width } = Dimensions.get("window");

export default function App() {
  const [selectedImage, setSelectedImage] = useState();
  const [markers, setMarkers] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!(await result.cancelled)) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
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

  const saveMarkers = async (newMarkers) => {
    try {
      await AsyncStorage.setItem("markers", JSON.stringify(newMarkers));
    } catch (error) {
      console.error("Erro ao salvar marcadores:", error);
    }
  };

  const areCoordinatesClose = (coord1, coord2, tolerance = 0.0001) => {
    return (
      Math.abs(coord1.latitude - coord2.latitude) < tolerance &&
      Math.abs(coord1.longitude - coord2.longitude) < tolerance
    );
  };

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    const existingMarkerIndex = markers.findIndex((marker) =>
      areCoordinatesClose(marker, { latitude, longitude })
    );

    if (existingMarkerIndex === -1) {
      const newMarker = {
        id: `${latitude}-${longitude}`,
        latitude,
        longitude,
        comment: "",
        rating: 0,
      };
      const updatedMarkers = [...markers, newMarker];
      setMarkers(updatedMarkers);
      saveMarkers(updatedMarkers);
    }
  };

  const handleMarkerPress = (marker) => {
    Alert.alert(
      "Opções do marcador",
      "Escolha o que deseja fazer:",
      [
        {
          text: "Excluir",
          onPress: () => handleDeleteMarker(marker.id),
          style: "destructive",
        },
        {
          text: "Avaliar",
          onPress: () => {
            setSelectedMarker(marker);
            setComment(marker.comment || "");
            setRating(marker.rating || 0);
            setModalVisible(true);
          },
        },
        { text: "Cancelar", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  const handleDeleteMarker = (markerId) => {
    setMarkers((prevMarkers) => {
      const updatedMarkers = prevMarkers.filter(
        (marker) => marker.id !== markerId
      );
      saveMarkers(updatedMarkers);
      return updatedMarkers;
    });
  };

  const saveComment = () => {
    const updatedMarkers = markers.map((marker) =>
      marker.id === selectedMarker.id
        ? { ...marker, comment, rating, image: selectedImage }
        : marker
    );
    setMarkers(updatedMarkers);
    saveMarkers(updatedMarkers);
    setModalVisible(false);
    setSelectedMarker(null);
    setComment("");
    setRating(0);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={{
          latitude: -22.906847,
          longitude: -43.172897,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        <UrlTile
          urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
        />

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.comment ? "Avaliação" : "Novo Ponto"}
            description={marker.comment ? marker.comment : "Nenhuma avaliação"}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}
      </MapView>
      <ScrollView>
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 20 }}>Adicione sua avaliação:</Text>
              <Rating
                initialRating={rating}
                onFinishRating={(value) => setRating(value)}
              />
              <TextInput
                style={styles.input}
                value={comment}
                onChangeText={setComment}
                placeholder="Digite seu comentário"
                multiline={true}
              />
              <Button title="Escolher Imagem" onPress={handleImageSelection} />
              <View style={styles.buttonContainer}>
                <Button
                  title="Cancelar"
                  onPress={() => setModalVisible(false)}
                />
                <Button title="Salvar" onPress={saveComment} />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: width * 1,
    height: height * 0.6,
    alignItems: "center",
  },
  input: {
    width: width * 0.9,
    height: height * 0.1,
    paddingLeft: 10,
    paddingBottom: height * -0.2,
    marginTop: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
