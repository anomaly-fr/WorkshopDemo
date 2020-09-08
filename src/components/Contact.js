import React from 'react';
import {Text,View,StyleSheet,FlatList, Dimensions} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Contact = (props) => {
  //  console.log(props)
    return(<TouchableOpacity onPress = {props.goTo} 
        >
    <View style={styles.container}>
   
    <MaterialIcons name="account-circle" size={50} color= {props.colour} style={styles.image} />
    <Text style={styles.name}>{props.personName}</Text>
    </View>
    </TouchableOpacity>)
    
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        margin: '1%',
        padding :'1%',
        height: Dimensions.get('window').height/9,
        flexDirection:'row',
        borderRadius: 10
        
     
        
    },
    name: {
        fontWeight : 'bold',
        alignSelf: 'center',
        marginStart: '5%'
    },
    image: {
       alignSelf: 'center'
    }

});


export default Contact;