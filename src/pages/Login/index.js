import React, { useState } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { ILLogo } from '../../assets';
import { Input, Link, Button, Gap, Loading } from '../../component';
import { colors, fonts, useForm, showError, storeData } from '../../utils';
import { Fire } from '../../config';
import { useDispatch } from "react-redux";

const Login = ({navigation}) => {

  const [form, setForm] = useForm({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const Login = () => {
    console.log('form: ', form);
    dispatch({type: 'SET_LOADING', value: true});
    Fire
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('success: ', res);
        Fire
          .database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user: ', resDB.val());
            if(resDB.val()){
              storeData('user', resDB.val());
              dispatch({type: 'SET_LOADING', value: false});
              navigation.replace('MainApp');
              setForm('reset');
            }
          });
      })
      .catch(err => {
        console.log('error: ', err);
        showError(err.message);
        dispatch({type: 'SET_LOADING', value: false});
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40}/>
          <ILLogo/>
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input 
            label='Email Address'
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24}/>
          <Input 
            label='Password'
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10}/>
          <Link title="Forgot My Password" size={12}/>
          <Gap height={40}/>
          <Button 
            title='Sign In' 
            onPress={Login}
          />
          <Gap height={30}/>
          <Link 
            title="Create New Account" 
            size={16} align='center'
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
    </>
  )
}

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600], 
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153
  }
});
