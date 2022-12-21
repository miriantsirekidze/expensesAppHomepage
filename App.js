import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from './components/Header'
import { StatusBar } from 'expo-status-bar'
import Middle from './components/Middle'
import SearchBar from './components/SearchBar'
import Info from './components/Info'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#2a2a2a"}}>
      <StatusBar style='light'/>
      <View style={{marginLeft: 25, marginRight: 25}}>
        <Header/>
        <Middle/>
        <SearchBar/>
        <Info/>
      </View>
    </SafeAreaView>
  )
}

export default App