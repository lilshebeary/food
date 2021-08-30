import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlightBase } from 'react-native';
import ResultsDetail from './ResultsDetail';

 const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />;
                }}
            />
        </View>
    )
}

const styles = StyleSheet.creat=({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;
