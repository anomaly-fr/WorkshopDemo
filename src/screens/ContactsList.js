import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import Contact from '../components/Contact';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ContactsList = (props) => {
 //   console.log(props)
    const contacts = [{
        name: 'Person 1',
        number: '9535311386',
        colour: 'red'
        
    },
    {
        name: 'Person 2',
       number: '8548080255',
        colour: 'green'
    },
    {
        name: 'Person 3',
       number: '9886652781',
        colour: 'blue'
    },{
        name: 'Person 4',
       number: '13033333',
        colour: 'purple'
    }];

   
    return(<View style={styles.container}>
   
    <Text style={styles.heading}>List of contacts</Text>
  
      

        <FlatList data={contacts}
        renderItem = {({item}) => {
                // console.log(item)

                return(
                    <Contact personName = {item.name} colour = {item.colour} goTo = { () => {
                        props.navigation.navigate('ContactProfile',
                        {
                            whosProfile : item.name,
                            number: item.number

                        })
                      //  console.log('go to ' + item.name)
                    }}  />
                )
        }} 
        keyExtractor = {(item) => {
            return item.name
        //   console.log(item.name)

        }}

        />
    </View>)

};


const styles = StyleSheet.create({
   container: {
       margin: '2%'
   },
   heading: {
       textAlign: 'center',
       fontSize: 18,
      
   },
   oneItem: {
    //    backgroundColor: 'gray',
       margin: '1%'
   },
   image: {
       marginStart: '5%'
   }

});


export default ContactsList;