

import { View, Text, StyleSheet, button, TouchableOpacity,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function LandingPage({ navigation }) {
  //const navigation = useNavigation()
  return (

   

    
    <View style={styles.container}>
      {/* <Image
        source={require('./assets/EnglishTeacher.png')} 
        style={styles.logo}
      /> */}
  
      <TouchableOpacity style = {styles.button}
        
        onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

    <Text style={styles.orText}>or</Text>

    
    <TouchableOpacity style = {styles.button}
        
        onPress={() => navigation.navigate("")}>
        <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding:'5%'
  },


  logo: {
    width: '267px',
    height: '87px' ,
    aspectRatio: 3 / 1, 
    marginBottom: '40%',
    gap:10
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },

  button: {
    display:'inline-flex',
    alignItems:'center',
    gap:10,
    backgroundColor: '#00669e',
    paddingVertical: 25,
    paddingHorizontal: 115,
    borderRadius: 5,
    marginBottom: '10%',
    position:'relative',
    justifyContent:'center',
    borderWidth:'2px',
    borderColor:'#3E3D37',
    borderRadius:8

  },
  buttonText: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    color: '#ffffff',
    fontSize: 18, 
    textAlign: 'center',
    letterSpacing: -0.41,
    lineHeight: '5%',
  },
  orText: {
    fontFamily: 'CabinRegular',
    fontWeight: '400',
    color: '#00000099',
    fontSize: '20px', 
    textAlign: 'center',
    letterSpacing: '-0.41px',
    lineHeight: '22px',
    whiteSpace:'nowrap',
    marginBottom:'10%',
  },

});
