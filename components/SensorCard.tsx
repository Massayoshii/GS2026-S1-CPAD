import { View, Text } from "react-native";

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

  return (
    <View
      style={{
        backgroundColor: "#11182D",
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: getBorderColor(),
      }}
    >
      <Text
        style={{
          color: "#8FA3C7",
          fontSize: 14,
          marginBottom: 8,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {value}
      </Text>
    </View>
  );
}