import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image, TouchableOpacity, TextInput} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'


export default function Carrinho() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false}/>

        <View style={styles.textContainer}>
            <Text style={styles.text}>Carrinho</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Carrinho')}}  style={{position: 'absolute', right:0, alignSelf: 'center', marginLeft:'2%'}}>
              <FontAwesome
              name="cart-plus"
              size={40}
              color="#000"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('Homepage')}} style={{alignItems:'center', alignSelf: 'center', width:150}}>
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
                  <Image source={require('../src/assets/camisetas.png')} 
                  style={styles.fotos}
                  />
                </TouchableOpacity>
                
              </View>

          <View>
            <Text style={styles.scrollText}>T-shirt Thrasher R$ 89,90</Text>
            <Text style={styles.scrollText}>Quantidade: 1</Text>
          </View>

          </View>

          <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
              <View style={{width:150, height:150, backgroundColor:'white', marginTop:40, borderRadius:10, borderWidth: 1}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Tipo_produtos')}}>
                  <Image source={require('../src/assets/adidas.jpeg')} 
                  style={styles.fotos}
                  />
                </TouchableOpacity>
                
              </View>

          <View>
            <Text style={styles.scrollText}>T-shirt Adidas R$ 89,90</Text>
            <Text style={styles.scrollText}>Quantidade: 1</Text>
          </View>

          </View>

        </ScrollView>

        <View style={styles.pagamento}>
        <Text style={styles.pagamentoText}> Selecione o método de pagamento </Text>
        <TextInput
           placeholder='Número do cartão XXXXX'
          style={styles.input}/>
        
        <TextInput
           placeholder='Data de Validade XX/XX/XX'
          style={styles.input}/>

        <TextInput
           placeholder='Código de segurança XXX'
          style={styles.input}/>
      
      <View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Carrinho')}}  style={{position: 'absolute', right:0, alignSelf: 'center', marginTop:'10%', marginLeft:'5%'}}>
              <FontAwesome
              name="credit-card"
              size={40}
              color="#000"
              />
     </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate('Carrinho')}}  style={{position: 'absolute', right:0, alignSelf: 'center', marginTop:'10%', marginLeft:'35%'}}>
              <FontAwesome
              name="cc-mastercard"
              size={40}
              color="#000"
              />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate('Carrinho')}}  style={{position: 'absolute', right:0, alignSelf: 'center', marginTop:'25%', marginLeft:'17%'}}>
              <FontAwesome
              name="credit-card-alt"
              size={40}
              color="#000"
              />
      </TouchableOpacity>
        
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
    borderRadius: 8
  },
  
  scrollText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: '20%',
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection:'column'

  },

  pagamento: {
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
  
  pagamentoText: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 	'white',
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    
  },
  
  input: {
    borderWidth: 1,
    fontSize:15,
    marginTop:'5%',
    marginRight: '45%',
    marginLeft: '1%'

  },

  loginButton: {
    backgroundColor:'black',
    fontWeight: 'bold',
    width:300,
    height:40,
    padding:8,
    alignItems:'center',
    justifyContent:'center',
    marginTop:'5%'

  },

  loginText: {
    color:'white'
  }
  });
  
  

