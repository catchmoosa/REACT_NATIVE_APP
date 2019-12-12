import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Picker, KeyboardAvoidingView,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'

export default class Home2 extends Component{

    constructor(props){
      super(props);
      this.state = {
        item: this.props.navigation.state.params.item,
        fuelType: this.props.navigation.state.params.item.fuelDetails[0].fuel,
        quantity:'0',
        amount: '0',
      }
      
    }

    buyFuel = async() =>{
     
      AsyncStorage.getItem('userToken', (err,result)=>{
        console.log("token = ",result)
        var config = {
            headers: {'Authorization':result}
        };
        console.log(config)
        
        axios.post('http://192.168.43.177:8008/user/gas_trans',{
          name:this.state.item.name,
          type:this.state.fuelType,
          quantity:this.state.quantity,
          total:this.state.amount},
          {headers: {'Authorization':result}}).then((response) => {
            console.log("Data is ", response.data)
            this.setState({data: response,isLoaded: true})
            this.props.navigation.navigate('afterlogin')
          }).catch((error) => {
            console.log(error)
          });
    });
   }

    get_amount=(text)=>{
      if(text == ''){
        this.setState({amount:'0'})
      }

      else{
        x= parseFloat(text);
        this.setState({quantity:text})
        tAmount= x * parseFloat(this.state.item.fuelDetails.filter(fuel => fuel.fuel == this.state.fuelType)[0].price)
        console.log('TEXT = ',text)
        console.log("HELP ME RIGHT NOW",this.state.item.fuelDetails.filter(fuel => fuel.fuel == this.state.fuelType))
        tAmount= String(tAmount)
        this.setState({amount: tAmount})
      }  
    }

    render(){
        return (
          // <LinearGradient
          // colors={['#f68400', '#f07400','#d94b05']}
          // style={{flex: 1}}
          // >
          <ScrollView>
            <View style={styles.container}>
              <KeyboardAvoidingView behavior='position' enabled keyboardVerticalOffset= '10'>
                <View style={styles.container1}>
                    <View style= {styles.container11}>
                      <Text style= {{fontSize: 25, fontWeight: 'bold', color:'black'}}>
                      <Icon name="list-ul" size={25} color={'black'} style={styles.inputIcon}/> {this.state.item.name}
                      </Text>
                    </View>
                    <View style= {styles.container12}>
                      <View style= {styles.container121}>
                        {this.state.item.fuelDetails.map((fuel) => {
                          return(<View key={fuel._id}><Text style={styles.container1Text}>{fuel.fuel}</Text></View>)
                        })}
                      </View>
                      <View style= {styles.container122}>
                      {this.state.item.fuelDetails.map((fuel) => {
                        return(<View key={fuel._id}><Text style={styles.container1Text2}>{fuel.quantity} Litres</Text></View>)
                        })}
                      </View>
                      <View style= {styles.container123}>
                      {this.state.item.fuelDetails.map((fuel) => {
                        return(
                          <View key={fuel._id}><Text style={styles.container1Text2}>{fuel.price} per Litre</Text></View>
                        ) 
                        })}
                      </View>
                    </View>    
                </View>

                <View style={styles.container2}>
                  <Icon name="oil-can" size={20} color={'grey'} style={styles.inputIcon}/>
                  <Picker
                    selectedValue={this.state.fuelType}
                    style={styles.inputbox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onValueChange={(itemValue) =>
                      this.setState({fuelType: itemValue})
                    }>
                    {this.state.item.fuelDetails.map((fuel)=>{
                    return(
                      <Picker.Item key={fuel._id} label={fuel.fuel} value={fuel.fuel}/>
                    )})}
                  </Picker>
                </View>

                <View style={styles.container2}>

                  <Icon name="water" size={20} color={'grey'} style={styles.inputIcon}/>
                  <TextInput style={styles.inputbox} 
                              underlineColorAndroid="rgba(0,0,0,0)"
                              placeholder="Quantity(litres)"
                              placeholderTextColor="grey"
                              keyboardType= 'decimal-pad'
                              onChangeText={this.get_amount}
                  />
                </View>

                <View style={styles.container2}>

                  <Icon name="rupee-sign" size={20} color={'grey'} style={styles.inputIcon}/>
                  <TextInput style={styles.inputbox}
                              editable= {false} 
                              selectTextOnFocus={false} 
                              underlineColorAndroid="rgba(0,0,0,0)"
                              placeholder={this.state.amount}
                              placeholderTextColor="grey"
                  />
                </View>


                <View style={styles.container3}>
                  <TouchableOpacity style={styles.button2} onPress={this.buyFuel.bind(this)}>
                      <Text style={styles.buttonText2}>Buy</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>   
            </View> 
            </ScrollView> 
          // </LinearGradient>   
        );
    }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  container1: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    height: 250,
    width: 370,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#d94b05'
  },

  container11: {
    width: 370,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  container12: {
    width: 370,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container121: {
    justifyContent: 'flex-start',
    marginLeft: 20,
  },

  container122: {
    justifyContent: 'flex-start'
  },

  container123: {
    justifyContent: 'flex-start',
    marginRight: 20
  },

  container1Text: {
    fontWeight: 'bold', 
    fontSize: 20,
    paddingBottom: 20,
    color: 'rgba(0,0,0,0.7)'
  },

  container1Text2: {
    color: 'grey', 
    fontSize: 18,
    paddingBottom: 20
  },

  container2: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth:3,
    borderColor: 'rgba(255,255,255,1)',
    borderBottomColor: '#f07400'
  }, 

  inputbox:{
    height: 50,  
    width: 300, 
    fontSize: 20,
    paddingLeft: 13,
    color: 'grey'
  },

  container3:{
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  button2:{
    height: 50,  
    width: 250,
    borderRadius: 10, 
    backgroundColor:'rgba(217, 75, 5, 0.9)',
    alignItems: 'center',
    justifyContent:'center'
  },
  
  buttonText2:{
    fontSize: 20,
    fontWeight: "bold",
    color: 'rgba(255,255,255,1)'
  }

});
