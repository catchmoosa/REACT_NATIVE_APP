import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, AsyncStorage, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
export default class Home2 extends Component{


  
    constructor(props){
      super(props);
      this.state = {
        data: [],
        isLoaded:false,
      }
      // this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
      AsyncStorage.getItem('userToken', (err,result)=>{
          console.log("token = ",result)
          var config = {
              headers: {'Authorization':result}
          };
          console.log(config)
          axios.get('http://192.168.43.177:8008/user/profile',{headers: {'Authorization':result}}).then((response) => {
              console.log("Data is ", response.data)
              this.setState({data: response,isLoaded: true})
            }).catch((error) => {
              console.log(error)
            });
      });
      
    }

    logOut = async() => {
      console.log("Logout")
      await AsyncStorage.clear()
      this.props.navigation.navigate('landingNav')
    }

    // handleSubmit(event){
    //   this.state.array.push('25');
    //   console.log(this.state.array);
    //   event.preventDefault();
    // }

    

    render(){
      if(this.state.isLoaded){
        return (
          // <LinearGradient
          // colors={['#f68400', '#f07400','#d94b05']}
          // style={{flex: 1}}
          // >
          <ScrollView>
            <View style={styles.container}>

                <View style={styles.container3}>
                  <Icon name="user-circle" size={120} color={'grey'} style={styles.inputIcon}/>
                </View>

                <View style={styles.container4}>
                  <Text style={styles.buttonText2}>{this.state.data.data.username}</Text>
                  <Text style={{color: 'grey', fontSize: 17}}>{this.state.data.data.email}</Text>
                </View>

                <View style={styles.line}></View>
                <View style={styles.line2}></View>

                <TouchableOpacity style={styles.container6} onPress={()=> this.props.navigation.navigate('Transactions')}>
                  <View style={styles.container62}>
                    <Text style={{fontWeight: 'bold', fontSize: 23}}><Icon name="wallet" size={23} color={'#d94b05'} style={styles.inputIcon}/>  Transactions</Text>
                  </View>
                  <View  style={styles.container63}>
                    <Icon name="long-arrow-alt-right" size={23} color={'black'} style={styles.inputIcon}/>
                  </View> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.container6} onPress={()=> this.props.navigation.navigate('Feedback')}>
                  <View style={styles.container62}>
                    <Text style={{fontWeight: 'bold', fontSize: 23}}><Icon name="pen-square" size={23} color={'#d94b05'} style={styles.inputIcon}/>  Feedback</Text>
                  </View>
                  <View  style={styles.container63}>
                    <Icon name="long-arrow-alt-right" size={23} color={'black'} style={styles.inputIcon}/>
                  </View> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.container6} onPress={this.logOut}>
                  <View style={styles.container62}>
                    <Text style={{fontWeight: 'bold', fontSize: 23}}><Icon name="sign-out-alt" size={23} color={'#d94b05'} style={styles.inputIcon}/>  Log Out</Text>
                  </View>
                  <View  style={styles.container63}>
                    <Icon name="long-arrow-alt-right" size={23} color={'black'} style={styles.inputIcon}/>
                  </View> 
                </TouchableOpacity> 

            </View> 
            </ScrollView> 
          // </LinearGradient>   
        );
      }else{
        return (
          <LinearGradient
            colors={['#f68400', '#f07400','#d94b05']}
            style={{flex: 1}}
            >
            <ScrollView>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 170}}>
                <Image source={require('../assets/logo_symbol.png')}  style={{height: 140,width: 120, resizeMode: 'stretch'}}/>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Loading....</Text>
              </View> 
            </ScrollView>  
            </LinearGradient>   
        );
      }
        
    }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  container3: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }, 

  container4:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  button2:{
    height: 50,  
    width: 350,
    borderRadius: 10, 
    backgroundColor:'#f68400',
    alignItems: 'center',
    justifyContent:'center'
  },
  
  buttonText2:{
    fontSize: 22,
    fontWeight: "bold",
    color: 'rgba(0,0,0,1)'
  },

  line: {
    marginTop: 40,
    height: 4,
    width: 500,
    backgroundColor: '#f68400'
  },

  line2: {
    height: 4,
    width: 500,
    backgroundColor: '#d94b05'
  },

  container6: {
    marginTop: 30,
    flexDirection: 'row',
    height: 75,
    width: 370,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 6, 
    borderLeftColor: '#f68400',
  },

  container62: {
    marginLeft: 20,
  },

  container63: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 30
  }

});
