import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

export default function Homepage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false}/>

        <View style={styles.textContainer}>
            <Text style={styles.text}>Produtos</Text>
            <TouchableOpacity style={{position: 'absolute', right:0, alignSelf: 'center', marginLeft:'2%'}}>
              <FontAwesome
              name="cart-plus"
              size={40}
              color="#000"
              />
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center', alignSelf: 'center', width:150}}>
              <FontAwesome
              name="home"
              size={40}
              color="#000"
              />
            </TouchableOpacity>
        </View>

        <ScrollView>

          <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
              <View style={{width:150, height:150, backgroundColor:'white', marginTop:40, borderRadius:10, borderWidth: 1}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Tipo_produtos')}}>
                  <Text style={styles.scrollText}>Camisetas</Text>
                  <Image source={require('../src/assets/camisetas.png')} 
                  style={styles.fotos}
                  />
                </TouchableOpacity>
                
              </View>

              <View style={{width:150, height:150, backgroundColor:'white', marginTop:40,borderRadius:10, borderWidth: 1}}>
                <Text style={styles.scrollText}>Skates</Text>
                <Image source={require('../src/assets/skates.png')} 
                  style={styles.fotos}
                  />
                </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
              <View style={{width:150, height:150, backgroundColor:'white', marginTop:40,borderRadius:10, borderWidth: 1}}>
                <Text style={styles.scrollText}> Bonés</Text>
                <Image source={require('../src/assets/chapeu.png')} 
                  style={styles.fotos}
                  />
              </View>

              <View style={{width:150, height:150, backgroundColor:'white', marginTop:40,borderRadius:10, borderWidth: 1}}>
                <Text style={styles.scrollText}>Tênis</Text>
                <Image source={require('../src/assets/tenis.png')} 
                  style={styles.fotos}
                  />
                </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
              <View style={{width:150, height:150, backgroundColor:'white', marginTop:40,borderRadius:10, borderWidth: 1}}>
                <Text style={styles.scrollText}>Calças</Text>
                <Image source={require('../src/assets/calças.png')} 
                  style={styles.fotos}
                  />
              </View>

              <View style={{width:150, height:150, backgroundColor:'white', marginTop:40,borderRadius:10, borderWidth: 1}}>
                <Text style={styles.scrollText}>Acessorios</Text>
                <Image source={require('../src/assets/oculos.png')} 
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
    height:'80%'
  },
  
  scrollText: {
    fontSize: 20,
    fontWeight: 'bold'

  }

});


