import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

 const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image 
            // keeps showing an error here when I press a single result ResultsShowScreen
            // navigation not working here
                source={{ uri: result.image_url }} 
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text> {result.rating} Stars, {result.review_count} Reviews </Text>
        </View>
    )
}

const styles = StyleSheet.creat=({
    container: {
        marginLeft: 15
    },

   imageStyle: {
       width: 250,
       height: 120,
       borderRadius: 4,
       marginBottom: 5
   },
   nameStyle: {
       fontWeight: 'bold',
   } 
});

export default ResultsDetail;