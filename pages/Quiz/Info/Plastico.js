import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Descarte de plástico</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={{ fontSize: 20 }}>
            O descarte adequado de plásticos é essencial para preservar o meio
            ambiente e evitar impactos negativos à saúde pública. Plásticos
            estão presentes em inúmeros produtos de uso diário, mas, quando
            descartados incorretamente, demoram centenas de anos para se
            decompor, acumulando-se em aterros, rios e oceanos. Esse acúmulo
            provoca a poluição do solo e da água, prejudicando ecossistemas e a
            vida animal, além de liberar microplásticos que podem entrar na
            cadeia alimentar, afetando também a saúde humana. Os plásticos que
            chegam aos oceanos causam graves danos à vida marinha, sendo
            ingeridos por peixes e aves, o que pode resultar em morte por
            asfixia ou envenenamento. Além disso, o descarte inadequado de
            plástico pode obstruir sistemas de drenagem, contribuindo para
            enchentes em áreas urbanas. A queima de plásticos em locais
            impróprios também libera gases tóxicos, que poluem o ar e afetam a
            saúde respiratória. A reciclagem é a principal forma de reduzir
            esses impactos, permitindo que o plástico seja reutilizado em novos
            produtos e diminuindo a demanda por materiais virgens. Além disso, a
            conscientização sobre a separação correta do lixo e o uso de
            plásticos biodegradáveis ou reutilizáveis é fundamental. Políticas
            públicas, como a promoção de programas de coleta seletiva e a
            diminuição do uso de plásticos descartáveis, também são medidas
            importantes para mitigar os efeitos negativos do plástico no meio
            ambiente e na saúde.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f8fc",
    borderRadius: 10,
    borderColor: "green",
    borderWidth: 1,
    margin: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
  },
  body: {
    marginBottom: 20,
  },
  link: {
    color: "#007bff",
    textDecorationLine: "underline",
    marginVertical: 10,
  },
  footer: {
    fontSize: 16,
    color: "#333",
  },
  footerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  footerName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  footerRole: {
    fontSize: 12,
    color: "#777",
  },
});

export default App;
