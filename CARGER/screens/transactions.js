import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, AsyncStorage, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';

export default class Home2 extends Component{

    constructor(props){
      super(props);
      this.state = {
          tab: true,
          data: [],
          isLoaded:false,
      }
      this.handleSubmit1 = this.handleSubmit1.bind(this);
      this.handleSubmit2 = this.handleSubmit2.bind(this)
    }

    async componentDidMount(){
      console.log("Transaction Details")
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

    handleSubmit1(event){
      this.setState({tab: true})  
      event.preventDefault();
    }

    handleSubmit2(event){
        this.setState({tab: false})  
        event.preventDefault();
      }

    render(){
      if(this.state.isLoaded){
        if(this.state.tab){
          
          return (
            <ScrollView>
              <View style={styles.container}>
                  <View style={styles.container2}>
                      <TouchableOpacity style={styles.container2button1} onPress={this.handleSubmit1}>
                        <Text style={styles.buttonText2}>Fuel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.container2button1} onPress={this.handleSubmit2}>
                        <Text style={styles.buttonText2}>E-Wallet</Text>
                      </TouchableOpacity>
                  </View>
  
                  <View style={styles.container5}>
                      <View style={{flex: 1}}>
                      <Text style={styles.container5button}>Fuel Transactions</Text>
                      </View>  
                  </View>
                  {this.state.data.data.gasTransactions.map((item) => {
                    return(
                    <View key={item._id} style={styles.container6}>
                      <View  style={styles.container62}>
                      <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.pId}</Text>
                      <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>{item.quantity} Litres {item.fuelType}</Text>
                      </View>
                      <View  style={styles.container63}>
                      <Text style={{fontWeight: 'bold', fontSize: 18}}><Icon name="rupee-sign" size={15} color={'black'}/>{item.cost}</Text>
                      <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>{item.status}</Text>
                      </View> 
                  </View>)
                    
                  })}
                  
  
              </View> 
              </ScrollView>  
          );
        }
        else{
  
          return (
  
          <ScrollView>
              <View style={styles.container}>
                  <View style={styles.container2}>
                      <TouchableOpacity style={styles.container2button1} onPress={this.handleSubmit1}>
                        <Text style={styles.buttonText2}>Fuel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.container2button1} onPress={this.handleSubmit2}>
                        <Text style={styles.buttonText2}>E-Wallet</Text>
                      </TouchableOpacity>
                  </View>  
          
                <View style={styles.container5}>
                    <View style={{flex: 1}}>
                    <Text style={styles.container5button}>E-Wallet Transactions</Text>
                    </View>  
                </View>
                {this.state.data.data.eWalletTransactions.map((item) => {
                  return(
                    <View key={item._id} style={styles.container6}>
                    <View  style={styles.container62}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.type}</Text>
                    <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>{item.createdAt}</Text>
                    </View>
                    <View  style={styles.container63}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}><Icon name="rupee-sign" size={15} color={'black'}/> {item.amount}</Text>
                    <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>{item.status}</Text>
                    </View> 
                </View> 
                  )
                })}
                 
            </View>
            </ScrollView>  
        )
      }
      }
      else{
        if(this.state.tab){
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
        else{
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
        )
      }
      }
      
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
    width: 370,
    borderRadius: 10,
    flexDirection:'row',
    marginTop: 20
  },

  container2button1:{
    height: 55,  
    width: 170, 
    alignItems: 'center',
    borderRadius: 7,
    justifyContent:'center',
    backgroundColor: '#d94b05'
  },
  
  buttonText2:{
    fontSize: 20,
    fontWeight: "bold",
    color: 'rgba(255,255,255,1)'
  },

  container5: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  container5button:{
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start'
  },

  container6: {
    marginTop: 30,
    flexDirection: 'row',
    height: 75,
    width: 370,
    alignItems: 'center',
    backgroundColor: 'rgb(240,240,240)',
    borderRadius: 5,
    justifyContent: 'space-between'
  },

  container62: {
    marginLeft: 20,
  },

  container63: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20
  }

});
