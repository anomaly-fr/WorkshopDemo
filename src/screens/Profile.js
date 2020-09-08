import React from 'react';
import {Text,View,StyleSheet, Platform, Linking} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';


const Profile = (props) => {
 
    const thisPerson = props.route.params.whosProfile;
    const number = props.route.params.number

    const makeACall = () => {
        let phNumber = '';
        if(Platform.OS == 'ios'){
                phNumber = `telprompt:${number}` // telprompt:9535311386
        }
        else if(Platform.OS == 'android'){
            phNumber = `tel:${number}`
        }

        Linking.openURL(phNumber);
    }

    return(<View style={styles.container}>
        <Text style={styles.heading}>{thisPerson}</Text>

        <Text style={styles.heading}>{number}</Text>
        <TouchableOpacity onPress = {makeACall}>
        <Feather name="phone-call" size={40} color="green" style={{...styles.heading,marginTop:'10%'}}/>
        </TouchableOpacity>
  </View>)

};


const styles = StyleSheet.create({
    container: {
        margin: '2%'
    },
    heading: {
        textAlign: 'center',
        fontSize: 18,
       
    }
});


export default Profile;