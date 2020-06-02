import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <ILLogo/>
      <Text style={styles.title}>
        My Doctor
      </Text>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 20
  }
});
