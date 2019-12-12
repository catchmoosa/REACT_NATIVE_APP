import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Outlets extends Component{

    constructor(props){
      super(props);
      this.state = {
        data: [],
        isLoaded:false,
        location: null,
        errorMessage: null,
      }
    }
    
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
  
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    };

    async componentDidMount(){
      await this._getLocationAsync();
      console.log("Location = ",this.state.location)
      AsyncStorage.getItem('userToken', (err,result)=>{
          console.log("token = ",result)
          var config = {
              headers: {'Authorization':result}
          };
          console.log(config)
          axios.post('http://192.168.43.177:8008/user/gmap',{lat:this.state.location.coords.latitude,lng:this.state.location.coords.longitude},{headers: {'Authorization':result}}).then((response) => {
              console.log("Pump Data is ", response.data)
              this.setState({data: response,isLoaded: true})
            }).catch((error) => {
              console.log("FAILED PUMPS")
              console.log(error)
            });
      });
      
    }

    render(){
        if(this.state.isLoaded){
          return (
            <ScrollView style={{backgroundColor: 'rgba(230,230,230,1)'}}>
              <View style={styles.container}>
                {this.state.data.data.map((item)=> {
                  return(
                     <View style={styles.container2} key={item.id}>
                        <View style={styles.container21}>
                          <Text style={styles.container21Head}>{item.name}</Text>
                            <Icon name="gas-pump" size={80} color={'rgba(217, 75, 5, 0.9)'}/>
                        </View>
                        <View style={styles.container22}>
                            <Text style={styles.container22InfoHead}>{item.address}{item.distance}</Text>
                            <Text style={styles.container22Info}>Waiting Time: {item.estimatedTime}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Buy_Fuel',{item:item})}>
                              <Text style={styles.buttonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                  </View> 
                  )
                })}
                  
              </View> 
            </ScrollView>   
          );
        }else{
          return (
            <ScrollView style={{backgroundColor: 'rgba(230,230,230,1)'}}>
              <View style={styles.container}>
                  <View style={styles.container2}>
                        <View style={styles.container21}>
                            <Text style={styles.container21Head}>Loading</Text>
                            <Icon name="gas-pump" size={80} color={'rgba(217, 75, 5, 0.9)'}/>
                        </View>
                        <View style={styles.container22}>
                            <Text style={styles.container22InfoHead}>Location</Text>
                            <Text style={styles.container22Info}>Address</Text>
                            <TouchableOpacity style={styles.button} >
                              <Text style={styles.buttonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                  </View>
              </View> 
            </ScrollView>   
          );
        }
        
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
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 8
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

