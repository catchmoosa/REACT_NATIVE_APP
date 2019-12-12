import React, {Component} from 'react';
import { StyleSheet, RefreshControl, Text,Linking , View, TextInput, TouchableOpacity, ScrollView, AsyncStorage, SafeAreaView, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

export default class Home2 extends Component{

    constructor(props){
      super(props);
      this.state = {
        data: null,
        isLoaded: false,
        refreshing: false,
        amount:'0',
        modalVisible: false,
        paypal:null,
      }
    }

    onRefresh = (() => {
      this.setState({refreshing:true });
  
      AsyncStorage.getItem('userToken', (err,result)=>{
        console.log("token = ",result)
        var config = {
            headers: {'Authorization':result}
        };
        console.log(config)
        axios.get('http://192.168.43.177:8008/user/profile',{headers: {'Authorization':result}}).then((response) => {
            console.log("Data is ", response.data)
            this.setState({data: response,isLoaded: true,refreshing:false})
            console.log(this.state.data.balance,this.state.isLoaded)
          }).catch((error) => {
            this.setState({refreshing:false})
            console.log(error)
          });
    });
    });

    
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
            console.log(this.state.data.balance,this.state.isLoaded)
          }).catch((error) => {
            console.log(error)
          });
    });
      
    }

   paypalAPI = async() => {
    AsyncStorage.getItem('userToken', (err,result)=>{
      console.log("token = ",result)
      var config = {
          headers: {'Authorization':result}
      };
      console.log(config)
      
      axios.post('http://192.168.43.177:8008/user/add_money_to_wallet',{
        amount:this.state.amount},
        {headers: {'Authorization':result}}).then((response) => {
          console.log("Paypal Data: ", response.data)
          this.setState({paypal:response,modalVisible:true})

        }).catch((error) => {
          console.log(error)
        });
  });
   }

    render(){
      if(this.state.isLoaded){
        return (
          <SafeAreaView>
        <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)} />} >


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
                      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>Complete Your Transaction</Text>
                      <Text style={{marginLeft: 23, marginRight: 13}}></Text>
                      <TouchableOpacity style={styles.modalbutton} onPress={() => {Linking.openURL(this.state.paypal.data.link); this.setState({modalVisible:false})}}>
                          <Text style={styles.modalbuttonText}>Start Transaction</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                
                </LinearGradient>  
              
              </Modal>

            <View style={styles.container}>
                <View style={styles.container2}>
                      <View>
                        <Text style={styles.container2Head}>Available Balance</Text>
                        <Text style={styles.container2Amount}>
                          <Icon name="rupee-sign" size={35} color={'white'}/>
                          <Text>{this.state.data.data.balance}</Text>
                        </Text>
                      </View>
                      <View>
                        <Icon name="coins" size={55} color={'white'}/>
                      </View>
                </View>

                <View style={styles.container3}>
                  <Icon name="rupee-sign" size={25} color={'grey'} style={styles.inputIcon}/>
                  <TextInput style={styles.inputbox} 
                              underlineColorAndroid="rgba(0,0,0,0)"
                              placeholder="Amount"
                              placeholderTextColor="grey"
                              keyboardType= 'decimal-pad'
                              onChangeText={(text)=> this.setState({amount:text}) }
                  />
                </View>

                <View style={styles.container4}>

                  <TouchableOpacity style={styles.button2} onPress={this.paypalAPI.bind(this)}>
                      <Text style={styles.buttonText2}>Add Funds</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.line}></View>
                <View style={styles.line2}></View>

                <View style={styles.container5}>
                  <View style={{flex: 1}}>
                    <Text style={styles.container5button}>Processing Transactions</Text>
                  </View>  
                </View>
                {this.state.data.data.gasTransactions.filter(fuel => fuel.status == 'initiated').map((item)=> {
                  return(
                <View key={item._id}style={styles.container6}>
                  <View  style={styles.container62}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.pId}</Text>
                    <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>{item.quantity} litre {item.fuelType}</Text>
                  </View>
                  <View  style={styles.container63}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}><Icon name="rupee-sign" size={15} color={'black'}/> {item.cost}</Text>
                    <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>OTP: {item.otp}</Text>
                  </View> 
                </View>
                  )
                })}
                 

            </View> 
            </ScrollView> 
            </SafeAreaView> 
          // </LinearGradient>   
        );
      }else{
        return (
          // <LinearGradient
          // colors={['#f68400', '#f07400','#d94b05']}
          // style={{flex: 1}}
          // >
          <ScrollView>
            <View style={styles.container}>
                <View style={styles.container2}>
                      <View>
                        <Text style={styles.container2Head}>Available Balance</Text>
                        <Text style={styles.container2Amount}>
                          <Icon name="rupee-sign" size={35} color={'white'}/>
                          <Text>Loading...</Text>
                        </Text>
                      </View>
                      <View>
                        <Icon name="coins" size={55} color={'white'}/>
                      </View>
                </View>

                <View style={styles.container3}>
                  <Icon name="rupee-sign" size={25} color={'grey'} style={styles.inputIcon}/>
                  <TextInput style={styles.inputbox} 
                              underlineColorAndroid="rgba(0,0,0,0)"
                              placeholder="Amount"
                              placeholderTextColor="grey"
                              keyboardType= 'decimal-pad'
                              onChangeText={(text)=> this.setState({email:text}) }
                  />
                </View>

                <View style={styles.container4}>

                  <TouchableOpacity style={styles.button2} onPress={this.handleSubmit}>
                      <Text style={styles.buttonText2}>Add Money</Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.line}></View>
                <View style={styles.line2}></View>

                <View style={styles.container5}>
                  <View style={{flex: 1}}>
                    <Text style={styles.container5button}>Recent Orders</Text>
                  </View>  
                </View>

                <View style={styles.container6}>
                  <View  style={styles.container62}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Ordered at Outlet Name</Text>
                    <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>4 litres-Petrol</Text>
                  </View>
                  <View  style={styles.container63}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}><Icon name="rupee-sign" size={15} color={'black'}/> 20</Text>
                    <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>Token</Text>
                  </View> 
                </View> 

            </View> 
            </ScrollView> 
          // </LinearGradient>   
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

  container2: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 130,
    width: 370,
    borderRadius: 10,
    flexDirection:'row',
    marginTop: 20
  },

  container2Head: {
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    marginBottom: 15
  },

  container2Amount: {
    color: 'rgba(255,255,255,1)',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily:'monospace',
  },

  container3: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }, 

  inputbox:{
    height: 50,  
    width: 340, 
    fontSize: 25,
    paddingLeft: 13,
    color: 'grey',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,1)',
    borderBottomColor: '#f07400',  
  },

  container4:{
    marginTop: 40,
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
    fontSize: 20,
    fontWeight: "bold",
    color: 'rgba(255,255,255,1)'
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
  },

  modalcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },

  modalcontainer2: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height:  200,
    width: 325,
    backgroundColor: 'white',
    borderRadius: 8
  },

  modalbutton:{
    height: 40,  
    width: 180,
    borderRadius: 30, 
    backgroundColor:'#f07400',
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
    padding: 15
  },

  modalbuttonText:{
    fontSize: 15,
    fontWeight: "bold",
    color: 'white'
  },


});
