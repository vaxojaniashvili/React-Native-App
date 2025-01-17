import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "@react-navigation/elements";
import React from "react";

const colors = {
  primary: "#3498db",
  text: "#000",
};

const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
            <Text
              style={{
                color: isFocused ? colors.primary : colors.text,
              }}
              numberOfLines={1}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#15263F",
    height: 70,
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    bottom: -35,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 35,
    paddingVertical: 15,
  },
});

export default TabBar;
