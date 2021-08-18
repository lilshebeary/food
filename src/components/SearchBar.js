import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

 const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#DEDEDE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row' 
    },

    inputStyle: {
        flex: 1,
        fontSize: 25
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;