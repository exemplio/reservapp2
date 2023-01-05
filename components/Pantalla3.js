import React from "react";
import { Button, View, Text } from "react-native";

export default function LogScreen() {
  return (
    <View style={{ flex: 1,alignContent:"center",  justifyContent: "center" }}>
      <Text>Su estado de cuenta ha sido actualizado, sujeto a cambios previa
verificación, muchísimas gracias por su reservacion.
* * * DATOS OPERACIÓN * * *
EDIFICIO: -----------

PROPIETARIO: --------------
FECHA: 15-11-2022
REFERENCIA: 849797
RESTAURANTE: ------

</Text>
    </View>
  );
}