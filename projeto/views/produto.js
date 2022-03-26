import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image, TouchableOpacity, TextInput } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'


export default function Produto() {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#FFF' translucent={false}/>

      <View style={styles.textContainer}>
          <Text style={styles.text}>Produto</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Carrinho')}}  style={{position: 'absolute', right:0, alignSelf: 'center', marginLeft:'2%'}}>
            <FontAwesome
            name="cart-plus"
            size={40}
            color="#000"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navigation.navigate('Homepage')}}  style={{alignItems:'center', alignSelf: 'center', width:150}}>
            <FontAwesome
            name="home"
            size={40}
            color="#000"
            />
          </TouchableOpacity>
          
      </View>

      <View style={styles.descriptionContainer}>
      <Text style={styles.description}>Camiseta Thrasher "Flame" Preta Unisex</Text>
      </View>

      <ScrollView>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View style={{width:280, height:280, backgroundColor:'white',
             marginTop:15, borderRadius:10, borderWidth:1}}>

              <TouchableOpacity onPress={()=>{navigation.navigate('Produto')}}>
                <Text style={styles.scrollText}>T-shirt Thrasher R$ 89,90</Text>
                <Image source={require('../src/assets/camisetas.png')} 
                style={styles.fotos}/>
              </TouchableOpacity>
              
            </View>

        </View>

      </ScrollView>

      <View style={styles.comentarios}>
        <Text style={styles.comentariosText}> Comentários </Text>
        <TextInput
    placeholder='Adicione um comentário'
    style={styles.input}
    />
      </View>
 
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#FFFACD'

},

textContainer: {
  flexDirection: 'row',
  marginVertical:'2%',
  marginHorizontal:'2%',
  backgroundColor:  'white',
  borderWidth: 2,
  borderRadius: 6,
},

text: {
  fontSize:26,
  fontWeight: 'bold'
  
},

fotos: {
  width:'100%',
  height:'100%',
  borderRadius:10
},

scrollText: {
  fontSize: 20,
  fontWeight: 'bold'

},

description: {
  fontSize: 20,
   
},

descriptionContainer: {
  backgroundColor: 'white',
  width: '95%',
  height:'8%',
  margin: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1

},

comentarios: {
  backgroundColor:'white',
  width:'96%',
  height: '35%',
  marginBottom: 10,
  flexDirection: 'row',
  marginVertical:'2%',
  marginHorizontal:'2%',
  borderWidth: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
 
},

comentariosText: {
  fontSize: 20,
  fontWeight: 'bold',
  backgroundColor: 'black',
  color: 	'white',
  width: '100%',
  height: '15%',
  justifyContent: 'center',
  
},

input: {
  borderWidth: 1,
  margin:20,
  fontSize:15
}
});

