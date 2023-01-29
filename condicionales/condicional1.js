import { Alert, TouchableOpacity, Text, View } from "react-native";
import { styles } from "../style/style.js";




 // export const Condicional1 = () => {

  export default function Condicional1({ navigation }) {

         

      return(

        <TouchableOpacity onPress={()=>

          Alert.alert(
              "¿Está seguro que desea hacer 1 reservacion/es?",
              "",
              [
                {
                  text: "Cancelar",
                },
                { text: "Reservar", onPress: () => navigation.navigate("Factura") }
              ]
            )}
      
            style={styles.botonSeleccion}>
        
            <Text>
                1
              </Text>
            </TouchableOpacity>     
            
)
  

  
}


