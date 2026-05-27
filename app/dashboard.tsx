import { ScrollView, Text, Pressable, View } from "react-native";

import { router } from "expo-router";

import { useMission } from "../contexts/MissionContext";
import SensorCard from "../components/SensorCard";

export default function Dashboard() {
  const { mission, updateMission } = useMission();

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

      <View
        style={{
          marginTop: 20,
          gap: 15,
        }}
      >
        <Pressable
          onPress={() =>
            updateMission({
              energy: Math.floor(Math.random() * 100),
              fuel: Math.floor(Math.random() * 100),
              temperature: Math.floor(Math.random() * 100),
              communication: Math.random() > 0.5,
            })
          }
          style={{
            backgroundColor: "#00D4FF",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#050816",
              fontWeight: "bold",
            }}
          >
            Atualizar Sensores
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/alerts")}
          style={{
            backgroundColor: "#FF3B30",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Ver Alertas
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/update")}
          style={{
            backgroundColor: "#00FF99",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#050816",
              fontWeight: "bold",
            }}
          >
            Atualizar Missão
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}