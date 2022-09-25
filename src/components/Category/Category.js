import { Text, Image, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import styles from "./Category.style";

const Category = ({ img, categoryName, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: img }} />
        <Text style={styles.text}>{categoryName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Category;
