import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Category from "../components/Category";

const Categories = ({ navigation }) => {
  const { data, error, isLoading } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const goCategoryRecipes = (categoryName) => {
    navigation.navigate("Meals", { categoryName });
  };

  const renderCategories = ({ item }) => (
    <Category
      key={item.idCategory}
      categoryName={item.strCategory}
      img={item.strCategoryThumb}
      onPress={() => goCategoryRecipes(item.strCategory)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fea501",
    padding: 10,
    paddingTop: 0,
    height: "100%",
  },
});
