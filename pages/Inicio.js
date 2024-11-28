import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  SafeAreaView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button/ButtonInicio";


export default function App() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.login}>
          <Image
            source={require("../assets/logo.png")}
            style={{ transform: [{ scale: 0.6 }], alignSelf: "center" }}
          />
          <Button
            title="Entrar"
            onPress={async () => navigation.navigate("Entrada")}
          />
          <Button
            title="Cadastrar"
            onPress={async () => navigation.navigate("Cadastro")}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F1",
  },
  login: {
    flex: 1,
    justifyContent: "center",
  },
});
