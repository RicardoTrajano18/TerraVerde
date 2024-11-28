import {
  Alert,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// importa os icones
import { Feather } from "@expo/vector-icons";

// importa o use state
import { useState } from "react";

// importa a navegação
import { useNavigation } from "@react-navigation/native";

// importa o botão
import { Button } from "../../../components/Button/ButtonLogs";

// importa a biblioteca axios
import axios from "axios";

// import a biblioteca async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// constante feita para adicionar percentual a altura e largura
const { width, height } = Dimensions.get("window");

// import a biblioteca imagepicker
import * as ImagePicker from "expo-image-picker";

export default function App({ navigation }) {
  // state para adicionar os usernames, senha e imagem
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // função para lidar com o a seleção de imagem
  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleSignup = async () => {
    // Verificar se todos os campos estão preenchidos corretamente
    if (!username.trim()) {
      Alert.alert("Erro", "Por favor, preencha o nome de usuário.");
      return;
    }
    if (!password.trim()) {
      Alert.alert("Erro", "Por favor, preencha a senha.");
      return;
    }
    if (!selectedImage) {
      Alert.alert("Erro", "Por favor, selecione uma imagem.");
      return;
    }

    try {
      const userData = {
        username,
        password,
        imageUri: selectedImage, // Usar a imagem selecionada
      };
      // Salvar dados no AsyncStorage
      await AsyncStorage.setItem(username, JSON.stringify(userData));
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Home", {
        username: username,
        imageUri: selectedImage,
      });
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Houve um erro ao realizar o cadastro.");
    }
  };

  // state para controlar se a senha será visível
  const [isEyeVisible, setIsEyeVisible] = useState(true);
  const [secureText, setSecureText] = useState(true);

  // função para alternar a visibilidade do icone da senha
  const toggleIcon = () => {
    setIsEyeVisible((prevState) => !prevState);
    setSecureText((prevState) => !prevState);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>

        <Image
            source={require("../../../assets/logo.png")}
            style={{ transform: [{ scale: 0.6 }], alignSelf: "center", marginTop: -width * 0.15 }}
          />
        <View style={styles.login}>
          <TextInput
            style={styles.textInput}
            placeholder="Digite seu email"
            keyboardType="email"
            value={username}
            onChangeText={setUsername}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.textInputSenha}
              placeholder="Digite sua senha"
              secureTextEntry={secureText}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={toggleIcon} style={styles.iconContainer}>
              <Feather
                name={isEyeVisible ? "eye" : "eye-off"}
                size={35}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <Button title="Selecionar Imagem" onPress={handleImageSelection} />
          <Button title="Cadastrar" onPress={handleSignup} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F0F2F1",
  },
  login: {
    alignSelf: "center",
    marginBottom: width * 0.05,
    marginTop: -height * 0.1
  },
  textInput: {
    width: width * 0.8,
    height: 80,
    fontSize: 24,
    fontWeight: "bold",
    paddingRight: 50,
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  passwordContainer: {
    width: width * 0.8,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  textInputSenha: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    padding: 10,
  },
});
