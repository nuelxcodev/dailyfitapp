import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DocumentScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Document Screen</Text>
            <Text style={styles.content}>This is the document screen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        color: '#333',
    },
});

export default DocumentScreen;