import { View, Text, StyleSheet } from 'react-native'
import Sale from "react-native-vector-icons/MaterialCommunityIcons"
import Person from "react-native-vector-icons/Ionicons"
import Layout from "react-native-vector-icons/Feather"
import Chart from "react-native-vector-icons/Feather"
import React from 'react'

const Info = () => {
  return (
    <View style={{marginTop: 60}}>
      <View style={styles.sale}>
        <Sale name="shopping-outline" size={25} color={"black"} style={styles.icon}/>
        <Text style={{fontSize: 25, fontWeight: "bold", marginTop: 5, marginLeft: 45}}>230k</Text>
        <Text style={{fontWeight: "bold", color: "gray", marginLeft: 55, marginTop: 5}}>Sales</Text>
      </View>
      <View style={styles.customers}>
        <Person name="person-circle-outline" size={25} color={"black"} style={styles.icon}/>
        <Text style={{fontSize: 25, fontWeight: "bold", marginTop: 5, marginLeft: 33}}>8.549k</Text>
        <Text style={{fontWeight: "bold", color: "gray", marginLeft: 38, marginTop: 5}}>Customers</Text>
      </View>
      <View style={styles.products}>
        <Layout name="layout" size={25} color={"black"} style={styles.icon}/>
        <Text style={{fontSize: 25, fontWeight: "bold", marginTop: 5, marginLeft: 30}}>1.423k</Text>
        <Text style={{fontWeight: "bold", color: "gray", marginLeft: 44, marginTop: 5}}>Products</Text>
      </View>
      <View style={styles.revenue}>
        <Chart name="pie-chart" size={25} color={"black"} style={styles.icon}/>
        <Text style={{fontSize: 25, fontWeight: "bold", marginTop: 5, marginLeft: 35}}>$9745</Text>
        <Text style={{fontWeight: "bold", color: "gray", marginLeft: 47, marginTop: 5}}>Revenue</Text>
      </View>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
  sale:{
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#c0dedd",
    position: "absolute"
  },
  customers:{
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#e6dff1",
    position: "absolute",
    marginLeft: 160
  },
  products:{
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#f2eee9",
    position: "absolute",
    marginTop: 170
  },
  revenue:{
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#f1dfdd",
    position: "absolute",
    marginLeft: 160,
    marginTop: 170
  },
  icon:{
    marginTop: 25,
    marginLeft: 60
  }
})