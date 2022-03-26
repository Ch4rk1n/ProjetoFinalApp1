import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

export default function Tipo_produtos() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#FFF' translucent={false}/>

      <View style={styles.textContainer}>
          <Text style={styles.text}>Produtos</Text>
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

      <ScrollView>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View style={{width:180, height:280, backgroundColor:'white', marginTop:40, borderRadius:10, borderWidth: 1}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('Produto')}}>
                <Text style={styles.scrollText}>T-shirt Thrasher R$ 89,90</Text>
                <Image source={require('../src/assets/camisetas.png')} 
                style={styles.fotos}
                />
              </TouchableOpacity>
              
            </View>

            <View style={{width:180, height:280, backgroundColor:'white', marginTop:40,borderRadius:10, borderWidth: 1}}>
              <Text style={styles.scrollText}>T-shirt Nike R$89,90</Text>
              <Image source={require('../src/assets/nike.png')} 
                style={styles.fotos}
                />
              </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <View style={{width:180, height:280, backgroundColor:'white', marginTop:40,borderRadius:10, borderWidth: 1}}>
              <Text style={styles.scrollText}>T-shirt High R$89,90</Text>
              <Image source={require('../src/assets/high.png')} 
                style={styles.fotos}
                />
            </View>

            <View style={{width:180, height:280, backgroundColor:'white', marginTop:40,borderRadius:10, borderWidth: 1}}>
              <Text style={styles.scrollText}>T-shirt Adidas R$89,90</Text>
              <Image source={require('../src/assets/adidas.jpeg')} 
                style={styles.fotos}
                />
              </View>

        </View>


      </ScrollView>
 
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
  height:'80%',
  borderRadius:10
},

scrollText: {
  fontSize: 20,
  fontWeight: 'bold'

}

});
