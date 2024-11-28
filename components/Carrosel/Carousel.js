import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { useEffect, useRef, useState } from "react";

const { width, height } = Dimensions.get("window");

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const flatlistRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flatlistRef.current) {
        const nextIndex =
          activeIndex === carouselData.length - 1 ? 0 : activeIndex + 1;

        flatlistRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });

        setActiveIndex(nextIndex); 
      }
    }, 1500);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const carouselData = [
    {
      id: "01",
      image: require("../../assets/Carrossel/img1.jpg"),
    },
    {
      id: "02",
      image: require("../../assets/Carrossel/img1.jpg"),
    },
    {
      id: "03",
      image: require("../../assets/Carrossel/img1.jpg"),
    },
  ];

  const handleScroll = (event) => {};

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            height: height * 0.3,
            width: width * 1,
            borderColor: "black",
            marginBottom: 10,
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        ref={flatlistRef}
        showsHorizontalScrollIndicator={false}
      />
      <View></View>
    </View>
  );
}
