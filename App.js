import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Button, 
  StatusBar, 
  FlatList, 
  TouchableOpacity, 
  TextInput,
  Modal,
} from 'react-native';
import { 
  Feather, 
  AntDesign, 
  FontAwesome,
} from '@expo/vector-icons';


export default function App() {

  const [nav, SetNav] = useState ([
    {nome: 'home', icon: <Feather name="home" size={30} color="black" />, key: 1},
    {nome: 'relatórios', icon: <FontAwesome name="newspaper-o" size={30} color="black" />, key: 2},
    {nome: 'Dados', icon: <AntDesign name="database" size={30} color="black" />, key: 3},
    {nome: 'notificações', icon: <Feather name="bell" size={30} color="black" />, key: 4},
  ])

  const [visivel, SetVisivel] = useState (false)
  const [input, SetInput] = useState ('Relátorio não encontrado!')
  const [destino, SetDestino] = useState ('Destino não encontrado!')

  return (
    <View style={styles.body}>
     
      <View style={styles.flatview}>
        <FlatList
          style={styles.flatnav}
          numColumns={1}
          horizontal={true}
          data={nav}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text style={styles.teste}>{item.icon}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
   
      <View style={styles.barra}></View>
      
      <View style={styles.novo}>
        <Text style={styles.novot}>Novo Chamado</Text>
      </View>

      <View>
        <TextInput
          multiline
          placeholder='Digite aqui seu chamado'
          onChangeText={SetInput}
          style={styles.input}/>
      </View>
      
      <View style={styles.p1}>
        <View style={styles.p2}>
          <TouchableOpacity style={styles.p3} onPress={()=>{SetDestino('Setor de Recursos Humanos')}}>
            <Text style={styles.texto}>RH</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.p3} onPress={()=>{SetDestino('Setor de TI')}}>
          <Text style={styles.texto}>TI</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.p2}>
          <TouchableOpacity style={styles.p3} onPress={()=>{SetDestino('Setor de Serviços Gerais')}}>
            <Text style={styles.texto}>SG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.p3} onPress={()=>{SetDestino('Setor de Financeiro')}}>
          <Text style={styles.texto}>FI</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.botaov}>
        <Button
        title='+ Abrir Chamado'
        color={'#395988'}
        onPress={()=>{SetVisivel(true)}}
        style={styles.botao}/>
      </View>
      <Modal
        transparent={true}
        visible={visivel}
        style={styles.modal}
      >

        <View style={styles.modalv1}>
          <View style={styles.modalv2}>
            <Text style={styles.modalt1}>Seu chamado:</Text>
            <Text>{input}</Text>
            <Text style={styles.modalt1}>Será enviado para:</Text>
            <Text style={styles.modalt1}>{destino}</Text>
          </View>

          <View style={styles.modalb1}>
            <Button
              title='Fechar'
              onPress={()=>{SetVisivel(false)}}
            />
          </View>
        </View>
        
      </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#1A2A43',
    alignItems: 'center',
  },

  barra: {
    width: '100%',
    height: 3,
    backgroundColor: 'black',
  },
  flatnav: {
    width: '100%',
    height: 40,
  },

  teste: {
    paddingTop: 5,
    textAlign: 'center',
    width: 150,
    height: 40,
    borderRightWidth: 1,
    borderColor: 'black',

  },

  flatview: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: 65,
    padding: 5,
    backgroundColor: '#C18638',
  },

  novo: {
    width: 340,
    marginTop: 20,
  },

  novot: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  input: {
    justifyContent: 'center',
    textAlign: 'center',
    
    color: 'black',
    backgroundColor: '#F5F5F5',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    
    width: 340,
    height: 145,
    padding: 8,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 10,
  },

  botaov: {
    width: 270,
    height: 40,
    marginTop: 60,
  },

  p1: {
    marginHorizontal: '10%',
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-around',
    backgroundColor: '#C18638',
  },

  p2: {
    height: 120,
    width: 265,
    backgroundColor: '#C18638',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
  },

  p3: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A111B',
  },

  texto: {
    fontSize: 60,
    fontFamily: 'arial',
    color: 'white',
  },

  modalv1: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalv2: {
    padding: 10,
    gap: 5,
    width: '80%',
    marginHorizontal: '10%',
    backgroundColor: '#9DC4FF',
  },

  modalt1: {
    fontSize: 15,
    fontFamily: 'arial',
    fontWeight: 'bold',
  },

  modalb1: {
    width: 270,
    height: 40,
    marginTop: 5,
  }

});
