import { useForm, Controller } from "react-hook-form";

import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

import { useMission } from "../contexts/MissionContext";

type FormData = {
  energy: string;
  temperature: string;
  fuel: string;
};

export default function UpdateMission() {
  const { mission, updateMission } = useMission();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      energy: String(mission.energy),
      temperature: String(mission.temperature),
      fuel: String(mission.fuel),
    },
  });

  function onSubmit(data: FormData) {
    updateMission({
      energy: Number(data.energy),
      temperature: Number(data.temperature),
      fuel: Number(data.fuel),
    });

    Alert.alert("Sucesso", "Dados atualizados");
  }

  return (
    <View
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
        Atualizar Missão
      </Text>

      {/* ENERGIA */}

      <Text style={{ color: "white", marginBottom: 5 }}>
        Energia
      </Text>

      <Controller
        control={control}
        name="energy"
        rules={{
          required: "Campo obrigatório",
          min: {
            value: 0,
            message: "Valor mínimo é 0",
          },
          max: {
            value: 100,
            message: "Valor máximo é 100",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            style={{
              backgroundColor: "#11182D",
              color: "white",
              padding: 15,
              borderRadius: 10,
              marginBottom: 5,
            }}
          />
        )}
      />

      {errors.energy && (
        <Text style={{ color: "red", marginBottom: 15 }}>
          {errors.energy.message}
        </Text>
      )}

      {/* TEMPERATURA */}

      <Text style={{ color: "white", marginBottom: 5 }}>
        Temperatura
      </Text>

      <Controller
        control={control}
        name="temperature"
        rules={{
          required: "Campo obrigatório",
          min: {
            value: -100,
            message: "Valor inválido",
          },
          max: {
            value: 200,
            message: "Temperatura muito alta",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            style={{
              backgroundColor: "#11182D",
              color: "white",
              padding: 15,
              borderRadius: 10,
              marginBottom: 5,
            }}
          />
        )}
      />

      {errors.temperature && (
        <Text style={{ color: "red", marginBottom: 15 }}>
          {errors.temperature.message}
        </Text>
      )}

      {/* COMBUSTÍVEL */}

      <Text style={{ color: "white", marginBottom: 5 }}>
        Combustível
      </Text>

      <Controller
        control={control}
        name="fuel"
        rules={{
          required: "Campo obrigatório",
          min: {
            value: 0,
            message: "Valor mínimo é 0",
          },
          max: {
            value: 100,
            message: "Valor máximo é 100",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            style={{
              backgroundColor: "#11182D",
              color: "white",
              padding: 15,
              borderRadius: 10,
              marginBottom: 5,
            }}
          />
        )}
      />

      {errors.fuel && (
        <Text style={{ color: "red", marginBottom: 15 }}>
          {errors.fuel.message}
        </Text>
      )}

      <Pressable
        onPress={handleSubmit(onSubmit)}
        style={{
          backgroundColor: "#00D4FF",
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#050816",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Salvar Dados
        </Text>
      </Pressable>
    </View>
  );
}