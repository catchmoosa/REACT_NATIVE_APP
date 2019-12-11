import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Login extends Component{
    constructor(){
        super();
        this.sate={email:'', password: ''};
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('user LOGIN triggered!!!');
        event.preventDefault();
        this.props.navigation.navigate('homeScreen')
      }

    render(){
        return (
          <LinearGradient
          colors={['#f68400', '#f07400','#d94b05']}
          style={{flex: 1}}
          >
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='position' enabled keyboardVerticalOffset= '10'>
                    <View style={styles.container4}>
                        <Image source={require('../assets/logo_symbol.png')}  style={styles.image}/>
                    </View>
                
                    <View style={styles.container2}>
                        <TextInput style={styles.inputbox} 
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="Email"
                            placeholderTextColor="#f07400"
                            keyboardType='email-address'
                            onChangeText={(text)=> this.setState({email:text}) }
                        />
                        
                        <TextInput style={styles.inputbox} 
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="Password"
                            placeholderTextColor="#f07400"
                            onChangeText={(text)=> this.setState({password:text})}
                            secureTextEntry= {true}
                        />

                        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    
                    </View>

                </KeyboardAvoidingView>
                
                    <View style={styles.container3}>
                        <Text style={{fontSize:18}}> Don't have an account ??</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('registerScreen')}>
                            <Text style={styles.buttonText2}>Register</Text>
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
    justifyContent: "flex-end",
    marginTop: 50
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
    borderWidth: 2,
    borderColor: 'rgb(255,255,255)',
    borderRadius: 30, 
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
      justifyContent: 'center',
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

});