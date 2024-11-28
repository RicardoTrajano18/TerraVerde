import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// importa a navegação
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const HorizontalScrollView = () => {
  const navigation = useNavigation();

  {
    /* Botões para navegar para a página de Quiz */
  }
  const handleDoenca = () => {
    navigation.navigate("Doenca");
  };
  const handlePlastico = () => {
    navigation.navigate("Plastico");
  };
  const handleLixo = () => {
    navigation.navigate("Eletron");
  };
  const handleMetal = () => {
    navigation.navigate("Metal");
  };

  {
    /* Botões para navegar para a página de Quiz */
  }
  const handleQuizDoenca = () => {
    navigation.navigate("QuizDoenca");
  };

  const handleQuizPlastico = () => {
    navigation.navigate("QuizPlastico");
  };

  const handleQuizLixo = () => {
    navigation.navigate("QuizLixo");
  };

  const handleQuizMetal = () => {
    navigation.navigate("QuizMetal");
  };

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Informações
      </Text>
      <ScrollView
        horizontal={true}
        style={{ marginBottom: height * 0.1 }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.boxShadow,
              (style = { backgroundColor: "#0056B3" }),
            ]}
            onPress={handleDoenca}
          >
            <MaterialIcons
              name="coronavirus"
              size={height * 0.2}
              style={{
                color: "#60a62e",
                alignSelf: "center",
                top: height * 0.02,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Doenças</Text>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.boxShadow,
              (style = { backgroundColor: "#0056B3" }),
            ]}
            onPress={handlePlastico}
          >
            <FontAwesome5
              name="trash"
              size={height * 0.15}
              style={{
                color: "#60a62e",
                alignSelf: "center",
                top: height * 0.035,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}> Descarte de Plástico</Text>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.boxShadow,
              (style = { backgroundColor: "#0056B3" }),
            ]}
            onPress={handleLixo}
          >
            <MaterialIcons
              name="computer"
              size={height * 0.2}
              style={{
                alignSelf: "center",
                color: "#60a62e",
                top: height * 0.02,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}> Lixo Eletrônico</Text>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.boxShadow,
              (style = { backgroundColor: "#0056B3" }),
            ]}
            onPress={handleMetal}
          >
            <MaterialCommunityIcons
              name="gold"
              size={height * 0.17}
              style={{
                color: "#60a62e",
                alignSelf: "center",
                top: height * 0.02,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Descarte de Metal</Text>
        </View>
      </ScrollView>

      {/*----------------------------------QUIZES------------------------------------------------------ */}
      <Text style={{ fontSize: 25, textAlign: "center", marginBottom: 10 }}>
        Quizes
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.boxShadow,
              (style = { backgroundColor: "#FFC107" }),
            ]}
            onPress={handleQuizDoenca}
          >
            <MaterialIcons
              name="coronavirus"
              size={height * 0.2}
              style={{
                color: "#60a62e",
                alignSelf: "center",
                top: height * 0.02,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Quiz doenças</Text>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.boxShadow,
              (style = { backgroundColor: "#FFC107" }),
            ]}
            onPress={handleQuizPlastico}
          >
            <FontAwesome5
              name="trash"
              size={height * 0.15}
              style={{
                color: "#60a62e",
                alignSelf: "center",
                top: height * 0.035,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Quiz plástico</Text>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.boxShadow,
              (style = { backgroundColor: "#FFC107" }),
            ]}
            onPress={handleQuizLixo}
          >
            <MaterialIcons
              name="computer"
              size={height * 0.2}
              style={{
                alignSelf: "center",
                color: "#60a62e",
                top: height * 0.02,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Quiz lixo eletrônico</Text>
        </View>

        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.boxShadow,
              (style = { backgroundColor: "#FFC107" }),
            ]}
            onPress={handleQuizMetal}
          >
            <MaterialCommunityIcons
              name="gold"
              size={height * 0.17}
              style={{
                color: "#60a62e",
                alignSelf: "center",
                top: height * 0.02,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Quiz Descarte de Metal</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  button: {
    width: width * 0.65,
    height: height * 0.235,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: "black",
    textAlign: "center",
    zIndex: 9999,
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

export default HorizontalScrollView;
