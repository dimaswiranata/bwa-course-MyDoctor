import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  )
}

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: '#7DB797',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: align
  })
});
