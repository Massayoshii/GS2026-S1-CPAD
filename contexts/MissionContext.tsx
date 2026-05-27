import { createContext, useContext, useState, ReactNode } from "react";

type MissionData = {
  energy: number;
  temperature: number;
  fuel: number;
  communication: boolean;
  orbitalStability: string;
};

type MissionContextType = {
  mission: MissionData;
  updateMission: (data: Partial<MissionData>) => void;
};

const MissionContext = createContext({} as MissionContextType);

export function MissionProvider({ children }: { children: ReactNode }) {
  const [mission, setMission] = useState<MissionData>({
    energy: 78,
    temperature: 32,
    fuel: 10,
    communication: true,
    orbitalStability: "Estável",
  });

  function updateMission(data: Partial<MissionData>) {
    setMission((prev) => ({
      ...prev,
      ...data,
    }));
  }

  return (
    <MissionContext.Provider value={{ mission, updateMission }}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  return useContext(MissionContext);
}