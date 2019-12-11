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

                <View style={styles.container3}>
                  <Icon name="user-circle" size={120} color={'grey'} style={styles.inputIcon}/>
                </View>

                <View style={styles.container4}>
                  <Text style={styles.buttonText2}>USER NAME</Text>
                  <Text style={{color: 'grey', fontSize: 17}}>usermail@gmail.com</Text>
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

                <TouchableOpacity style={styles.container6}>
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
