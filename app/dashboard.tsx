import { View, Text } from "react-native";

export default function Dashboard() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#050816",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Dashboard da Missão
      </Text>
    </View>
  );
}