import { Image, StyleSheet, Platform, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text>Bùi Duy Tôn - PH51291</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    gap: 8,
    justifyContent: "center",

    flex: 1,
  },
});
