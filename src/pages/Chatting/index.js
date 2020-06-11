import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, ChatItem, InputChat } from '../../component';
import { fonts, colors, getData, showError, getChatTime, setDateChat } from '../../utils';
import { Fire } from "../../config";

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({})

  useEffect(() => {
    getData('user')
      .then(res => {
        console.log('user login: ', res)
        setUser(res);
      });
  }, [])

  const chatSend = () => {
    const today = new Date();

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent
    }

    const chatID = `${user.uid}_${dataDoctor.data.uid};`
    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;

    console.log('data untuk dikirim: ', data);
    console.log('url firebase: ', urlFirebase );
    // kirim ke firebase
    Fire
      .database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header 
        type="dark-profile" 
        title={dataDoctor.data.fullName} 
        desc={dataDoctor.data.category}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()} 
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
          <ChatItem isMe/>
          <ChatItem/>
          <ChatItem isMe/>
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  )
}

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  content: {
    flex: 1
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center'
  }
});
