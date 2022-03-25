import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>     
     <StatusBar backgroundColor='#FFF' translucent={false}/>

    <Image
      source={require('./src/assets/logo.png')}
      style={styles.logo }  
    />
    e
    <TextInput
    placeholder='Username or Email'
    style={styles.input}
    />

    <TextInput
    placeholder='Sua senha'
    style={styles.input}
    />

    <View style={styles.forgotContainer}>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

    </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent:'center'
    
  },

  logo:{
   width:400,
    height:150,
    marginTop:30,
    marginBottom:70
  },

  input: {
    width:300,
    height:60,
    backgroundColor:'#FFFACD',
    marginBottom:30,
    padding:8,
    borderRadius:7, 
    borderColor:'black',
    borderWidth:1
   },

  forgotContainer: {
    width:300,
    alignItems:'flex-start',
    marginBottom:40
  },

  forgotText :{
    fontWeight: 'bold'
  },

  loginButton: {
    backgroundColor:'black',
    fontWeight: 'bold',
    width:300,
    height:40,
    padding:8,
    alignItems:'center',
    justifyContent:'center'

  },

  loginText: {
    color:'white'
  }
});
