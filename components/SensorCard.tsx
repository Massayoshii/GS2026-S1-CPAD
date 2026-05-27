import { View, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  value: string;
  status?: "normal" | "warning" | "critical";
};

export default function SensorCard({
  title,
  value,
  status = "normal",
}: Props) {
  function getBorderColor() {
    switch (status) {
      case "warning":
        return "#FFD600";

      case "critical":
        return "#FF3B30";

      default:
        return "#00D4FF";
    }
  }

  function getIcon() {
    switch (title) {
      case "Energia":
        return "flash";

      case "Temperatura":
        return "thermometer";

      case "Combustível":
        return "rocket";

      case "Comunicação":
        return "radio";

      default:
        return "planet";
    }
  }

  return (
    <View
      style={{
        backgroundColor: "#11182D",
        padding: 20,
        borderRadius: 16,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: getBorderColor(),
        shadowColor: getBorderColor(),
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Ionicons
          name={getIcon()}
          size={20}
          color={getBorderColor()}
          style={{ marginRight: 8 }}
        />

        <Text
          style={{
            color: "#8FA3C7",
            fontSize: 15,
          }}
        >
          {title}
        </Text>
      </View>

      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        {value}
      </Text>
    </View>
  );
}