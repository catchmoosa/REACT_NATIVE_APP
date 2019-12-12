import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Picker, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

export default class Home2 extends Component{

    constructor(props){
      super(props);
      this.state = {
        star: '1',
        color2: 'rgb(210,210,210)',
        color3: 'rgb(210,210,210)',
        color4: 'rgb(210,210,210)',
        color5: 'rgb(210,210,210)',
        text:'',
      }
    }

    submitFeedback = async()=> {

      AsyncStorage.getItem('userToken', (err,result)=>{
        console.log("token = ",result)
        var config = {
            headers: {'Authorization':result}
        };
        console.log(config)
        
        axios.post('http://192.168.43.177:8008/user/review',{
          rating:this.state.star,
          text:this.state.text},
          {headers: {'Authorization':result}}).then((response) => {
            console.log("Data is ", response.data)
            this.setState({data: response,isLoaded: true})
            this.props.navigation.navigate('afterlogin')
          }).catch((error) => {
            console.log(error)
          });
    });

    }

    starColor = (itemValue) => {
        if(itemValue=== '1'){
            this.setState({color2: 'rgb(210,210,210)'})
            this.setState({color3: 'rgb(210,210,210)'})
            this.setState({color4: 'rgb(210,210,210)'})
            this.setState({color5: 'rgb(210,210,210)'})
            this.setState({star:itemValue})
        }

        else if(itemValue=== '2'){
            this.setState({color2: '#d94b05'})
            this.setState({color3: 'rgb(210,210,210)'})
            this.setState({color4: 'rgb(210,210,210)'})
            this.setState({color5: 'rgb(210,210,210)'})
            this.setState({star:itemValue})
        }
        else if(itemValue=== '3'){
            this.setState({color2: '#d94b05'})
            this.setState({color3: '#d94b05'})
            this.setState({color4: 'rgb(210,210,210)'})
            this.setState({color5: 'rgb(210,210,210)'})  
            this.setState({star:itemValue})         
        }
        else if(itemValue=== '4'){
            this.setState({color2: '#d94b05'})
            this.setState({color3: '#d94b05'})
            this.setState({color4: '#d94b05'})
            this.setState({color5: 'rgb(210,210,210)'})
            this.setState({star:itemValue})
        }
        else if(itemValue=== '5'){
            this.setState({color2: '#d94b05'})
            this.setState({color3: '#d94b05'})
            this.setState({color4: '#d94b05'})
            this.setState({color5: '#d94b05'})
            this.setState({star:itemValue})
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

                     <View style={styles.container11}>
                        <Icon name="star" size={40} color={'#d94b05'} style={styles.inputIcon}/>
                        <Icon name="star" size={40} color={this.state.color2} style={styles.inputIcon}/>
                        <Icon name="star" size={40} color={this.state.color3} style={styles.inputIcon}/>
                        <Icon name="star" size={40} color={this.state.color4} style={styles.inputIcon}/>
                        <Icon name="star" size={40} color={this.state.color5} style={styles.inputIcon}/>
                    </View>    

                    <View style={styles.container12}>
                        <Picker
                            selectedValue={this.state.star}
                            style={styles.inputbox12}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            onValueChange={this.starColor}
                            >
                            <Picker.Item label="rate" value=""/>
                            <Picker.Item label="1" value="1"/>
                            <Picker.Item label="2" value="2"/>
                            <Picker.Item label="3" value="3"/>
                            <Picker.Item label="4" value="4"/>
                            <Picker.Item label="5" value="5"/>
                        </Picker>
                    </View>

                </View>

                <View style={styles.container2}>

                  <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Description :</Text>
                  <TextInput style={styles.inputbox} 
                              underlineColorAndroid="rgba(0,0,0,0)"
                              multiline={true}
                              numberOfLines= {4}
                              keyboardType= 'default'
                              onChangeText={(text)=> this.setState({text:text})}
                              textAlignVertical= "top"
                  />
                </View>

                <View style={styles.container3}>
                  <TouchableOpacity style={styles.button2} onPress={this.submitFeedback.bind(this)}>
                      <Text style={styles.buttonText2}>Post Review</Text>
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
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    height: 160,
    width: 370,
   marginTop: 50 
  },

  container11: {
    // backgroundColor: 'red',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 370,
  },

  container12: {  
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    borderWidth: 1,
    borderColor: '#f07400',
    borderRadius: 6,
  },

  inputbox12: {
    width: 120        
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
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: 370,
  }, 

  inputbox:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',  
    backgroundColor: 'rgb(240,240,240)',
    height: 220,  
    width: 340, 
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 6,
    padding: 10,
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
