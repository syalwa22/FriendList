import React from 'react';
import { View, Text } from 'react-native';

const FriendDetail = ({ route }) => {
  const { name, gender, hobby, zodiac } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Name: {name}</Text>
      <Text>Gender: {gender}</Text>
      <Text>Hobby: {hobby}</Text>
      <Text>Zodiac: {zodiac}</Text>
    </View>
  );
};

export default FriendDetail;
