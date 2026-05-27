import { createContext, useContext, useState, ReactNode } from "react";
import { useEffect } from "react";
import { saveMission, loadMission } from "../storage/missionStorage";

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

  useEffect(() => {
  async function fetchMission() {
    const savedMission = await loadMission();

    if (savedMission) {
      setMission(savedMission);
    }
  }

  fetchMission();
}, []);

useEffect(() => {
  saveMission(mission);
}, [mission]);

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