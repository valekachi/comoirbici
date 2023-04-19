
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Colocar evento' style={styles.input} />
        <Button title='+' color= "#569DAA" />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Camino menos transitado</Text>
        </View>
        <View style={styles.itemContainer}>
        <Text style={styles.item}>Ir por ciclovía</Text>
        </View>
        <View style={styles.itemContainer}>
        <Text style={styles.item}>Camino mas corto</Text>
        </View>
      </View>
    </View>
  );
}

