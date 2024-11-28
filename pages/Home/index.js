import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Carousel } from "../../components/Carrosel/Carousel";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

// importa a navegação
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

// constate feita para adicionar percentual a altura e largura
const { width, height } = Dimensions.get("window");

export default function App() {
  const route = useRoute();
  const navigation = useNavigation();
  const { username, password } = route.params || {};

  const [selectedImage, setSelectedImage] = useState();
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const userData = await AsyncStorage.getItem(username);
      if (userData) {
        const { imageUri } = JSON.parse(userData);
        setSelectedImage(imageUri);
      }
    });

    return unsubscribe;
  }, [navigation, username]);

  const handleProfile = () => {
    navigation.navigate("Perfil", { username: username, password: password });
  };

  const handleMap = () => {
    navigation.navigate("Mapa", { username: username, password: password });
  };

  const handleCom = () => {
    navigation.navigate("Comunidade", {
      username: username,
      password: password,
    });
  };

  const handleQuiz = () => {
    navigation.navigate("Quiz", { username: username, password: password });
  };

  const handleRel = () => {
    navigation.navigate("Relatorio", {
      username: username,
      password: password,
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Carousel />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.botões, styles.boxShadow]}
            onPress={handleProfile}
          >
            <MaterialIcons
              name="person"
              style={{
                alignSelf: "center",
                color: "#60a62e",
                transform: [{ scale: height * 0.015 }],
                bottom: height * 0.09,
              }}
            />
            <Text style={styles.texto}>Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botões, styles.boxShadow]}
            onPress={handleMap}
          >
            <MaterialIcons
              name="map"
              style={{
                alignSelf: "center",
                color: "#60a62e",
                transform: [{ scale: height * 0.015 }],
                bottom: height * 0.09,
              }}
            />
            <Text style={styles.texto}>Mapa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botões, styles.boxShadow]}
            onPress={handleRel}
          >
            <MaterialIcons
              name="storage"
              style={{
                alignSelf: "center",
                color: "#60a62e",
                transform: [{ scale: height * 0.015 }],
                bottom: height * 0.09,
              }}
            />
            <Text style={styles.texto}>Relatório</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botões, styles.boxShadow]}
            onPress={handleCom}
          >
            <MaterialIcons
              name="commute"
              style={{
                alignSelf: "center",
                color: "#60a62e",
                transform: [{ scale: height * 0.015 }],
                bottom: height * 0.09,
              }}
            />
            <Text style={styles.texto}>Comunidade</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botões, styles.boxShadow, { marginBottom: height * 0.02}]} 
            onPress={handleQuiz}
          >
            <MaterialIcons
              name="quiz"
              style={{
                alignSelf: "center",
                color: "#60a62e",
                transform: [{ scale: height * 0.014 }],
                bottom: height * 0.09,
              }}
            />
            <Text style={styles.texto}>Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    flex: 1,
    rowGap: 20,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  botões: {
    backgroundColor: "#B2F252",
    width: width * 0.4,
    height: height * 0.23,
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: "flex-end",
  },
  texto: {
    fontSize: height * 0.027,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    bottom: 10,
  },
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 20,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 20,
    elevation: 20,
  },
});
