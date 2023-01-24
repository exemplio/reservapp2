import { StyleSheet, View } from 'react-native';



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
        width: 100,
        height: 150,
        resizeMode: "contain",
        margin: 0,
        
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
      
      borderWidth:1,
      borderColor:'gray',
      padding:10,
      width:'60%',
      height:50,
      marginTop:10,
      borderRadius:10,
      backgroundColor:"#ffffff",
      paddingStart:10,

    },

    botonSign:{
      borderWidth:1,
      padding:10,
      width:120,
      height:50,
      marginTop:10,
      borderRadius:10,
      justifyContent:"center",
      alignItems:'center',
      backgroundColor:"#faebd7",
    },

    botonSeleccion:{
      borderWidth:1,
      padding:10,
      width:40,
      height:40,
      marginTop:10,
      marginLeft:5,
      justifyContent:"center",
      alignItems:'center',
      backgroundColor:"#ffffff",
      
    },

    imageSemaforo:{

      width:"10%",
      height:50,
      marginLeft:5,

    }
    
  });

  export { styles }