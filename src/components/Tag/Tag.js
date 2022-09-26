import React from "react";
import { Text } from "react-native";
import styles from "./Tag.style";

const Tag = ({ tagName }) => <Text style={styles.tag}>#{tagName}</Text>;

export default Tag;
