import { ScrollView, Text } from "react-native";

import { useMission } from "../contexts/MissionContext";
import AlertCard from "../components/AlertCard";

export default function Alerts() {
  const { mission } = useMission();

  const alerts = [];

  if (mission.energy < 30) {
    alerts.push("Nível de energia crítico");
  }

  if (mission.fuel < 20) {
    alerts.push("Combustível abaixo do limite");
  }

  if (mission.temperature > 70) {
    alerts.push("Temperatura acima do normal");
  }

  if (!mission.communication) {
    alerts.push("Falha na comunicação com a nave");
  }

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
          color: "#FF3B30",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Central de Alertas
      </Text>

      {alerts.length === 0 ? (
        <Text
          style={{
            color: "#00FF99",
            fontSize: 18,
          }}
        >
          Nenhum alerta ativo
        </Text>
      ) : (
        alerts.map((alert, index) => (
          <AlertCard key={index} message={alert} />
        ))
      )}
    </ScrollView>
  );
}