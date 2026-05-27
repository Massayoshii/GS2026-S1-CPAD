import { View, Text } from "react-native";
import { useMission } from "../contexts/MissionContext";

export default function Dashboard() {
  const { mission } = useMission();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#050816",
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "#00D4FF",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Dashboard da Missão
      </Text>

      <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
        Energia: {mission.energy}%
      </Text>

      <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
        Temperatura: {mission.temperature}°C
      </Text>

      <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
        Combustível: {mission.fuel}%
      </Text>

      <Text style={{ color: "white", fontSize: 18, marginBottom: 10 }}>
        Comunicação: {mission.communication ? "Online" : "Offline"}
      </Text>

      <Text style={{ color: "white", fontSize: 18 }}>
        Órbita: {mission.orbitalStability}
      </Text>
    </View>
  );
}