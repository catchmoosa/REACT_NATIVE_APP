import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Picker, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'


export default class Home2 extends Component{

    constructor(props){
      super(props);
      this.state = {
        array: ['Add Money'],
        name: 'Add Money',
        fuelType: '',
        amount: '0',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
      this.state.array.push('25');
      console.log(this.state.array);
      event.preventDefault();
    }

    get_amount=(text)=>{
      if(text == ''){
        this.setState({amount:'0'})
      }

      else{
        x= parseFloat(text);
        tAmount= x*80
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
                      <Icon name="list-ul" size={25} color={'black'} style={styles.inputIcon}/> Outlet Name Fuel Details
                      </Text>
                    </View>
                    <View style= {styles.container12}>
                      <View style= {styles.container121}>
                        <Text style={styles.container1Text}>Petrol</Text>
                        <Text style={styles.container1Text}>Diesel</Text>
                        <Text style={styles.container1Text}>CNG</Text>
                      </View>
                      <View style= {styles.container122}>
                        <Text style={styles.container1Text2}>1000 litres</Text>
                        <Text style={styles.container1Text2}>1500 litres</Text>
                        <Text style={styles.container1Text2}>2000 gallons</Text>
                      </View>
                      <View style= {styles.container123}>
                        <Text style={styles.container1Text2}>80 per litre</Text>
                        <Text style={styles.container1Text2}>70 per litre</Text>
                        <Text style={styles.container1Text2}>50 per gallon</Text>
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
                    <Picker.Item label="Petrol" value="petrol"/>
                    <Picker.Item label="Diesel" value="diesel"/>
                    <Picker.Item label="CNG" value='cng'/>
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
                  <TouchableOpacity style={styles.button2} onPress={this.handleSubmit}>
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
