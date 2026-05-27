import { View, Text } from "react-native";

type Props = {
  message: string;
};

export default function AlertCard({ message }: Props) {
  return (
    <View
      style={{
        backgroundColor: "#2A0E12",
        borderWidth: 2,
        borderColor: "#FF3B30",
        padding: 16,
        borderRadius: 12,
        marginBottom: 15,
      }}
    >
      <Text
        style={{
          color: "#FF6B6B",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        ⚠️ {message}
      </Text>
    </View>
  );
}