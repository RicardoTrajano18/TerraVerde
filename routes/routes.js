import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

{
  /* Importação das telas principais */
}
import Inicio from "../pages/Inicio.js";
import Home from "../pages/Home/index.js";
import Cadastro from "../pages/Login/Cadastrar/SignIn.js";
import Entrar from "../pages/Login/Entrar/Login.js";
import Perfil from "../pages/Profile/Perfil.js";
import Mapa from "../pages/Mapa/Mapa.js";
import Comunidade from "../pages/Comunidade/Comms.js";
import Quiz from "../pages/Quiz/Quiz.js";
import Relatorio from "../pages/Relatorio/Rel.js";

{
  /* Importação das Informações dos Quizes */
}
import Doenca from "../pages/Quiz/Info/Doenca.js";
import Eletron from "../pages/Quiz/Info/Lixo.js";
import Metal from "../pages/Quiz/Info/Metais.js";
import Plastico from "../pages/Quiz/Info/Plastico.js";

{
  /* Importação dos Perguntas Quizes */
}
import QuizDoenca from "../Quizzes/QuizDoenca.js";
import QuizPlastico from "../Quizzes/QuizPlastico.js";
import QuizLixo from "../Quizzes/QuizLixo.js";
import QuizMetal from "../Quizzes/QuizMetal.js";

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerTitle: "ㅤ",
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
          }}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
          }}
        />

        <Stack.Screen
          name="Entrada"
          component={Entrar}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
          }}
        />

        <Stack.Screen
          name="Mapa"
          component={Mapa}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
          }}
        />

        <Stack.Screen
          name="Comunidade"
          component={Comunidade}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
          }}
        />

        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
          }}
        />

        <Stack.Screen
          name="Relatorio"
          component={Relatorio}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
          }}
        />

        <Stack.Screen
          name="QuizDoenca"
          component={QuizDoenca}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerBackVisible: false,
            headerTitle: "Quiz sobre Doenças",
          }}
        />

        <Stack.Screen
          name="QuizPlastico"
          component={QuizPlastico}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerBackVisible: false,
            headerTitle: "Quiz sobre Descarte de Plastico",
          }}
        />

        <Stack.Screen
          name="QuizLixo"
          component={QuizLixo}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerBackVisible: false,
            headerTitle: "Quiz sobre Descarte de Lixo Eletrônico",
          }}
        />

        <Stack.Screen
          name="QuizMetal"
          component={QuizMetal}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerBackVisible: false,
            headerTitle: "Quiz sobre Descarte de Metal",
          }}
        />

        <Stack.Screen
          name="Doenca"
          component={Doenca}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerTitle: "Doenças",
          }}
        />

        <Stack.Screen
          name="Eletron"
          component={Eletron}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerTitle: "Lixo Eletrônico",
          }}
        />

        <Stack.Screen
          name="Metal"
          component={Metal}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerTitle: "Descarte de Metal",
          }}
        />

        <Stack.Screen
          name="Plastico"
          component={Plastico}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#60A62E" },
            headerTitle: "Descarte de Plastico",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
