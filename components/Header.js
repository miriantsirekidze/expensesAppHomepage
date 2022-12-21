import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{flexDirection: "row"}}>
      <TouchableOpacity style={{marginTop: 21}} hitSlop={{bottom: 15, left: 15, right: 15, top: 15}}>
        <View style={styles.firstBar}/>
        <View style={styles.secondBar}/>
        <View style={styles.thirdBar}/>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Image source={require("../img/cat.jpg")} style={styles.image}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  firstBar:{
    width: 3,
    height: 18,
    borderRadius: 5,
    backgroundColor: "#b9b9b9"
  },
  secondBar:{
    width: 2.5,
    height: 13.7,
    borderRadius: 5,
    backgroundColor: "#b9b9b9",
    position: "absolute",
    marginLeft: 4.3,
    marginTop: 1.9
  },
  thirdBar:{
    width: 2.4,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#b9b9b9",
    position: "absolute",
    marginLeft: 7.9,
    marginTop: 4.9
  },
  image:{
    width: 35, 
    height: 35,
    borderRadius: 10,
  },
  imageContainer:{
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#b9b9b9",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 11,
    marginLeft: 265,
  }
})