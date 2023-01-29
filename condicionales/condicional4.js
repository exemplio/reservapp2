import { Alert, TouchableOpacity, Text, View } from "react-native";
import { styles } from "../style/style.js";




 // export const Condicional1 = () => {

  export default function Condicional4({ navigation }) {

         

      return(

        <TouchableOpacity onPress={()=>

          Alert.alert(
              "¿Está seguro que desea hacer 4 reservacion/es?",
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
                4
              </Text>
            </TouchableOpacity>     
            
          )
  

    
    
    
    
    

    



  
}


