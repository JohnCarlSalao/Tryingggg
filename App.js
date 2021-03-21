import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style > Earl Sweatshirt </Text>
      <TextInput style = {{textAlign: 'center', borderStyle: 'dotted', borderWidth: 20,  }} placeholder = "Thebe Kgotsitsile" value ="Inputted Value"/>
      <Text>Earl Sweatshirt Albums</Text>
      <Text>IDLSIGO</Text>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/I_Don%27t_Like_Shit%2C_I_Don%27t_Go_Outside_An_Album_by_Earl_Sweatshirt.jpg/220px-I_Don%27t_Like_Shit%2C_I_Don%27t_Go_Outside_An_Album_by_Earl_Sweatshirt.jpg"}}></Image>
      <Image style = {{width: 1022, height: 1533}} source= {{uri: "https://i.pinimg.com/originals/72/e3/4f/72e34f4e5b003fd2f5acf594a742c087.jpg"}} ></Image>
      <View style={styles.new}>
      <Text style={styles.new} >Doris</Text>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/4/40/Earl_Sweatshirt_Doris.jpg"}}></Image>
      <Text style={styles.new} >SRS</Text>
      </View>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/d/db/Some_Rap_Songs.jpg"}}></Image>
      
    </View>
    <View style={styles.new}>
    <Text> Earl Sweatshirt </Text>
      <TextInput style={styles.new}  placeholder = "Thebe Kgotsitsile" value ="Earl Sweatshirt"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  new:{
    backgroundColor: 'pink',
    padding:20,
    textAlign: 'center'
  
    
  },

middle: {
  flex: 0.3,
  backgroundColor: "beige",
  borderWidth: 5,
  alignItems: 'center'
  
}
  
});
