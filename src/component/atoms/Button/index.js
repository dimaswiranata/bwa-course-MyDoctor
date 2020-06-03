import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';

const Button = ({ type, title, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container(type)}
      onPress={onPress}
    >
      <Text style={styles.text(type)}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ?  colors.button.secondary.background : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10
  }),
  text: (type) => ({
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text
  })
});
