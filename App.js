import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style ={{height: 10, borderColor: 'gray', borderWidth: 10}} > Who is the best rapper </Text>
      <TextInput style = {{height: 100, borderColor:'red', borderWidth: 1}} placeholder = "Thebe Kgotsitsile" value ="Inputted Value"/>
      <Text style ={{height: 10, borderColor: 'gray', borderWidth: 15}} >Earl Sweatshirt Albums</Text>
      <Text style ={{height: 20, borderColor: 'gray', borderWidth: 15}} >IDLSIGO</Text>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/I_Don%27t_Like_Shit%2C_I_Don%27t_Go_Outside_An_Album_by_Earl_Sweatshirt.jpg/220px-I_Don%27t_Like_Shit%2C_I_Don%27t_Go_Outside_An_Album_by_Earl_Sweatshirt.jpg"}}></Image>
      <Image style = {{width: 1022, height: 1533}} source= {{uri: "https://i.pinimg.com/originals/72/e3/4f/72e34f4e5b003fd2f5acf594a742c087.jpg"}} ></Image>
      <Text style ={{height: 20, borderColor: 'gray', borderWidth: 30}} >Doris</Text>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/4/40/Earl_Sweatshirt_Doris.jpg"}}></Image>
      <Text style ={{height: 10, borderColor: 'blue', borderWidth: 15}} >SRS</Text>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/d/db/Some_Rap_Songs.jpg"}}></Image>
      
    </View>
    <Text style ={{height: 15, borderColor: 'gray', borderWidth: 10}} > Who is the best rapper </Text>
      <TextInput style = {{height: 15, borderColor:'red', borderWidth: 1}} placeholder = "Thebe Kgotsitsile" value ="Inputted Value"/>

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
});
