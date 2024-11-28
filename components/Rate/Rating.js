import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";

export function Rating({ initialRating, onFinishRating }) {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const starImgFilled =
    "https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";
  const starImgCorner =
    "https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true";

  useEffect(() => {
    setDefaultRating(initialRating);
  }, [initialRating]);

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => {
                setDefaultRating(item);
                onFinishRating(item);
              }}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return <CustomRatingBar />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  customRatingBarStyle: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  starImgStyle: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginRight: 5,
  },
});
