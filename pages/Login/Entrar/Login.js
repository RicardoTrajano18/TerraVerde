import {
  ScrollView,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

// importa os icones
import { Feather } from "@expo/vector-icons";

// importa o use state
import React, { useState } from "react";

// importa a navegação
import { useNavigation } from "@react-navigation/native";

// importa o botão
import { Button } from "../../../components/Button/ButtonLogs";

// importa a biblioteca AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// constate feita para adicionar percentual a altura e largura
const { width, height } = Dimensions.get("window");

export default function App({ navigation }) {
  // state para adicionar os usernames e senha
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [imageUri, setImageUri] = useState(null);

  // declara a navegação

  // função para lidar com o login
  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem(username);
      if (userData) {
        const { password: storedPassword, imageUri } = JSON.parse(userData);
        if (password === storedPassword) {
          navigation.navigate("Home", {
            username: username,
            imageUri: imageUri,
            password: password,
          });
        } else {
          alert("Senha incorreta.");
        }
      } else {
        alert("Usuário não encontrado.");
      }
    } catch (error) {
      console.error(error);
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
          style={{
            transform: [{ scale: 0.6 }],
            alignSelf: "center",
            marginTop: -width * 0.2,
          }}
        />
        <View style={styles.login}>
          {imageUri && <Image source={{ uri: imageUri }} />}

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

          <Button title="Entrar" onPress={handleLogin} />
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
