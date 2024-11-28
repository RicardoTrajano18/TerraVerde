import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Descarte de lixo eletrônico</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={{ fontSize: 20 }}>
            O descarte adequado de lixo eletrônico, ou e-lixo, é fundamental
            para evitar graves impactos ambientais e à saúde pública.
            Dispositivos como celulares, computadores, baterias e
            eletrodomésticos contêm materiais tóxicos, como mercúrio, chumbo e
            cádmio, que, se descartados incorretamente, podem contaminar o solo
            e os recursos hídricos. Esse tipo de contaminação pode prejudicar
            ecossistemas inteiros e causar doenças graves em pessoas expostas a
            esses poluentes, como problemas neurológicos e respiratórios. Além
            dos metais pesados, o lixo eletrônico também contém materiais
            valiosos, como ouro, prata e cobre, que podem ser recuperados
            através da reciclagem. A reciclagem não só evita a poluição
            ambiental, mas também reduz a necessidade de extração de novos
            recursos naturais. No entanto, a taxa de reciclagem de e-lixo ainda
            é muito baixa em comparação ao volume crescente desses resíduos
            gerados pela rápida obsolescência de produtos eletrônicos. A solução
            para o problema do lixo eletrônico envolve a conscientização sobre a
            importância de descartar esses dispositivos em locais apropriados,
            como pontos de coleta especializados ou programas de logística
            reversa oferecidos por fabricantes. Além disso, é essencial que
            governos e empresas incentivem a reutilização e o recondicionamento
            de equipamentos eletrônicos, prolongando sua vida útil e diminuindo
            o acúmulo de resíduos. Dessa forma, é possível mitigar os danos
            ambientais e aproveitar os recursos valiosos presentes no e-lixo.
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
