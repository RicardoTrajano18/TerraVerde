import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Descarte de metal</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={{ fontSize: 20 }}>
            O descarte adequado de metais é uma questão importante tanto para a
            proteção ambiental quanto para a saúde pública. Metais como
            alumínio, ferro, cobre e chumbo estão presentes em diversos produtos
            do nosso cotidiano, como eletrodomésticos, baterias e eletrônicos.
            Quando esses materiais não são descartados corretamente, eles podem
            causar sérios danos ao meio ambiente e à saúde humana. O acúmulo de
            metais em aterros sanitários ou a disposição incorreta em terrenos
            baldios pode contaminar o solo e a água, além de liberar substâncias
            tóxicas, como metais pesados, que são prejudiciais à saúde. Os
            metais que entram em contato com o solo podem liberar compostos que
            contaminam lençóis freáticos, afetando a qualidade da água e,
            consequentemente, a vida de comunidades que dependem dessas fontes.
            Além disso, a queima inadequada de produtos metálicos pode liberar
            gases tóxicos que poluem o ar e prejudicam a qualidade de vida,
            causando problemas respiratórios e outras doenças graves. Metais
            pesados, como o chumbo, são particularmente perigosos, pois podem se
            acumular no corpo humano ao longo do tempo, causando danos
            neurológicos e outros problemas de saúde. Uma maneira de evitar
            esses impactos negativos é garantir que os metais sejam descartados
            de forma adequada, através da reciclagem. A reciclagem de metais é
            um processo eficiente e sustentável, já que esses materiais podem
            ser reutilizados sem perder suas propriedades, o que reduz a
            necessidade de extração de novos recursos naturais. Além disso, o
            reaproveitamento de metais diminui a quantidade de resíduos que são
            destinados a aterros sanitários e diminui a poluição ambiental.
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
