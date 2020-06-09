import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Profile, List, Gap } from '../../component';
import { getData } from "../../utils";
import { ILNullPhoto } from '../../assets';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: ''
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, [])

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()}/>
      <Gap height={10}/>
      {profile.fullName.length > 0 && (
        <Profile 
          photo={profile.photo}
          name={profile.fullName} 
          desc={profile.profession}
        />
      )}
      <Gap height={14}/>
      <List 
        name="Edit" 
        desc="Last Update Yesterday" 
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List 
        name="Language" 
        desc="Last Update Yesterday" 
        type="next"
        icon="language"
      />
      <List 
        name="Give Us Rate" 
        desc="Last Update Yesterday" 
        type="next"
        icon="rate"
      />
      <List 
        name="Help Center" 
        desc="Last Update Yesterday" 
        type="next"
        icon="help"
      />
    </View>
  )
}

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  }
});
