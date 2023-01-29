import { View, Text, Image, 
  ScrollView, Alert, TouchableOpacity } from "react-native";
import { styles } from "../style/style.js";
import UserScreen from "../database/firedatabase1.js"
import UserScreen2 from "../database/firedatabase2.js"
import UserScreen3 from "../database/firedatabase3.js"
import UserScreen4 from "../database/firedatabase4.js"
import UserScreenCopy from "../database/firedatabase1copy.js"
import UserScreen2Copy from "../database/firedatabase2copy.js"
import UserScreen3Copy from "../database/firedatabase3copy.js"
import UserScreen4Copy from "../database/firedatabase4copy.js"
import { CondicionalBack } from "../condicionales/condicionalback.js";


 // export const AboutScreen = ({ navigation }) => {

export default function AboutScreen({ navigation }) {

 
CondicionalBack ({navigation});





  return (


  <ScrollView style={{backgroundColor:"#f0f8ff", width:"100%"}}> 
                      
          
    <Text style={{fontSize:20}}>Recomendaciones del dia</Text>
    <Text></Text>

    


    <View  style={{width:'100%'}}>

    <UserScreenCopy/>

    <View>

    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant1")} >
    <Image
      source={require('../assets/image.jpg')}
      style={styles.imagenes}>

      </Image>
    </TouchableOpacity>

    </View>

    <UserScreen/>

    <Text>{"\n"}</Text>

    
    

    <UserScreen2Copy/>

    <View>
    
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant2")} >
    <Image
      source={require('../assets/image1.jpg')}
      style={styles.imagenes} />
    </TouchableOpacity>

    </View>

    <UserScreen2/>


    <Text>{"\n"}</Text>
    


    <UserScreen3Copy/>
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant3")} >
    <Image
      source={require('../assets/image2.jpg')}
      style={styles.imagenes} />
    </TouchableOpacity>

     </View>

     <UserScreen3/>

     <Text>{"\n"}</Text>

    

    <UserScreen4Copy/>
    <View>
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurant4")} >
    <Image
    source={require('../assets/image3.jpg')}
    style={styles.imagenes} />
    
    </TouchableOpacity>
   
    </View>

    <UserScreen4/>


    <Text>{"\n"}</Text>






</View>
</ScrollView>
  


  );
}