import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { useHomeViewModel } from '../viewModel/HomeViewModel';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeViewPage = () => {
  const { characters, error, isLoading } = useHomeViewModel();

  if (isLoading) {
    return <SafeAreaView><ActivityIndicator /></SafeAreaView>;
  }

  if (error) {
    return <SafeAreaView><Text>Error loading characters</Text></SafeAreaView>;
  }

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#000000' }}>Characters</Text>
            <FlatList
                data={characters}
                keyExtractor={(item) => item.userId.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>id: {item.userId}</Text>
                        <Text style={styles.text}>name: {item.characterName}</Text>
                    </View>)}
            />
        </View>
    </SafeAreaView>
  );
};
    
  const styles = StyleSheet.create({
    container: {
        flex: 0,
        paddingLeft: 16,
        paddingRight: 16,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#000000',
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000000',
    },
    itemContainer: {
        backgroundColor: '#0085FF',
        padding: 8,
        paddingHorizontal: 18,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        gap: 2
    },
    });

export default HomeViewPage;
