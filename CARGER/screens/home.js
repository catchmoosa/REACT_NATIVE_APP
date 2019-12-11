import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Home extends Component{

    render(){
        return (
          <LinearGradient
          colors={['#f68400', '#f07400','#d94b05']}
          style={{flex: 1}}
          >
            <View style={styles.container}> 
                <View style={styles.container2}>
                  <Image source={require('../assets/logo.png')}  style={styles.image}/>
                </View>    
                
                <View style={styles.container3}>

                  <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('registerScreen')}>
                      <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.button2} onPress={()=> this.props.navigation.navigate('loginScreen')}>
                      <Text style={styles.buttonText2}>Log In</Text>
                  </TouchableOpacity>
            
                </View> 
            </View>  
          </LinearGradient>   
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  container2:{
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  image:{
    height: 100,
    width: 340
  },
  
  container3:{
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  button:{
    height: 55,  
    width: 350,
    borderRadius: 30, 
    borderWidth: 2,
    borderColor: 'rgb(255,255,255)',
    marginTop: 25,
    alignItems: 'center',
    justifyContent:'center',
  },

  button2:{
    height: 55,  
    width: 350,
    borderRadius: 30, 
    backgroundColor:'rgb(255,255,255)',
    marginTop: 25,
    alignItems: 'center',
    justifyContent:'center',
  },

  buttonText:{
    fontSize: 25,
    fontWeight: "bold",
    color: 'rgb(255,255,255)'
  },

  buttonText2:{
    fontSize: 25,
    fontWeight: "bold",
    color: '#d94b05'
  },

});
