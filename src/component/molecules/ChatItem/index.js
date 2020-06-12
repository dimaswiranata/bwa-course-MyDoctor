import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isMe, text, date, photo}) => {
  if (isMe){
    return <IsMe date={date} text={text}/>
  }
  return <Other date={date} text={text} photo={photo}/>;
}

export default ChatItem;

const styles = StyleSheet.create({});
