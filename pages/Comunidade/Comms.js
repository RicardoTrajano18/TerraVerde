import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button } from "../../components/Button/ButtonComms";

const { height, width } = Dimensions.get("window");

export default function App() {
  const [mensagem, setMensagem] = useState("");
  const [imagem, setImagem] = useState(null);
  const [chat, setChat] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function renderItem({ item, index }) {
    return (
      <View style={styles.item}>
        <View style={styles.messageContent}>
          {item.imagem && (
            <Image source={{ uri: item.imagem }} style={styles.image} />
          )}
          <Text style={styles.mensagem}>{item.mensagem}</Text>
        </View>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => abrirMenu(item, index)}
        >
          <Text style={styles.menuButtonText}>⋮</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function abrirMenu(item, index) {
    Alert.alert(
      "Opções",
      "",
      [
        {
          text: "Editar",
          onPress: () => editarMensagem(index),
        },
        {
          text: "Excluir",
          onPress: () => excluirMensagem(index),
          style: "destructive",
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  }

  function editarMensagem(index) {
    const messageToEdit = chat[index];
    setMensagem(messageToEdit.mensagem);
    setImagem(messageToEdit.imagem);
    setEditIndex(index);
  }

  function excluirMensagem(index) {
    setChat((chat) => chat.filter((_, i) => i !== index));
  }

  function enviar_mensagem() {
    if (mensagem === "" && !imagem) {
      return;
    }

    const newMessage = {
      mensagem: mensagem,
      imagem: imagem,
    };

    if (editIndex !== null) {
      const updatedChat = [...chat];
      updatedChat[editIndex] = newMessage;
      setChat(updatedChat);
      setEditIndex(null);
    } else {
      setChat((chat) => [...chat, newMessage]);
    }

    setMensagem("");
    setImagem(null);
  }

  async function selecionar_imagem() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={chat}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {imagem && (
        <Image source={{ uri: imagem }} style={styles.selectedImage} />
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Escreva uma mensagem..."
          value={mensagem}
          onChangeText={setMensagem}
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          onPress={selecionar_imagem}
          style={styles.imageButton}
        >
          <Text style={styles.imageButtonText}>+</Text>
        </TouchableOpacity>
        <Button onPress={enviar_mensagem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    paddingTop: 40,
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#daf5d8",
    borderRadius: 10,
    width: width * 0.7,
    alignSelf: "flex-end",
  },
  messageContent: {
    flex: 1,
  },
  mensagem: {
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedImage: {
    width: width * 0.625,
    height: height * 0.35,
    transform: [{ scale: 0.5 }],
    marginBottom: -height * 0.075,
    marginLeft: -width * 0.135,
    borderRadius: 10,
    alignSelf: "left",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "white",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    color: "black", // Cor do texto para garantir visibilidade
    height: 40, // Altura mínima do input
  },
  imageButton: {
    marginRight: 10,
  },
  imageButtonText: {
    fontSize: 24,
  },
  menuButton: {
    marginLeft: 10,
    justifyContent: "center",
  },
  menuButtonText: {
    fontSize: 24,
  },
});
