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

          headerTintColor: "#00D4FF",

          headerTitleStyle: {
            fontWeight: "bold",
          },

          contentStyle: {
            backgroundColor: "#050816",
          },
        }}
      />
    </MissionProvider>
  );
}