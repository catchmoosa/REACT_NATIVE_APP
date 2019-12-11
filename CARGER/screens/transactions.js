import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

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

    handleSubmit1(event){
      this.setState({tab: true})  
      event.preventDefault();
    }

    handleSubmit2(event){
        this.setState({tab: false})  
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
                    <TouchableOpacity style={styles.container2button1} onPress={this.handleSubmit1}>
                      <Text style={styles.buttonText2}>Fuel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container2button1} onPress={this.handleSubmit2}>
                      <Text style={styles.buttonText2}>E-Wallet</Text>
                    </TouchableOpacity>
                </View>
                {this.state.tab ? <Home21/>:<Home22/>}
            </View> 
            </ScrollView> 
          // </LinearGradient>   
        );
    }
}

class Home21 extends Component{

    render(){
        return(
                <View>
                    <View style={styles.container5}>
                        <View style={{flex: 1}}>
                        <Text style={styles.container5button}>Fuel Transactions</Text>
                        </View>  
                    </View>

                    <View style={styles.container6}>
                        <View  style={styles.container62}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Ordered at Outlet Name</Text>
                        <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>4 litres</Text>
                        </View>
                        <View  style={styles.container63}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}><Icon name="rupee-sign" size={15} color={'black'}/> 20</Text>
                        <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>Status</Text>
                        </View> 
                    </View>  
                </View> 
        )   
    }
}

class Home22 extends Component{

    render(){
        return(
                <View>
                    <View style={styles.container5}>
                        <View style={{flex: 1}}>
                        <Text style={styles.container5button}>E-Wallet Transactions</Text>
                        </View>  
                    </View>

                    <View style={styles.container6}>
                        <View  style={styles.container62}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Type</Text>
                        <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>Created at</Text>
                        </View>
                        <View  style={styles.container63}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}><Icon name="rupee-sign" size={15} color={'black'}/> 20</Text>
                        <Text style={{color: 'rgb(112,128,144)', marginTop: 5, fontSize: 16}}>Status</Text>
                        </View> 
                    </View>  
                </View> 
        )   
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
