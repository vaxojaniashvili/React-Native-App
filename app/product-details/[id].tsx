import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const Details = () => {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        setData(await res.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.title}</Text>
      <Text style={styles.text}>{data.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D192C",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default Details;
