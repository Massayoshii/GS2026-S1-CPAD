import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#050816",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "#00D4FF",
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Central Espacial
      </Text>

      <Text
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Sistema de Monitoramento de Missões
      </Text>

      <Pressable
        onPress={() => router.push("/dashboard")}
        style={{
          backgroundColor: "#00D4FF",
          paddingVertical: 14,
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#050816",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Entrar no Painel
        </Text>
      </Pressable>
    </View>
  );
}