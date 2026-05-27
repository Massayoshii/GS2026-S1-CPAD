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

  useEffect(() => {
    const interval = setInterval(() => {
      setMission((prev) => ({
        ...prev,

        energy: Math.max(
          0,
          Math.min(
            100,
            prev.energy + Math.floor(Math.random() * 11) - 5
          )
        ),

        fuel: Math.max(
          0,
          Math.min(
            100,
            prev.fuel + Math.floor(Math.random() * 7) - 3
          )
        ),

        temperature: Math.max(
          -50,
          Math.min(
            150,
            prev.temperature + Math.floor(Math.random() * 11) - 5
          )
        ),

        communication: Math.random() > 0.1,
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);



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