import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style = {{width: 400, height: 400}}source = {{uri:"https://www.pngitem.com/pimgs/m/119-1194354_odd-future-logo-dripping-png-download-odd-future.png"}}></Image>
    <View style={styles.container}>
    <Text style > Odd Future </Text>
      <TextInput style = {{textAlign: 'center', borderStyle: 'dotted', borderWidth: 20,  }} placeholder = "Ito ay Placeholder" value ="Maintenance"/>
      <Text>Earl Sweatshirt</Text>
      <Text>Albums</Text>
      <Image style = {{width: 1022, height: 1533}} source= {{uri: "https://i.pinimg.com/originals/72/e3/4f/72e34f4e5b003fd2f5acf594a742c087.jpg"}} ></Image>
     
     
      <View style= {styles.new}>
     
      <Text style= {styles.new}>IDLSIGO</Text>
      <Image style= {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/I_Don%27t_Like_Shit%2C_I_Don%27t_Go_Outside_An_Album_by_Earl_Sweatshirt.jpg/220px-I_Don%27t_Like_Shit%2C_I_Don%27t_Go_Outside_An_Album_by_Earl_Sweatshirt.jpg"}}></Image>
      <Text style= {styles.new} >Doris</Text>
      <Image style= {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/4/40/Earl_Sweatshirt_Doris.jpg"}}></Image>
      <Text style= {styles.new} >SRS</Text>
     
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/d/db/Some_Rap_Songs.jpg"}}></Image>
      
      <Text style = {styles.new}> Earl</Text>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/f/fb/Earlcover.png"}}></Image>
      <Text style ={styles.new}> Tyler The Creator</Text>
      <Image style = {{width: 400, height: 750}}source = {{uri: "https://i.pinimg.com/originals/cd/d3/c2/cdd3c2b3b712c4a84dcef4e96be5ed1d.jpg"}}></Image>
      <Text style = {styles.new}> Albums</Text>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://i0.wp.com/shadesofnoir.org.uk/wp-content/uploads/2017/07/Image-1-1.jpg?fit=1193%2C1200&ssl=1"}}></Image>

      <Image style = {{width: 400, height: 400}}source = {{uri: "https://i.pinimg.com/originals/2f/83/aa/2f83aa0f67d8cf27dc5ae8165294a86b.jpg"}}></Image>

      <Image style = {{width: 400, height: 400}}source = {{uri: "https://images.genius.com/607348d25e00338f23acfc74fd5821e8.1000x1000x1.jpg"}}></Image>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://upload.wikimedia.org/wikipedia/en/2/26/Cherry_Bomb_Tyler_the_Creator.png"}}></Image>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://i.pinimg.com/originals/80/aa/b1/80aab1cad4dc5391d761ef22ebf111ba.png"}}></Image>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://images.genius.com/a3fc42cc9bd2076e53f059ab1fef4ce7.999x999x1.jpg"}}></Image>
      <Image style = {{width: 400, height: 400}}source = {{uri: "https://i.imgur.com/zc4i7e4.jpg"}}></Image>
      </View>
    </View>
    <View style={styles.new}>
    
    <Text> Suggestions </Text>
      <TextInput style={styles.new}  placeholder = "Type Something" value =""/>
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
