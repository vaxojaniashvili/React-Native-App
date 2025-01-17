import { Link } from "expo-router";
import React from "react";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        setProducts(await res.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <ScrollView style={styles.container}>
      {products.map(
        (
          item: {
            [x: string]: string | undefined;
            title: string;
          },
          index
        ) => {
          return (
            <View style={styles.imageContainer} key={index}>
              <Link href={`/product-details/${item.id}`}>
                <Text style={styles.text}>{item.title}</Text>
                <Image style={styles.image} source={{ uri: item.image }} />
              </Link>
            </View>
          );
        }
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D192C",
  },
  text: {
    color: "white",
  },
  imageContainer: {
    flex: 1,
    marginBottom: 10,
    flexDirection: "column",
  },
  image: {
    width: 100,
    height: 100,
    flex: 1,
  },
});

export default explore;
