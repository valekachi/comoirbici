
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);

  const onAddEvent = () => {
    if (text.length === 0) return 
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ])
    setText('');
  }

console.warn('events', events);

const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
  <Text style={styles.item}>{item.value}</Text>
</View>
)
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Colocar evento' 
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
        />
        <Button title='+' 
        color= "#569DAA"
        onPress={onAddEvent} />
      </View>
      <View style={styles.listContainer}>
      <FlatList 
          renderItem={renderItem}
          data={events}
          keyExtractor={(item) => item.id}
        />
    </View>
  </View>
  );
}

