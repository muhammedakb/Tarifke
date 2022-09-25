import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import styles from "./MealDetail.style";

const MealDetail = ({ navigation, route }) => {
  const { mealId } = route.params;
  const { data, isLoading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <ScrollView>
      <Image
        source={{ uri: data?.meals?.[0]?.strMealThumb }}
        style={styles.image}
      />
      <View style={styles.meal_area}>
        <Text style={styles.meal}>{data?.meals?.[0]?.strMeal}</Text>
        <Text style={styles.meal_from}>Area: {data?.meals?.[0]?.strArea}</Text>
      </View>
      <View style={styles.scrollable_area}>
        <Text style={styles.recipe}>{data?.meals?.[0]?.strInstructions}</Text>
        <Pressable
          style={styles.button}
          onPress={() => Linking.openURL(data?.meals?.[0]?.strYoutube)}
        >
          <Text style={styles.button_text}>Watch on YouTube</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default MealDetail;
