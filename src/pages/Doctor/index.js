import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { HomeProfile, DoctorCategory, RatedDoctor, NewsItem, Gap } from '../../component';
import { colors, fonts, getData, showError } from '../../utils';
import { JSONCategoryDoctor, DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets';
import { Fire } from "../../config";

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getNews();
    getCategoryDoctor();
    getTopRatedDoctors();
  }, []);

  const getTopRatedDoctors = () => {
    Fire
      .database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        console.log('top rated doctor: ', res.val());
        if(res.val()){
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key]
            });
          });
          console.log('data hasil parse: ', data);
          setDoctors(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getNews = () => {
    Fire
      .database()
      .ref('news/')
      .once('value')
      .then(res => {
        if(res.val()){
          const data = res.val();
          const filterData = data.filter(el => el != null);
          setNews(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getCategoryDoctor = () => {
    Fire
      .database()
      .ref('category_doctor/')
      .once('value')
      .then(res => {
        if(res.val()){
          const data = res.val();
          const filterData = data.filter(el => el != null);
          setCategoryDoctor(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30}/>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')}/>
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.category}>
                <Gap width={32}/>
                {
                  categoryDoctor.map(item => {
                    return (
                      <DoctorCategory 
                        category={item.category} 
                        key={`category-${item.id}`}
                        onPress={ () => navigation.navigate('ChooseDoctor', item) }
                      />
                    );
                  })
                }
                <Gap width={22}/>
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctor</Text>
            {
              doctors.map(doctor => {
                return (
                  <RatedDoctor 
                    key={doctor.id}
                    name={doctor.data.fullName} 
                    desc={doctor.data.profession} 
                    avatar={{uri: doctor.data.photo}} 
                    onPress={() => navigation.navigate('DoctorProfile', doctor)}
                  />
                );
              })
            }
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
          <Gap height={30}/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  wrapperSection:{
    paddingHorizontal: 16
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209
  },
  category: {
    flexDirection: 'row'
  },
  wrapperSection: {
    paddingHorizontal: 16
  },
  wrapperScroll: {
    marginHorizontal: -16
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16
  }
})
