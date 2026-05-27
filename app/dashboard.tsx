import { ScrollView, Text } from "react-native";
import { useMission } from "../contexts/MissionContext";
import SensorCard from "../components/SensorCard";

export default function Dashboard() {
  const { mission } = useMission();

  return (
    <ScrollView
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

      <SensorCard
        title="Energia"
        value={`${mission.energy}%`}
        status={mission.energy < 30 ? "critical" : "normal"}
      />

      <SensorCard
        title="Temperatura"
        value={`${mission.temperature}°C`}
        status={mission.temperature > 70 ? "warning" : "normal"}
      />

      <SensorCard
        title="Combustível"
        value={`${mission.fuel}%`}
        status={mission.fuel < 20 ? "critical" : "normal"}
      />

      <SensorCard
        title="Comunicação"
        value={mission.communication ? "Online" : "Offline"}
        status={mission.communication ? "normal" : "critical"}
      />

      <SensorCard
        title="Estabilidade Orbital"
        value={mission.orbitalStability}
      />
    </ScrollView>
  );
}