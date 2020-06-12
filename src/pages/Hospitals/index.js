import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ILHospitalBG, DummyHospital1, DummyHospital2, DummyHospital3 } from '../../assets';
import { fonts, colors, showError } from '../../utils';
import { ListHospital } from '../../component';
import { Fire } from "../../config";

const Hospitals = () => {
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    getHospital();
  }, []);

  const getHospital = () => {
    Fire
      .database()
      .ref('hospital/')
      .once('value')
      .then(res => {
        if(res.val()){
          const data = res.val();
          const filterData = data.filter(el => el != null);
          setHospital(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {
          hospital.map(item => {
            return (
              <ListHospital 
                type={item.type}
                key={item.id}
                name={item.name} 
                address={item.address}
                pic={item.photo}
              />
            );
          })
        }
      </View>
    </View>
  )
}

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  background: {
    height: 240,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14
  }
})
