import { Stack } from "expo-router";
import { MissionProvider } from "../contexts/MissionContext";

export default function Layout() {
  return (
    <MissionProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#050816",
          },
          headerTintColor: "#fff",
          contentStyle: {
            backgroundColor: "#050816",
          },
        }}
      />
    </MissionProvider>
  );
}