import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = ({ children, style }) => {
  return (
    <View style={{ ...styles.box, ...style }}>
      {
        children
      }
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#0005",
    width: "95%",
    alignSelf: "center",
    borderRadius: 10
  }
})