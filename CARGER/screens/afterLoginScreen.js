import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Home2 extends Component{

    constructor(props){
      super(props);
      this.state = {
        array: ['Add Money'],
        name: 'Add Money'
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
      this.state.array.push('25');
      console.log(this.state.array);
      event.preventDefault();
    }

    render(){
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
                          <Text>123.45</Text>
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
  }

});
