import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              Doenças causadas pelo acúmulo de lixo
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={{ fontSize: 20 }}>
            O acúmulo de lixo é um problema sério que afeta tanto o meio
            ambiente quanto a saúde pública, especialmente em áreas urbanas onde
            a gestão de resíduos é inadequada. Quando o lixo não é coletado e
            descartado corretamente, ele se torna um terreno fértil para a
            proliferação de insetos, roedores e outros vetores que transmitem
            doenças. Além disso, o acúmulo de resíduos pode contaminar o solo, o
            ar e a água, criando uma situação perigosa para a saúde das pessoas
            que vivem nas proximidades. Entre as principais doenças causadas
            pelo acúmulo de lixo está a leptospirose, que é transmitida pela
            urina de animais, especialmente ratos, que encontram no lixo um
            ambiente ideal para se reproduzirem. Outra doença comum é a dengue,
            assim como o Zika e a Chikungunya, todas transmitidas pelo mosquito
            Aedes aegypti, que se reproduz em água parada, muitas vezes
            encontrada em resíduos descartados de forma inadequada. O tétano
            também é uma ameaça em áreas com acúmulo de lixo, já que a bactéria
            responsável pela doença pode ser encontrada em materiais
            enferrujados. Além dessas, a salmonelose, causada pela ingestão de
            alimentos ou água contaminados, e a disenteria, uma infecção
            intestinal grave, também estão associadas a ambientes onde há falta
            de saneamento adequado e o lixo não é manejado corretamente. Para
            prevenir essas doenças, é essencial garantir que o lixo seja
            coletado e descartado de forma apropriada, seja através de aterros
            sanitários ou programas de reciclagem. Manter as áreas limpas e sem
            água parada também ajuda a controlar a proliferação de vetores como
            mosquitos e roedores. A higienização pessoal, como lavar as mãos
            frequentemente e garantir o consumo de água potável, é igualmente
            importante. Além disso, a educação ambiental tem um papel crucial,
            pois conscientiza a população sobre a importância de práticas
            sustentáveis, como a separação e o descarte correto do lixo,
            contribuindo assim para um ambiente mais saudável e seguro para
            todos.
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
