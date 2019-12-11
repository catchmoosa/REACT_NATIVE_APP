import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
export default class Outlets extends Component{

    constructor(props){
      super(props);
      this.state = {
        data: [],
        isLoaded:false,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
      AsyncStorage.getItem('userToken', (err,result)=>{
          console.log("token = ",result)
          var config = {
              headers: {'Authorization':result}
          };
          console.log(config)
          axios.get('http://10.0.33.252:8008/user/gmap',{lat:18,lng:73},{headers: {'Authorization':result}}).then((response) => {
              console.log("Data is ", response.data)
              this.setState({data: response,isLoaded: true})
            }).catch((error) => {
              console.log(error)
            });
      });
      
    }



    handleSubmit(event){
      this.state.array.push('25');
      console.log(this.state.array);
      this.props.navigation.navigate('Buy_Fuel')
      event.preventDefault();
    }

    render(){
        return (
          <ScrollView style={{backgroundColor: 'rgba(230,230,230,1)'}}>
            <View style={styles.container}>
                <View style={styles.container2}>
                      <View style={styles.container21}>
                          <Text style={styles.container21Head}>Pump Name</Text>
                          <Icon name="gas-pump" size={80} color={'rgba(217, 75, 5, 0.9)'}/>
                      </View>
                      <View style={styles.container22}>
                          <Text style={styles.container22InfoHead}>Location</Text>
                          <Text style={styles.container22Info}>Shop number 3, Sricity.</Text>
                          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                            <Text style={styles.buttonText}>Buy</Text>
                          </TouchableOpacity>
                      </View>
                </View>
            </View> 
          </ScrollView>   
        );
    }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'rgba(255,255,255,1)',
    height: 170,
    width: 370,
    marginTop: 30,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    borderRadius: 8
  },

  container21:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  container21Head: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },

  container22:{
    alignItems:'center',
    justifyContent:'space-evenly',
    width: 200,
    height: 150
  }, 

  container22InfoHead: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  
  container22Info: {
    fontSize: 15,
    color: 'rgb(120,120,120)',
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10
  },

  button:{
    height: 30,  
    width: 100,
    borderRadius: 5, 
    backgroundColor:'rgba(217, 75, 5, 0.9)',
    alignItems: 'center',
    justifyContent:'center',
  
  },

  buttonText:{
    fontSize: 15,
    fontWeight: "bold",
    color: 'rgba(255,255,255,1)'
  }

});

