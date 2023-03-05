import { View, Text, Image, 
  ScrollView, Alert, TouchableOpacity } from "react-native";
import { styles } from "../style/style.js";
import UserScreen from "../database/firedatabase1.js"
import UserScreen2 from "../database/firedatabase2.js"
import UserScreen3 from "../database/firedatabase3.js"
import UserScreen4 from "../database/firedatabase4.js"
import { CondicionalBack } from "../condicionales/condicionalback.js";
import { ListItem } from "react-native-elements";

 // export const AboutScreen = ({ navigation }) => {

export default function AboutScreen({ navigation }) {

 
CondicionalBack ({navigation});


const valorImportado= UserScreen();
const valorImportado2= UserScreen2();
const valorImportado3= UserScreen3();
const valorImportado4= UserScreen4();



  return (


  <ScrollView style={{backgroundColor:"#f0f8ff", width:"100%"}}> 


    <Text></Text>                 
  
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={{fontSize:20}}>
              Recomendaciones
              </ListItem.Title>
          </ListItem.Content>
        </ListItem>

    <Text>{"\n"}</Text>


    <View  style={{width:'100%'}}>

    <View>

    {valorImportado.map((user) => {   // Parte de arriba
      return (
        <ListItem
          key={user.id}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Subtitle>
              Restaurante: {user.id}
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
    </View>

    <View>

    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant1")} >
    <Image
      source={require('../assets/image.jpg')}
      style={styles.imagenes}>

      </Image>
    </TouchableOpacity>

    </View>

    <View>

    {valorImportado.map((user) => {   // Parte de abajo
      return (
        <ListItem
          key={user.puestos}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Subtitle>
              Puestos disponibles: {user.puestos}
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
    </View>

    <Text>{"\n"}</Text>

    
    
    <View>

    {valorImportado2.map((user) => {      // Parte de arriba
      return (
        <ListItem
          key={user.id}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Subtitle>
              Restaurante: {user.id}
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
    </View>

        <View>


    </View>

    <View>
    
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant2")} >
    <Image
      source={require('../assets/image1.jpg')}
      style={styles.imagenes} />
    </TouchableOpacity>

    </View>

    <View>

    {valorImportado2.map((user) => {  // Parte de abajo
      return (
        <ListItem
          key={user.puestos}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Subtitle>
            Puestos disponibles: {user.puestos}
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
    </View>


    <Text>{"\n"}</Text>
    
    <View>

    {valorImportado3.map((user) => {  // Parte de arriba
      return (
        <ListItem
          key={user.id}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Subtitle>
              Restaurante: {user.id}
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
    </View>

    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant3")} >
    <Image
      source={require('../assets/image2.jpg')}
      style={styles.imagenes} />
    </TouchableOpacity>

     </View>

     <View>

    {valorImportado3.map((user) => {   // Parte de abajo
      return (
        <ListItem
          key={user.puestos}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Subtitle>
            Puestos disponibles: {user.puestos}
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
    </View>

     <Text>{"\n"}</Text>

     <View>

    {valorImportado4.map((user) => {  // Parte de arriba
      return (
        <ListItem
          key={user.id}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Subtitle>
              Restaurante: {user.id}
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
    </View>  

    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant4")} >
    <Image
    source={require('../assets/image3.jpg')}
    style={styles.imagenes} />
    
    </TouchableOpacity>
   
    </View>

    <View>

    {valorImportado4.map((user) => {  // Parte de abajo
      return (
        <ListItem
          key={user.puestos}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Subtitle>
            Puestos disponibles: {user.puestos}
              </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
    </View>


    <Text>{"\n"}</Text>






</View>
</ScrollView>
  


  );
}