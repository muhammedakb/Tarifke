import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./Meal.style";

const Meal = ({ img, mealName, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          imageStyle={{ borderRadius: 15 }}
          source={{ uri: img }}
        >
          <View style={styles.text_container}>
            <Text style={styles.text} numberOfLines={1}>
              {mealName}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Meal;
