import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Input, Button, Gap } from '../../component';
import { colors } from '../../utils'

const Register = () => {
  return (
    <View style={styles.page}>
      <Header/>
      <View style={styles.content}>
        <Input label='Full Name'/>
        <Gap height={24}/>
        <Input label='Pekerjaan'/>
        <Gap height={24}/>
        <Input label='Email'/>
        <Gap height={24}/>
        <Input label='Password'/>
        <Gap height={40}/>
        <Button title="Continue"/>
      </View>
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  content: {
    padding: 40,
    paddingTop: 0
  }
});
