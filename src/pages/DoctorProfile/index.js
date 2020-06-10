import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../component';
import { colors } from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Dokter Profile" onPress={() => navigation.goBack()}/>
      <Profile 
        name={dataDoctor.data.fullName} 
        desc={dataDoctor.data.profession} 
        photo={{uri: dataDoctor.data.photo}}
      />
      <Gap height={10}/>
      <ProfileItem 
        label="Alumnus" 
        value={dataDoctor.data.university}
      />
      <ProfileItem 
        label="Tempat Praktik" 
        value={dataDoctor.data.hospital_address}
      />
      <ProfileItem 
        label="No. STR" 
        value={dataDoctor.data.str_number}
      />
      <View style={styles.action}>
        <Button 
          title="Start Consultation" 
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  )
}

export default DoctorProfile

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23
  }
})
