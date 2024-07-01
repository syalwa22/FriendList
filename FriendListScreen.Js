import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const DATA = [
  { id: '1', name: 'Bunga', gender: 'Female', hobby: 'Reading', zodiac: 'Pisces' },
  { id: '2', name: 'Samudra', gender: 'Male', hobby: 'Gaming', zodiac: 'Virgo' },
  { id: '3', name: 'Chandra', gender: 'Male', hobby: 'Swimming', zodiac: 'Scorpio' },
  { id: '4', name: 'Lingga', gender: 'Female', hobby: 'Cooking', zodiac: 'Taurus' },
  { id: '5', name: 'Queen', gender: 'Female', hobby: 'Swimming', zodiac: 'Aquarius' },
  
];

const FriendListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Text>{item.name}</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate('FriendDetail', {
          name: item.name,
          gender: item.gender,
          hobby: item.hobby,
          zodiac: item.zodiac,
        })}
      />
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FriendListScreen;
