import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    imagenes: {
      width: 400,
      height: 200,
      borderWidth: 2,
      margin: 5,
      textAlign: 'center',
    },
    
    Buttonout: {
        width: 40,
        height: 40,
        marginHorizontal:-15,
      },

    botonreservar: {
        width: 150,
        height: 250,
        resizeMode: "contain",
        margin: 6,
        
      },
      
    row: {
      flexDirection: 'row',
    },

    column: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
    },

    input:{
      
      backgroundColor: "#fff8dc",
      padding: 10,
      height: 40,
      margin: 4,

    },
    
  });

  export { styles }