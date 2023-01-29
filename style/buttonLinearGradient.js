import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text } from 'react-native';


export default function ButtonLinearGradient() {

return(

  
<LinearGradient colors={['#87cefa', '#00bfff', '#b0e0e6']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Iniciar sesion
  </Text>
</LinearGradient>

)

}

var styles = StyleSheet.create({
  linearGradient: {
    marginTop:10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})
