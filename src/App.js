import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from "react-redux";
import { Loading } from "./component";
import store from "./redux/store";

const MainApp = () => {
  const [loading, setLoading] = useState(false);
  const stateGlobal = useSelector(state => state);
  console.log('state global: ', stateGlobal);
  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading/>}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({});
