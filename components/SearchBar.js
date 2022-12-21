import { View, TextInput, StyleSheet, Keyboard } from 'react-native'
import Search from "react-native-vector-icons/Ionicons"
import React from 'react'

const SearchBar = () => {
  return (
    <View style={{marginTop: 25}}>
      <View style={styles.searchBar}>
        <Search name="search-outline" size={25} color={"#545152"} style={{marginLeft: 110, position: "absolute"}}/>
        <TextInput placeholder='Search' placeholderTextColor={"#545152"} style={{fontSize: 14, width: "90%", position: "absolute", marginLeft: 140}}/>
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBar:{
    height: 60,
    width: 310,
    backgroundColor: "#353233",
    borderRadius: 15,
    justifyContent: "center"
  }
})