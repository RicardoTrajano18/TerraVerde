import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Modal,
  Animated,
  ScrollView,
} from "react-native";
import { COLORS, SIZES } from "../constants";
import data from "../data/QuizDataLixo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { height, width } = Dimensions.get("window");

// importa a navegação
import { useNavigation } from "@react-navigation/native";

const Quiz = () => {
  const navigation = useNavigation();

  const handleReturn = () => {
    navigation.navigate("Quiz");
  };

  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: COLORS.black,
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}
          >
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ color: COLORS.nblsck, fontSize: 18, opacity: 0.6 }}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: COLORS.black,
            fontSize: 30,
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 3,
              borderColor:
                option == correctOption
                  ? COLORS.success
                  : option == currentOptionSelected
                  ? COLORS.error
                  : COLORS.secondary,
              backgroundColor:
                option == correctOption
                  ? COLORS.success + "20"
                  : option == currentOptionSelected
                  ? COLORS.error + "20"
                  : COLORS.secondary + "20",
              height: 60,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: COLORS.black }}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {option == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: "100%",
            backgroundColor: "#b2f252",
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ fontSize: 20, color: COLORS.black, textAlign: "center" }}
          >
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#d3d3d3",
          marginTop: -height * 0.04,
          marginBottom: -height * 0.04,
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: "#b2f252",
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <View
          style={{
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 16,
            backgroundColor: "#FFFFFF",
            position: "relative",
          }}
        >
          {/* ProgressBar */}
          {renderProgressBar()}

          {/* Question */}
          {renderQuestion()}

          {/* Options */}
          {renderOptions()}

          {/* Next Button */}
          {renderNextButton()}

          {/* Score Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={showScoreModal}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: COLORS.white,
                  width: "90%",
                  borderRadius: 20,
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  {score > allQuestions.length / 2
                    ? "Parabéns!"
                    : "Que pena, não foi dessa vez!"}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      color:
                        score > allQuestions.length / 2
                          ? COLORS.success
                          : COLORS.error,
                    }}
                  >
                    {score}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: COLORS.black,
                    }}
                  >
                    / {allQuestions.length}
                  </Text>
                </View>
                {/* Retry Quiz button */}
                <TouchableOpacity
                  onPress={restartQuiz}
                  style={{
                    backgroundColor: "#b2f252",
                    padding: 20,
                    width: "100%",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.black,
                      fontSize: 20,
                    }}
                  >
                    Fazer Novamente
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleReturn}
                  style={{
                    backgroundColor: "#b2f252",
                    padding: 20,
                    width: "100%",
                    borderRadius: 20,
                    marginTop: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: COLORS.black,
                      fontSize: 20,
                    }}
                  >
                    Retornar do Quiz
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Quiz;
