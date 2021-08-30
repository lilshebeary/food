import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

 const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: result.image_url }} 
                style={styles.imageStyle}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.ratingStyle}> {result.rating} Stars, {result.review_count} Reviews </Text>
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
   }, 
//    ratingStyle: {
//        fontSize: 12
//    } 
});

export default ResultsDetail;