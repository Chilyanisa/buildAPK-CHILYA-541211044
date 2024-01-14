import React from 'react';
import {View, Text, Image, Button, Linking, TextInput, ScrollView} from 'react-native';


const Contactme = () => {
  const url = 'https://www.instagram.com/chilyanisaa/';
  Linking.openURL(url);
}

const Open = () => {
  const url = 'https://www.figma.com/file/dwvjPZ6VefohSNKLkVdaqJ/e-wallet?type=design&node-id=0%3A1&mode=design&t=tei32w0flCuGckvd-1';
  Linking.openURL(url);
}

const Openn = () => {
  const url = 'https://www.figma.com/file/RSgKNSMI9ijveYTicidpX9/FINDCHIVE-PORTOFOLIO?type=design&node-id=0%3A1&mode=design&t=6hGwXGJcecqcfYbn-1';
  Linking.openURL(url);
}

const App = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'rgb(208, 191, 255)', flex:1}}>
    <View style={{alignItems:'center', backgroundColor:'rgb(208, 191, 255)', padding:10,}}>
      <Image style={{width:180, height:180, borderRadius:20, marginTop: 30}} source={require('./assets/self.jpeg')} />
      <Text style={{fontWeight:'bold', textAlign:'center', color:'black', marginTop:20, fontSize:20}}>CHILYA FADHILATIN NISA</Text>
      <Text style={{fontWeight:'reguler', textAlign:'center', color:'gray', marginTop:10}}>Saya adalah siswa SMK TELKOM PURWOKERTO kelas XII RPL 2. Saya lahir di Banyumas, 5 Mei 2006 dan sekrang berumur 17 tahun. Hobi saya scrolling sosmed, menonton drama korea.</Text>
    </View>
     <View style={{alignItems:'center', backgroundColor:'rgb(208, 191, 255)', padding:10}}>
    <Button title='Contact me' color='rgb(119, 82, 254)' onPress={Contactme} />
    <Text style={{fontWeight:'bold', textAlign:'center', color:'black', marginTop:35, fontSize:18}}>My Recent Project</Text>
    <Text style={{fontWeight:'reguler', textAlign:'center', color:'gray', marginTop:20, marginLeft:-190, fontSize:20}}>UI Design</Text>
    <Image style={{width:280, height:160, marginTop: 10}} source={require('./assets/dompayt.png')} />
    <Button title='Open' color='rgb(119, 82, 254)' onPress={Open}/>
    <Text style={{fontWeight:'reguler', textAlign:'center', color:'gray', marginTop:50, marginLeft:-218, fontSize:20, marginLeft:-190}}>UI Design</Text>
    <Image style={{width:280, height:160, marginTop: 10,}} source={require('./assets/findchive.png')} />
    <Button title='Open' color='rgb(119, 82, 254)' onPress={Openn}/>
    </View>
    </View>
    </ScrollView>
    
  );
}
export  default App;