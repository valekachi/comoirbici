import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20
    
      },
      inputContainer: {
        marginTop: 55,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },
    input: {
        width: '75%',
        borderBottomColor: '#569DAA',
        borderBottomWidth: 0.5
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 20,
    },
    itemContainer: {
        height: 80,
        justifyContent: 'center',
        backgroundColor: '#87CBB9',
        borderRadius: 10,
        marginVertical: 5,
    },
    item: {
        marginHorizontal: 10,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalDetailContainer: {
        paddingVertical: 20,
    },
    modalDetailMessage: {
        fontSize: 14,
        color: '#828282',
    },
    selectedEvent: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});