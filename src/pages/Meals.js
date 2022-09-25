import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Meal from "../components/Meal/Meal";

const Meals = ({ navigation, route }) => {
  const { categoryName } = route.params;
  const { data, isLoading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const goToMealDetail = (id) => {
    navigation.navigate("Detail", { mealId: id });
  };

  const renderMeals = ({ item }) => (
    <Meal
      img={item.strMealThumb}
      mealName={item.strMeal}
      onPress={() => goToMealDetail(item.idMeal)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fea501",
    padding: 10,
    paddingTop: 0,
    height: "100%",
  },
});
