import { useEffect, useState } from "react";

import {
  Image,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Alert,
  ScrollView,
  Touchable,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import { Button } from "../../components/Button/ButtonProfile.js";

import { ButtonSair } from "../../components/Button/ButtonProfileLeave.js";

import { COLORS, FONTS } from "../../constants/theme";

import { MaterialIcons } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

// constate feita para adicionar percentual a altura e largura
const { width, height } = Dimensions.get("window");

export default function Profile({ route, navigation }) {
  const { username: initialUsername, password: initialPassword } = route.params;

  const [selectedImage, setSelectedImage] = useState();
  const [username, setUsername] = useState(initialUsername);
  const [password, setPassword] = useState(initialPassword);
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const storedProfile = await AsyncStorage.getItem(username);
        if (storedProfile) {
          const profileData = JSON.parse(storedProfile);
          setSelectedImage(profileData.imageUri);
          setEmail(profileData.email);
          setCep(profileData.cep);
          setBio(profileData.bio);
          setPassword(profileData.password);
        }
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    };

    loadProfile();
  }, [username]);

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

  const saveProfile = async () => {
    try {
      const profileData = {
        username,
        password,
        email,
        cep,
        bio,
        imageUri: selectedImage,
      };

      await AsyncStorage.setItem(username, JSON.stringify(profileData));
      Alert.alert("Sucesso", "Perfil salvo com sucesso!");

      navigation.navigate("Home", {
        username,
        password,
        email,
        cep,
        bio,
        imageUri: selectedImage,
      });
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível salvar o perfil.");
    }
  };

  const handleSair = () => {
    navigation.navigate("Inicio");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={[
                styles.image,
                styles.foto,
                {
                  borderWidth: 2,
                  borderColor: COLORS.primary,
                },
              ]}
            />
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 20,
                zIndex: 9999,
              }}
            >
              <MaterialIcons
                name="photo-camera"
                size={32}
                color={COLORS.primary}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Nome de Usuario"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.textInput}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Bio"
          value={bio}
          onChangeText={setBio}
        />

        <Button title="Salvar" onPress={saveProfile} />

        <ButtonSair title="Sair" onPress={handleSair}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    top: -10,
    justifyContent: "center",
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
  foto: {
    height: 180,
    width: 180,
    borderRadius: 100,
    backgroundColor: "#ccc",
    marginTop: height * 0.06,
  },
});
