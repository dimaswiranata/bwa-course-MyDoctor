import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListDoctor } from '../../component';
import { colors, fonts } from '../../utils';
import { DummyDoctor1, DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets';


const Messages = () => {
  const [ doctors, setDoctors ] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik bu, terima kasih banyak atas wakt...'
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Nairobi Putri Hayza',
      desc: 'Baik bu, terima kasih banyak atas wakt...'
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'Jhon McParker Steve',
      desc: 'Baik bu, terima kasih banyak atas wakt...'
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {
          doctors.map(doctor => {
            return (
              <ListDoctor
                key={doctor.id}
                profile={doctor.profile}
                name={doctor.name}
                desc={doctor.desc}
              />
            );
          })
        }
      </View>
    </View>
  )
}

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})
