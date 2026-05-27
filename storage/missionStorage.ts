import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@mission_data";

export async function saveMission(data: any) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.log("Erro ao salvar missão", error);
  }
}

export async function loadMission() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  } catch (error) {
    console.log("Erro ao carregar missão", error);
    return null;
  }
}