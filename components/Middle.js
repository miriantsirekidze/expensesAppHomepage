import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Slider from "react-native-vector-icons/Feather"
import React from 'react'

const Middle = () => {
  return (
    <View style={{flexDirection: "row"}}>
      <View>
        <Text style={{marginTop: 100, color: "white", fontSize: 36, fontWeight: "bold"}}>Hello Mirian</Text>
        <Text style={{marginLeft: 3, color: "white", fontSize: 16, fontWeight: "normal"}}>Welcome Back !</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Slider name='sliders' size={25} color={"#b9b9b9"}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Middle

const styles = StyleSheet.create({
  container:{
    width: 45,
    height: 45,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 115,
    marginLeft: 267
  }
})