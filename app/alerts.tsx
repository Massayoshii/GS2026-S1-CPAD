import { View, Text } from "react-native";

export default function Alerts() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#050816",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "red", fontSize: 24 }}>
        Central de Alertas
      </Text>
    </View>
  );
}