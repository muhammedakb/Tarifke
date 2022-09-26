import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import styles from "./MealDetail.style";
import Tag from "../components/Tag/Tag";

const MealDetail = ({ navigation, route }) => {
  const [materials, setMaterials] = useState([]);
  const [tags, setTags] = useState([]);

  const { mealId } = route.params;

  const {
    data: { meals },
    isLoading,
    error,
  } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );

  const handleTags = () => {
    if (meals?.[0]?.strTags) {
      if (meals[0].strTags.includes(",")) {
        setTags(meals[0].strTags.split(","));
      } else {
        setTags([meals[0].strTags]);
      }
    }
  };

  const handleIngredientAndMeasure = () => {
    const objKeys = Object.keys(meals[0]);
    const ingredients = objKeys.filter((key) => key.includes("strIngredient"));
    const measures = objKeys.filter((key) => key.includes("strMeasure"));
    const concatted = ingredients.concat(measures);

    let arr = [];

    meals.forEach((meal) => {
      concatted.forEach((ing) => {
        if (meal[ing] && meal[ing] !== " ") {
          arr.push(meal[ing]);
        }
      });
    });

    const len = arr.length / 2;

    for (let i = 0; i < len; i++) {
      if (arr[i] && arr[i + len]) {
        const material = `${arr[i + len]} ${arr[i]}`;
        setMaterials((prevState) => [...prevState, material]);
      }
    }
  };

  useEffect(() => {
    if (meals) {
      handleIngredientAndMeasure();
      handleTags();
    }
  }, [meals]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ScrollView>
      <Image source={{ uri: meals?.[0]?.strMealThumb }} style={styles.image} />
      <View style={styles.meal_area}>
        <Text style={styles.meal}>{meals?.[0]?.strMeal}</Text>
        <Text style={styles.meal_from}>Area: {meals?.[0]?.strArea}</Text>
        <View style={styles.tag_area}>
          {tags?.map((tag, index) => (
            <Tag key={index} tagName={tag} />
          ))}
        </View>
      </View>
      <View style={styles.meal_area}>
        <Text style={styles.meal}>Materials</Text>
        {materials?.map((material, id) => (
          <Text key={id} style={styles.material}>
            {" "}
            - {material}
          </Text>
        ))}
      </View>
      <View style={styles.scrollable_area}>
        <Text style={styles.recipe}>{meals?.[0]?.strInstructions}</Text>
        <Pressable
          style={styles.button}
          onPress={() => Linking.openURL(meals?.[0]?.strYoutube)}
        >
          <Text style={styles.button_text}>Watch on YouTube</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default MealDetail;
