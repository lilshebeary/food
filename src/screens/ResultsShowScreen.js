import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

 const ResultsShowScreen = ({ result }) => {
    return (
        <View style={styles.container}>
            
            <Text> {result.name} </Text>
        </View>
    )
}

const styles = StyleSheet.creat=({
    container: {
        marginLeft: 15
    },

   nameStyle: {
       fontWeight: 'bold',
   }, 

});

export default ResultsShowScreen;