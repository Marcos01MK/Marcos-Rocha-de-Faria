import React, { Component } from "react";
import { View, Text, Image, ScrollView } from 'react-native';

//Não me lembro se nas aulas a gente colocou o "ScrollView", mas o coloquei para melhorar a experiencia
class App extends Component {
  render() {
    return(
      <ScrollView style={{ flex: 1 }}>
      <View>
        <Text style={{color: '#000000', fontSize: 30, margin: 20}}>
          LBLF</Text>
        <Text style={{color: '#DF0101', fontSize: 20, margin: 20}}>La Biblioteca de Los Futbolistas</Text>

        <Image
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Erling_Haaland_2023_%28cropped-v2%29.jpg/200px-Erling_Haaland_2023_%28cropped-v2%29.jpg'}}
        style={{width: 300, height: 300, borderRadius: 10}}
      
        />
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Erling Haaland
        </Text>
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Idade: 24
        </Text>
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Posição: Atacante
        </Text>
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Time atual: Manchester City 
        </Text>
        
        <Image
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg'}}
        style={{width: 300, height: 300, borderRadius: 10}}
      
        />
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Lionel Messi
        </Text>
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Idade: 37
        </Text>
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Posição: Atacante
        </Text>
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Time atual: Inter Miami
        </Text>
        
        <Image
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ronaldinho_in_2019.jpg/200px-Ronaldinho_in_2019.jpg'}}
        style={{width: 300, height: 300, borderRadius: 10}}
      
        />
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
        Ronaldo de Assis Moreira (Ronaldinho)
        </Text>
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Idade: 44
        </Text>
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Posição: Meio-campista ou ponta-esquerda
        </Text>
        <Text style= {{color: '#000000', fontSize: 15, margin: 5}}> 
          Time atual: Aposentado
        </Text>

        <Jobs largura={200} altura={200}/>
      </View>
      </ScrollView>
    );
  }
}

export default App;

class Jobs extends Component {
  render() {
      let img = '';

  }
}
