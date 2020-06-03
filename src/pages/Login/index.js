import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ILLogo } from '../../assets';
import { Input, Link, Button, Gap } from '../../component';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo/>
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label='Email Address'/>
      <Gap height={24}/>
      <Input label='Password'/>
      <Gap height={10}/>
      <Link title="Forgot My Password" size={12}/>
      <Gap height={40}/>
      <Button title='Sign In'/>
      <Gap height={30}/>
      <Link title="Create New Account" size={16} align='center'/>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold', 
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153
  }
});
