import { View, Text } from "react-native";

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#050816",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 24 }}>
        Configurações
      </Text>
    </View>
  );
}