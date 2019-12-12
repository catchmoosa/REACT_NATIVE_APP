import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Modal} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

export default class Login extends Component{
    constructor(){
        super();
        this.state={email:'', password: '', name: '', phoneNumber:'', modalVisible: false };
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('event triggered');
        this.setState({modalVisible: true})
        event.preventDefault();
    }

    signUp = async() => {
      console.log("Sign Up")
        await axios({
            method: 'POST',
            url: 'http://192.168.43.177:8008/user/register',
            data: {
                email:this.state.email,
                hashedPassword:this.state.password,
                phone:this.state.phoneNumber,
                username:this.state.name,
            }
          }).then((response) => {
            console.log("Successfully Registered ", response.data)
            this.props.navigation.navigate('loginScreen')
          }).catch((error) => {
            console.log(error)
          });
    }

    render(){
        return (
          <LinearGradient
          colors={['#f68400', '#f07400','#d94b05']}
          style={{flex: 1}}>

              <Modal
                animationType='slide'
                presentationStyle='fullScreen'
                visible={this.state.modalVisible}
                onRequestClose={() => this.setState({modalVisible: false})}>
                
                <LinearGradient
                      colors={['#f68400', '#f07400','#d94b05']}
                      style={{flex: 1}}>
                
                  <View style={styles.modalcontainer}>
                    <View style={styles.modalcontainer2}> 
                      <Text style={{color: 'red', fontWeight: 'bold', fontSize: 16}}>ERROR!</Text>
                      <Text style={{marginLeft: 23, marginRight: 13}}>Display errors here.....</Text>
                      <TouchableOpacity style={styles.modalbutton} onPress={()=> this.setState({modalVisible: false})}>
                          <Text style={styles.modalbuttonText}>RETRY</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                
                </LinearGradient>  
              
              </Modal>


              <View style={styles.container}>
                <KeyboardAvoidingView behavior='position' enabled keyboardVerticalOffset= '10'>
                    <View style={styles.container4}>
                        <Image source={require('../assets/logo_symbol.png')}  style={styles.image}/>
                    </View>
                    
                    <View style={styles.container2}>
                        
                        <TextInput style={styles.inputbox} 
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="Name"
                            placeholderTextColor="#f07400"
                            keyboardType='email-address'
                            onChangeText={(text)=> this.setState({name:text}) }
                        />

                        <TextInput style={styles.inputbox} 
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="Email"
                            placeholderTextColor="#f07400"
                            keyboardType='email-address'
                            onChangeText={(text)=> this.setState({email:text}) }
                        />

                        <TextInput style={styles.inputbox} 
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="Phone Number"
                            placeholderTextColor="#f07400"
                            keyboardType='phone-pad'
                            onChangeText={(text)=> this.setState({phoneNumber:text})}
                        />
                        
                        
                        <TextInput style={styles.inputbox} 
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="Password"
                            placeholderTextColor="#f07400"
                            onChangeText={(text)=> this.setState({password:text})}
                            secureTextEntry= {true}
                        />


                        <TouchableOpacity style={styles.button} onPress={this.signUp}>
                            <Text style={styles.buttonText}>SignUp</Text>
                        </TouchableOpacity>
                    
                    </View>   
                    
                    </KeyboardAvoidingView>

                    <View style={styles.container3}>
                        <Text style={{fontSize:18}}> Already have an account ??</Text>
                        <TouchableOpacity onPress= {()=>this.props.navigation.navigate('loginScreen')}>
                            <Text style={styles.buttonText2}>Login</Text>
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
    justifyContent: 'space-evenly',
  },

  container2: {
    alignItems: 'center',
    justifyContent: "flex-start"
  },

  inputbox:{
    height: 50,  
    width: 350,
    borderRadius: 13,
    backgroundColor:'rgb(255,255,255)',
    marginTop: 30,
    paddingHorizontal: 20,
    fontSize: 20,
    color: '#d94b05'
  },

  button:{
    height: 50,  
    width: 350,
    borderRadius: 30, 
    borderWidth: 2,
    borderColor:'rgb(255,255,255)',
    marginTop: 30,
    alignItems: 'center',
    justifyContent:'center',
  },

  buttonText:{
    fontSize: 25,
    fontWeight: "bold",
    color: 'rgb(255,255,255)'
  },

  container3:{
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center'
  },

  buttonText2:{
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine: 'underline',
    color: 'rgb(255,255,255)',
  },

  container4:{
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  image:{
    height: 140,
    width: 120,
    resizeMode: 'stretch'
  },

  modalcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },

  modalcontainer2: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height:  200,
    width: 325,
    backgroundColor: 'white',
    borderRadius: 8
  },

  modalbutton:{
    height: 40,  
    width: 120,
    borderRadius: 30, 
    backgroundColor:'#f07400',
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
  },

  modalbuttonText:{
    fontSize: 15,
    fontWeight: "bold",
    color: 'white'
  },

});