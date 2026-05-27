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
          fontSize: 42,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        🚀 Central Espacial
      </Text>

      <Text
        style={{
          color: "#8FA3C7",
          fontSize: 18,
          textAlign: "center",
          marginBottom: 50,
        }}
      >
        Plataforma de Monitoramento de Missões Orbitais
      </Text>

      <Pressable
        onPress={() => router.push("/dashboard")}
        style={{
          backgroundColor: "#00D4FF",
          paddingVertical: 18,
          paddingHorizontal: 40,
          borderRadius: 14,
          shadowColor: "#00D4FF",
          shadowOpacity: 0.5,
          shadowRadius: 12,
          elevation: 10,
        }}
      >
        <Text
          style={{
            color: "#050816",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Entrar no Painel
        </Text>
      </Pressable>
    </View>
  );
}